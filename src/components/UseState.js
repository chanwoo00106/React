import React, { useState } from 'react';

const Usestate = () => {
  const [message, setMessage] = useState('None');
  const [color, setColor] = useState('black');

  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  return (
    <div>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('blue')}>Blue</button>
      <button onClick={() => setColor('green')}>Green</button>
    </div>
  );
};

export default Usestate;
