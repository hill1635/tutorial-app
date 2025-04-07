import React from 'react';
import EmailForm from '../components/EmailForm';
import UserAPI from '../utils/UserAPI';
import { useState } from 'react';
import Notifications from '../components/Notifications';

const SignUp = () => {
  const [messages, setMessages] = useState([]);
  const signUp = (input) => {
    UserAPI.create(input)
    .then(res => {
      if (res.data.messages) {
        setMessages(res.data.messages);
      }
    });
  };

  return (
    <div>
      <h2>SignUp</h2>
      <Notifications messages={messages}/>
      <EmailForm onSubmit={signUp}/>
    </div>
  );
}

export default SignUp;