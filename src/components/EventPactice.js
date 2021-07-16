import React, { useState } from 'react';

const EventPractice = () => {
  const [input, setInput] = useState({
    username: '',
    text: '',
  });

  const { username, text } = input;

  const handleChage = (e) => {
    const nextForm = {
      ...input,
      [e.target.name]: e.target.value,
    };
    setInput(nextForm);
  };

  const handleClick = (e) => {
    alert(`${text} : ${username}`);
    setInput({
      username: '',
      text: '',
    });
  };

  return (
    <div>
      <h1>Event Practice</h1>
      <h3>{text}</h3>
      <input
        type="text"
        name="text"
        placeholder="아무거나 입력하시오"
        value={text}
        onChange={handleChage}
      />
      <br />
      <h3>{username}</h3>
      <input
        type="text"
        name="username"
        placeholder="아무거나"
        value={username}
        onChange={handleChage}
      />
      <br />
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

export default EventPractice;
