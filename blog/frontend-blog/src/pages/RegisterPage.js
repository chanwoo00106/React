import React from 'react';
import RegisterFrom from '../containers/auth/RegisterFrom';
import AuthTemplate from '../components/auth/AuthTemplate';

export default function RegisterPage() {
  return (
    <AuthTemplate>
      <RegisterFrom />
    </AuthTemplate>
  );
}
