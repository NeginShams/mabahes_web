
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated


from .models import Prescription, Patient, Doctor
import datetime

from users.serializers import PatientRegistrationSerializer, DoctorRegistrationSerializer, UserLoginSerializer, MyUserLoginSerializer
from users.serializers import RegisterUserSerializer, PrescriptionSerializer, PatientPrescriptionSerializer
from .serializers import DoctorInfoSerializer, PatientInfoSerializer



class CustomUserCreate(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        reg_serializer = RegisterUserSerializer(data=request.data)
        if reg_serializer.is_valid():
            newuser = reg_serializer.save()
            if newuser:
                return Response(status = status.HTTP_201_CREATED)
            return Response(reg_serializer.errors, status= status.HTTP_400_BAD_REQUEST)


class PatientRegistration(APIView):
    permission_classes = [AllowAny]
    # renderer_classes = (UserJSONRenderer,)
    serializer_class = PatientRegistrationSerializer
 
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)



class DoctorRegistration(APIView):
    permission_classes = [AllowAny]
    serializer_class = DoctorRegistrationSerializer
 
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class UserLogin(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserLoginSerializer
 
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AuthUserLoginView(APIView):
    serializer_class = UserLoginSerializer
    permission_classes = (AllowAny, )

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        valid = serializer.is_valid(raise_exception=True)

        if valid:
            status_code = status.HTTP_200_OK

            response = {
                'success': True,
                'statusCode': status_code,
                'message': 'User logged in successfully',
                'access': serializer.data['access'],
                'refresh': serializer.data['refresh'],
                'authenticatedUser': {
                    'user_name': serializer.data['user_name'],
                    'role': serializer.data['role']
                }
            }

            return Response(response, status=status_code)

class Save_prescriptions(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PrescriptionSerializer

    def post(self, request):
        print(request.data)
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        instance = Prescription()

        instance.doctor_username = request.user.user_name
        instance.doctor_firstname = request.user.first_name
        instance.doctor_last_name = request.user.last_name
        instance.patient_username = serializer.validated_data['patient_username']
        instance.prescription_content = serializer.validated_data['prescription_content']
        instance.date_of_prescribe = datetime.datetime.now()

        instance.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class See_prescription(APIView):
    permission_classes = [IsAuthenticated]
    # serializer_class = PatientPrescriptionSerializer

    def get(self, request):
        user_name = request.user.user_name
        prescriptions = Prescription.objects.filter(patient_username=user_name)
        serializer = PatientPrescriptionSerializer(prescriptions, many=True)
        return Response(serializer.data)


class PatientInformation(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_name = request.user.user_name
        patient = Patient.objects.filter(user_name=user_name)
        serializer = PatientInfoSerializer(patient, many = True)
        return Response(serializer.data)

class DoctorInformation(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_name = request.user.user_name
        doctor = Doctor.objects.filter(user_name=user_name)
        serializer = DoctorInfoSerializer(doctor, many = True)
        return Response(serializer.data)






        



