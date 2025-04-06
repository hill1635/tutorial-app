import React from 'react';
import EmailForm from '../components/EmailForm';
import UserAPI from '../utils/UserAPI';
import { useState } from 'react';

const SignUp = () => {
  const [notifications, setNotifications] = useState([]);
  const signUp = (input) => {
    UserAPI.create(input)
    .then(res => {
      if (res.data.messages) {
        setNotifications(res.data.messages);
      }
    });
  };

  return (
    <div>
      <h2>SignUp</h2>
      <EmailForm onSubmit={signUp}/>
    </div>
  );
}

export default SignUp;