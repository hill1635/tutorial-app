import React from 'react';
import { useState, useEffect } from 'react';

const EmailForm = ({ onSubmit }) => {
  const [ input, setInput ] = useState({email: '', password: ''});

  useEffect(() => {
    console.log("input:", input);
  }, [ input ]);

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        onInput={(e) => setInput({...input, email: e.target.value})}
        type="email"
        id="email"
        name="email"
        value={input.email}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        onInput={(e) => setInput({...input, password: e.target.value})}
        type="password"
        id="password"
        name="password"
        value={input.password}
        required />
      <button onClick={() => onSubmit(input)}>Submit</button>
    </form>
  );
}

export default EmailForm;