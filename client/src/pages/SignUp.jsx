import React from 'react';
import EmailForm from '../components/EmailForm';
import UserAPI from '../utils/UserAPI';

const SignUp = () => {
  const signUp = (input) => {
    UserAPI.create(input);
  };

  return (
    <div>
      <h2>SignUp</h2>
      <EmailForm onSubmit={signUp}/>
    </div>
  );
}

export default SignUp;