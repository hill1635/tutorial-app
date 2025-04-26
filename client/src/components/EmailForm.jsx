import React from 'react';
import { useState } from 'react';

const EmailForm = ({ onSubmit }) => {
  const [input, setInput] = useState({});

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        onInput={(e) => setInput({ ...input, email: e.target.value })}
        type="email"
        id="email"
        name="email"
        value={input.email}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        onInput={(e) => setInput({ ...input, password: e.target.value })}
        type="password"
        id="password"
        name="password"
        value={input.password}
        required />
      <button onClick={() => onSubmit(input)}>Submit</button>
    </div>
  );
};

export default EmailForm;