import React from 'react';
import EmailForm from '../components/EmailForm';

const Login = () => {
  const login = (input) => {
    console.log('Login input:', input);
  };

  return (
    <div>
      <h2>Login</h2>
      <EmailForm onSubmit={login}/>
    </div>
  );
};

export default Login;