# useEffect

useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook 이다

클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 봐도 무방하다

```js
// 컴포넌트가 렌더링될 때마다 'hello!'를 출력함
import React, { useEffect } from 'react';

export default function test() {
  useEffect(() => {
    console.log('hello!');
  });
  return <div>This is useEffect test</div>;
}
```

```js
// 마운트될 때만 실행됨
import React, { useEffect } from 'react';

export default function test2() {
  useEffect(() => {
    console.log('hello!');
  }, []);
  return <div>This is useEffect test</div>;
}
```

```js
// 지정해준 socre 값이 바뀌면 'hello'가 출력 되는 것을 볼 수 있다.
import React, { useEffect, useState } from 'react';

export default function EffectTest() {
  const [score, setScore] = useState(0);
  //------------------------------
  useEffect(() => {
    console.log('hello');
  }, [score]);
  //------------------------------
  return (
    <div>
      <div>{score}</div>
      <button
        onClick={() => {
          setScore(score + 1);
        }}
      >
        click
      </button>
    </div>
  );
}
```

useEffect는 기본적으로 렌더링되고 난 직후마다 실핵되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다

컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리 함수를 반환해 주어야 한다

```js
useEffect(() => {
  console.log('effect');
  console.log(name);
  return () => {
    console.log('cleanup');
    console.log(name);
  };
}, [name]);
```
