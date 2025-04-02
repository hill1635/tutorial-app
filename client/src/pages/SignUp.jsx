import React from 'react';
import EmailForm from '../components/EmailForm';

const SignUp = () => {
  const signUp = (input) => {
    console.log("Sign Up input:", input);
  };

  return (
    <div>
      <h2>SignUp</h2>
      <EmailForm onSubmit={signUp}/>
    </div>
  );
}

export default SignUp;