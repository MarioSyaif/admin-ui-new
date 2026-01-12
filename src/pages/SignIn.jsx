import React, { useContext } from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import FormSignIn from '../components/fragments/FormSignIn';
import { loginService } from "../services/AuthServices";
import { AuthContext } from '../context/AuthContext';

function SignIn() {
    const { login } = useContext(AuthContext);

  	const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);
			
			login(refreshToken); 
    } catch (err) {
      console.error(err.msg);
    }
  };

  return (
    <AuthLayout>
        <FormSignIn onSubmit={handleLogin} />
    </AuthLayout>
  )
}

export default SignIn