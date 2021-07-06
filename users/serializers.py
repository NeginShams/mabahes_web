from django.contrib.auth import authenticate
from rest_framework import serializers
from users.models import User, Patient, Doctor, Prescription
from django.db.models import Q
from rest_framework_simplejwt.tokens import RefreshToken


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_name', 'password', 'first_name', 'last_name', 'role')

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)

        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class PatientRegistrationSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Patient
        fields = '__all__'
 
    def create(self, validated_data):
        return Patient.objects.create_patient(**validated_data)

class DoctorRegistrationSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Doctor
        fields = '__all__'
 
    def create(self, validated_data):
        return Doctor.objects.create_doctor(**validated_data)


class UserLoginSerializer(serializers.Serializer):
    user_name = serializers.CharField(max_length=30)
    password = serializers.CharField(max_length=128, write_only=True)
    access_token = serializers.CharField(read_only = True)
    role = serializers.IntegerField(read_only=True)
 
    def validate(self, data):
        user_name = data.get('user_name', None)
        password = data.get('password', None)
 
        user = authenticate(username=user_name, password=password)
 
        if user is None:
            raise serializers.ValidationError(
                'A user with this username and password is not found.'
            )
        if user:
            refresh = RefreshToken.for_user(user)
            refresh_token = str(refresh)
            access_token = str(refresh.access_token)
        try:
            userObj = Patient.objects.get(user_name=user.user_name)
        except Patient.DoesNotExist:
            userObj = None 
 
        try:
            if userObj is None:
                userObj = Doctor.objects.get(user_name=user.user_name)
        except Doctor.DoesNotExist:
            raise serializers.ValidationError(
                'User with given username and password does not exists'
            )        
 
        # Django provides a flag on our `User` model called `is_active`. The
        # purpose of this flag is to tell us whether the user has been banned
        # or deactivated. This will almost never be the case, but
        # it is worth checking. Raise an exception in this case.
        if not user.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )
 
        # The `validate` method should return a dictionary of validated data.
        # This is the data that is passed to the `create` and `update` methods
        # that we will see later on.
        return {
            'user_name': user.user_name,
            # 'token': user.token
            'role': user.role,
            'access_token': access_token
        }

class TheUserLoginSerializer(serializers.ModelSerializer):
    # token = CharField(read_only=True)
    # user_name = CharField(read_only=True)
    # first_name = CharField(read_only=True)
    # last_name  = CharField(read_only=True)
    # password = serializers.CharField(max_length=128, write_only=True)
    # access = serializers.CharField(read_only=True)
    # refresh = serializers.CharField(read_only=True)
    # role = CharField(read_only=True)

    class Meta:
        model = User
        fields = [
            'user_name',
            'password',
            'first_name',
            'last_name',
            'role'
        ]

    def validate(self, data):
        # user_name = data['user_name']
        user_name = data.get('user_name',None)
        # password = data['password']
        password = data.get('password',None)
        user = authenticate(user_name=user_name, password=password)

        if user is None:
            raise serializers.ValidationError("Invalid login credentials")

        try:
            refresh = RefreshToken.for_user(user)
            refresh_token = str(refresh)
            access_token = str(refresh.access_token)

            update_last_login(None, user)

            validation = {
                'access': access_token,
                'refresh': refresh_token,
                'user_name': user.user_name,
                'role': user.role,
            }

            return validation

        except AuthUser.DoesNotExist:
            raise serializers.ValidationError("Invalid login credentials")


class MyUserLoginSerializer(serializers.Serializer):
    token = serializers.CharField(read_only = True)
    user_name = serializers.CharField()
    password = serializers.CharField()

    validation = {}


    def validate(self, data):

        user_name = data.get("user_name", None)
        password = data.get("password", None)
        access = serializers.CharField(read_only=True)
        refresh = serializers.CharField(read_only=True)
        medical_history = serializers.CharField(read_only=True)
        ME_number =serializers.CharField(read_only=True)
        education = serializers.CharField(read_only=True)

        if not user_name:
            raise serializers.ValidationError("a username is needed")
        if not password:
            raise serializers.ValidationError("a password is needed")
        
        user = User.objects.filter(
            Q(user_name = user_name)&
            Q(password = password)
        )
        # user = user.first()
        # if not user.exists():
        if user is None:
            raise serializers.ValidationError("wrong username or password")
        if user:
            refresh = RefreshToken.for_user(user)
            refresh_token = str(refresh)
            access_token = str(refresh.access_token)

            try:
                userObj = Patient.objects.all().filter(user_name = user_name)
                print(userObj)
                medical_history = userObj.medical_history
                validation = {
                'access': access_token,
                'refresh': refresh_token,
                'user_name': user.user_name,
                'medical_history':medical_history
                }
                print(validation)
                # return validation

            except Patient.DoesNotExist():
                userObj = None

            if userObj is None:
                try:
                    # if userObj is None:
                        userObj = Doctor.objects.get(user_name=user.user_name)
                        ME_number = userObj.ME_number
                        education = userObj.education
                        validation = {
                            'access': access_token,
                            'refresh': refresh_token,
                            'user_name': user.user_name,
                            'ME_number':ME_number,
                            'education':education
                        }
                        # return validation
                except Doctor.DoesNotExist():
                    raise serializers.ValidationError(    
                        'User with given username and password does not exists'
                    ) 
        return validation

# class PrescriptionSerializer'(serializers.ModelSerializer):
#     class Meta:
#         model = Prescription
#         fields = __all__


# class PrescriptionSerializer(serializers.Serializer):

#     # patient_username = serializers.CharField(max_length=30,read_only = True)
#     # prescription_content = serializers.CharField(max_length=30, read_only = True)
#     # patient_firstname = serializers.CharField(read_only = True)
#     # patient_lastname = serializers.CharField(read_only = True)


#     def validate(self, data):
#         patient_username = data.get('patient_username')
#         prescription_content = data.get("prescription_content")
#         if patient_username is None:
#             raise serializers.ValidationError("you must enter a username")
#         else:
#             try:
#                 userObj = Patient.objects.filter(user_name = user_name)
#                 userObj = userObj.first()
#                 # patient_firstname = userObj.values("first_name")
#                 # patient_lastname = userObj.values("last_name")
#             except Patient.DoesNotExist:
#                 raise serializers.ValidationError(" no such patient")

#         return data       
#         # return {
#         #     'patient_username': patient_username,
#         #     'prescription_content': prescription_content
#         #     # 'patient_firstname': patient_firstname,
#         #     # 'patient_lastname':patient_lastname

#         # }

class PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = ['patient_username', 'prescription_content']

class PatientPrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = '__all__'

class DoctorInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['user_name', 'first_name', 'last_name', 'ME_number', 'education', 'role']

class PatientInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['user_name', 'first_name', 'last_name', 'medical_history', 'role']


    
    