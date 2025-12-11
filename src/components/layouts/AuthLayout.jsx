// src/layouts/AuthLayout.jsx
import React from 'react';
import Logo from '../elements/Logo';

function AuthLayout(props) {
  const { children } = props;

  return (
    <div>
      <main className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
        {/* container start */}
        <div className="w-full max-w-sm">
          {/* logo start */}
          <Logo />
          {children}
          {/* logo end */}
        </div>
        {/* container end */}
      </main>
    </div>
  );
}

export default AuthLayout;