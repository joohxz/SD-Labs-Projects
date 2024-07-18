from django.urls import path
from authentication import views
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView


urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/business/', views.RegisterBusinessView.as_view(),
         name='auth_register_business'),
    path('register/approve/<str:username>/', views.ApproveView.as_view(),
         name='auth_register_business_approve'),
    path('register/disapprove/<str:username>/', views.DisapproveView.as_view(),
         name='auth_register_business_disapprove'
         ),
    path('register/complete/<str:username>/',
         views.CompleteRegisterView.as_view(), name='auth_register_business_complete'),
    path('register/professional/', views.RegisterProfessionalView.as_view(),
         name='auth_register_professional'),
    path('change_password/<int:pk>/', views.ChangePasswordView.as_view(),
         name='auth_change_password'),
    path('update_profile/<int:pk>/', views.UpdateProfileView.as_view(),
         name='auth_update_profile'),
    path('logout/', views.LogoutView.as_view(), name='auth_logout'),
    path('logout_all/', views.LogoutAllView.as_view(), name='auth_logout_all'),
]
