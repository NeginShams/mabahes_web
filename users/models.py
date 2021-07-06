from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _
# from django.contrib.auth.models import AbstractBaseUser, PermissionMixin, BaseUserManager
from django.contrib.auth.models import AbstractBaseUser,  BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.utils import timezone


class CustomAccountManager(BaseUserManager):
    def create_superuser(self, user_name, password, first_name, last_name,  role, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Super user must be assigned to is_staff = True')

        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Super user must be assigned to is_superuser = True')

        return self.create_user(user_name, password, first_name, last_name, role, **other_fields)

    def create_user(self, user_name, password, first_name, last_name,  role, **other_fields):
        if not user_name:
            raise ValueError (_('you must provide a username'))

        user = self.model(user_name=user_name, **other_fields)
        user.set_password(password)
        user.save()
        return user 


class UserManager(BaseUserManager):
 
    def get_by_natural_key(self, user_name):
        return self.get(user_name = user_name)


class PatientManager(BaseUserManager):
 
    def create_patient(self, user_name, password, first_name, last_name, role, medical_history):
        if user_name is None:
            raise TypeError('Users must have an username.')
        patient = Patient(user_name = user_name, password = password, first_name=first_name, last_name=last_name,
                          role = role, medical_history = medical_history)

        patient.set_password(password)
        patient.save()
        return patient

class DoctorManager(BaseUserManager):
 
    def create_doctor(self, user_name, password, first_name, last_name, role, ME_number, education):
        if user_name is None:
            raise TypeError('Users must have an username.')
        doctor = Doctor(user_name = user_name, password = password, first_name=first_name, last_name=last_name,
                          role = role, ME_number = ME_number, education = education )

        doctor.set_password(password)
        doctor.save()
        return doctor




class User(AbstractBaseUser, PermissionsMixin):
# class User(AbstractBaseUser):
    ADMIN = 1
    PATIENT = 2
    DOCTOR = 3

    ROLE_CHOICES = (
        (ADMIN, 'Admin'),
        (PATIENT, 'Patient'),
        (DOCTOR, 'Doctor')
    )

    # username = username.USERNAME_FIELD(_('user name'), unique=True)
    user_name = models.CharField(max_length=30, unique = True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    # education = models.CharField(max_length=50, blank=True)
    role = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, blank=True, null=True, default=7)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)
    is_staff = models.BooleanField(default = False)

    objects = CustomAccountManager()
    # objects = UserManager()

    USERNAME_FIELD = 'user_name'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'role']

    def __str__(self):
        return self.first_name


class Patient(User):
    medical_history = models.TextField(blank = True)

    USERNAME_FIELD = 'user_name'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'role']
 
    objects = PatientManager()
 
    def __str__(self):
        return self.first_name
    
class Doctor(User):
    ME_number = models.CharField(max_length=30, unique = True)
    education = models.CharField(max_length=50, blank=True)

    USERNAME_FIELD = 'user_name'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'role']

    objects = DoctorManager()
 
    def __str__(self):
        return self.first_name

class Prescription(models.Model):
    doctor_username = models.CharField(max_length=30)
    patient_username = models.CharField(max_length=30)
    prescription_content = models.TextField()
    doctor_firstname = models.CharField(max_length=30)
    doctor_lastname = models.CharField(max_length=30)
    date_of_prescribe = models.DateTimeField(auto_now=False, auto_now_add=False)
