import React, { useRef } from 'react';

export default function Scroll() {
  const boxRef = useRef();
  const style = {
    border: '1px solid black',
    height: '300px',
    width: '300px',
    overflow: 'auto',
    position: 'relative',
  };

  const innerStyle = {
    width: '100%',
    height: '650px',
    background: 'linear-gradient(white, black)',
  };

  function scrollToBottom() {
    const { scrollHeight, clientHeight } = boxRef;
    boxRef.scrollTop = scrollHeight - clientHeight;
  }

  return (
    <div>
      <h1>ScrollRef</h1>
      <div style={style} ref={boxRef}>
        <div style={innerStyle}></div>
      </div>
      <button onClick={scrollToBottom}>click me</button>
    </div>
  );
}
