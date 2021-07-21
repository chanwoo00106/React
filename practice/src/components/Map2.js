import React, { useState, useRef } from 'react';

export default function Map2() {
  const [names, setNames] = useState([]);
  const [nextId, setNextId] = useState(1);
  const InputRef = useRef();

  function handleClick() {
    const nextNames = names.concat({
      // concat 함수는 기존배열을 변경하지 않고 다른 배열이나 값들을 합쳐 반환한다
      id: nextId,
      text: InputRef.current.value,
    });
    console.log(nextNames);
    setNames(nextNames);
    setNextId(nextId + 1);
    InputRef.current.value = '';
  }

  function remove(id) {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  }

  return (
    <div>
      <h1>Map2</h1>
      <input
        ref={InputRef}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleClick();
        }}
      />
      <button onClick={handleClick}>add</button>
      <ul>
        {names.map((data) => (
          <li onDoubleClick={() => remove(data.id)} key={data.id}>
            {data.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
