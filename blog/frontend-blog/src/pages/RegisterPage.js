import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

export default function RegisterPage() {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
}
