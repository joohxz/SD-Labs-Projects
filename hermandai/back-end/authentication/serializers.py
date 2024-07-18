from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from django.core.mail import send_mail
from django.conf import settings
import uuid

User = get_user_model()


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['username'] = user.username
        return token


class RegisterBusinessSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    name = serializers.CharField(required=True)
    surname = serializers.CharField(required=True)
    business_name = serializers.CharField(required=True)
    business_address = serializers.CharField(required=True)
    ceo_full_name = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ('email', 'name', 'surname', 'business_name',
                  'business_address', 'ceo_full_name')
        extra_kwargs = {
            'email': {'required': True},
        }

    def create(self, validated_data):
        user = User.objects.create(
            username=uuid.uuid4().hex,
            email=validated_data['email'],
            name=validated_data['name'],
            surname=validated_data['surname'],
            business_name=validated_data['business_name'],
            business_address=validated_data['business_address'],
            ceo_full_name=validated_data['ceo_full_name']
        )

        user.save()

        # create a link to send to the admin to approve the user

        send_mail(
            'New User Registration',  # subject
            f'A new user has registered: {validated_data["email"]}\n\n'
            f'Name: {validated_data["name"]}\n'
            f'Surname: {validated_data["surname"]}\n'
            f'Business Name: {validated_data["business_name"]}\n'
            f'Business Address: {validated_data["business_address"]}\n'
            f'CEO Full Name: {validated_data["ceo_full_name"]}\n\n'
            'To approve this user, please click the following link:\n'
            f'https://hermandai-development-backend.up.railway.app//auth/register/approve/{str(user.username)}/\n\n'
            'To disapprove this user, please click the following link:\n'
            # message
            f'https://hermandai-development-backend.up.railway.app//auth/register/disapprove/{str(user.username)}/',
            settings.EMAIL_HOST_USER,  # from email
            [settings.ADMIN_EMAIL],  # to email
            fail_silently=False,
        )

        return user


class RegisterProfessionalSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    name = serializers.CharField(required=True)
    surname = serializers.CharField(required=True)
    job_title = serializers.CharField(required=True)
    current_company = serializers.CharField(required=True)
    referral = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ('email', 'name', 'surname', 'job_title',
                  'current_company', 'referral')
        extra_kwargs = {
            'email': {'required': True},
        }

    def create(self, validated_data):
        user = User.objects.create(
            username=uuid.uuid4().hex,
            email=validated_data['email'],
            name=validated_data['name'],
            surname=validated_data['surname'],
            job_title=validated_data['job_title'],
            current_company=validated_data['current_company'],
            referral=validated_data['referral']
        )

        user.save()

        send_mail(
            'New User Registration',  # subject
            f'A new user has registered: {validated_data["email"]}\n\n'
            f'Name: {validated_data["name"]}\n'
            f'Surname: {validated_data["surname"]}\n'
            f'Job Title: {validated_data["job_title"]}\n'
            f'Current Company: {validated_data["current_company"]}\n'
            f'Referral: {validated_data["referral"]}\n\n'
            'To approve this user, please click the following link:\n'
            f'https://hermandai-development-backend.up.railway.app//auth/register/approve/{str(user.username)}/\n\n'
            'To disapprove this user, please click the following link:\n'
            f'https://hermandai-development-backend.up.railway.app//auth/register/disapprove/{str(user.username)}/',
            # message
            settings.EMAIL_HOST_USER,  # from email
            [settings.ADMIN_EMAIL],  # to email
            fail_silently=False,
        )

        return user


class ChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('old_password', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError(
                {"old_password": "Old password is not correct"})
        return value

    def update(self, instance, validated_data):

        instance.set_password(validated_data['password'])
        instance.save()

        return instance


class UpdateUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
        }

    def validate_email(self, value):
        user = self.context['request'].user
        if User.objects.exclude(pk=user.pk).filter(email=value).exists():
            raise serializers.ValidationError(
                {"email": "This email is already in use."})
        return value

    def validate_username(self, value):
        user = self.context['request'].user
        if User.objects.exclude(pk=user.pk).filter(username=value).exists():
            raise serializers.ValidationError(
                {"username": "This username is already in use."})
        return value

    def update(self, instance, validated_data):
        instance.first_name = validated_data['first_name']
        instance.last_name = validated_data['last_name']
        instance.email = validated_data['email']
        instance.username = validated_data['username']

        instance.save()

        return instance


class ApproveSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('reasons', )
        extra_kwargs = {
            'reasons': {'required': True},
        }

    def update(self, instance, validated_data):
        instance.is_pending = False
        instance.is_approved = True
        instance.reasons = validated_data['reasons']

        instance.save()

        send_mail(
            'User Approved',  # subject
            f'Your account has been approved. Please complete your register by clicking the following link:\n'
            f'https://hermandai-development-backend.up.railway.app//auth/register/complete/{str(instance.username)}/\n\n',
            settings.EMAIL_HOST_USER,  # from email
            [instance.email],  # to email
            fail_silently=False,
        )

        return instance


class DisapproveSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('reasons', )
        extra_kwargs = {
            'reasons': {'required': True},
        }

    def update(self, instance, validated_data):
        instance.is_pending = False
        instance.is_disapproved = True
        instance.reasons = validated_data['reasons']

        instance.save()

        send_mail(
            'User Disapproved',  # subject
            f'Your account has been disapproved. Please contact us for more information.\n'
            'http://hermandai-development/contact-us/\n\n',
            settings.EMAIL_HOST_USER,  # from email
            [instance.email],  # to email
            fail_silently=False,
        )

        return instance


class CompleteRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('password', 'password2', 'subscription_type')
        extra_kwargs = {
            'password': {'required': True},
            'subscription_type': {'required': True},
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
            {"password": "Password fields didn't match."})

        return attrs

    def update(self, instance, validated_data):
        instance.is_pending = False
        instance.set_password(validated_data['password'])
        instance.subscription_type = validated_data['subscription_type']
        instance.save()

        return instance
