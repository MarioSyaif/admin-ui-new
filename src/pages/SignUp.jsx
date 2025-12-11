// src/pages/SignUp.jsx
import React from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import FormSignUp from '../components/fragments/FormSignUp';

function SignUp() {
  return (
    <AuthLayout>
      <FormSignUp />
    </AuthLayout>
  );
}

export default SignUp;