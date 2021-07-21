import React, { useState, useRef } from 'react';
import './style.css';

const Validation = () => {
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);
  const inputRef = useRef();

  const handleClick = () => {
    setClicked(true);
    setValidated(inputRef.current.value === '0000');
    inputRef.current.value = '';
  };
  const keyPress = (e) => {
    if (e.key === 'Enter') handleClick();
  };

  return (
    <div>
      <h1>useRef</h1>
      <input
        ref={inputRef}
        type="password"
        placeholder="input password"
        className={clicked ? (validated ? 'success' : 'failure') : ''}
        onKeyPress={keyPress}
      />
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

export default Validation;
