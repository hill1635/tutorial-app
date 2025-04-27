import React, { useContext } from 'react';
import EmailForm from '../components/EmailForm';
import SessionAPI from '../utils/SessionAPI';
import { SessionContext } from '../context/SessionContext';

const Login = () => {
  const { setSession } = useContext(SessionContext);
  const submit = (input) => {
    SessionAPI.login(input)
      .then((response) => {
        if (response.status === 200) {
          setSession(response.data);
        } else {
          console.error('Login failed:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <EmailForm onSubmit={submit} />
    </div>
  );
};

export default Login;
