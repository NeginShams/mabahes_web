from django.urls import path
from .views import PatientRegistration, DoctorRegistration, UserLogin, CustomUserCreate, Save_prescriptions
from .views import See_prescription, PatientInformation, DoctorInformation


app_name = 'users'

urlpatterns = [
    path('patient_register/', PatientRegistration.as_view(), name = 'patient_register'),
    path('doctor_register/', DoctorRegistration.as_view(), name = 'doctor_register'),
    path('user_register/', CustomUserCreate.as_view(), name = 'user_register'),
    path('user_login/', UserLogin.as_view(), name = 'user_login'),
    path('save_recipe/',Save_prescriptions.as_view(), name = 'save_recipe'),
    path('see_recipe/',See_prescription.as_view(), name='see_recipe' ),
    path('patient_info/', PatientInformation.as_view(), name ='patient_info'),
    path('doctor_info/', DoctorInformation.as_view(), name='doctor_info')
]