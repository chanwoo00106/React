import React, { useState } from 'react';
import './Validation.css';

const Validation = () => {
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setValidated(password === '0000');
    setPassword('');
  };

  const keyPress = (e) => {
    if (e.key === 'Enter') handleClick();
  };

  return (
    <div>
      <input
        type="password"
        placeholder="input password"
        value={password}
        className={clicked ? (validated ? 'success' : 'failure') : ''}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        onKeyPress={keyPress}
      />
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

export default Validation;
