import React, { useContext } from 'react';
import EmailForm from '../components/EmailForm';
import SessionAPI from '../utils/SessionAPI';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const submit = (input) => {
    SessionAPI.login(input)
    .then((response) => {
      if (response.status === 200) {
        setUser(response.data);
      } else {
        console.error('Login failed:', response.data);
      }
    }
    )
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
