// src/components/fragments/FormSignUp.jsx
import React from 'react';
import LabeledInput from '../elements/LabeledInput';
import CheckBox from '../elements/CheckBox';
import Button from '../elements/Button';

function FormSignUp() {
  return (
    <>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-xl font-bold text-gray-02">Create an account</h1>
      </div>

      {/* form start */}
      <div className="mt-4">
        <form>
          <div className="mb-6">
            <LabeledInput
              label="Name"
              id="name"
              type="text"
              placeholder="Tanzir Rahman"
              name="name"
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Password"
              id="password"
              type="password"
              placeholder="●●●●●●●●●●"
              name="password"
              showEyeIcon={true} // ⚠️ Pastikan komponen LabeledInput mendukung ini
            />
          </div>

          {/* Terms agreement */}
          <div className="mb-6 text-xs text-gray-03">
            By continuing, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">
              terms of service.
            </a>
          </div>

          <Button variant="primary">Sign up</Button>
        </form>
      </div>
      {/* form end */}

      {/* teks pemisah */}
      <div className="my-9 px-7 flex justify-center items-center text-xs text-gray-03 relative">
        <div className="border border-gray-05 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute"> or sign up with</div>
      </div>

      {/* sign in with google */}
      <div className="mb-8">
        <button
          type="button"
          className="w-full h-12 rounded-md text-sm font-medium bg-gray-100 text-gray-800 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EB4335" d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"/>
            <path fill="#34A853" d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"/>
            <path fill="#FBBC05" d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"/>
            <path fill="#4285F4" d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"/>
          </svg>
          Continue with Google
        </button>
      </div>

      {/* link to sign in */}
      <div className="flex justify-center text-sm text-gray-03">
        Already have an account?{" "}
        <Link to="/login" className="text-primary text-sm font-bold">
          Sign In Here
        </Link>
      </div>
    </>
  );
}

export default FormSignUp;