# useEffect
useEffect는 기본적으로 몇 가지 조건에 의해 작동하게 된다

1. 페이지가 렌더링 되고 난 후 한 번 실행됨
2. useEffect에서 배열로 지정한 useState 값이 변경되면 실행됨

즉 useEffect는 렌더링, 변수의 값이 달라지게 되면 그것을 인지하여 업데이트를 해주는 함수다.

```js
// 페이지가 렌더링 되고 난 후 한 번 실행됨
import React, { useEffect } from 'react';

export default function test(){
    useEffect(() => {
        console.log('hello!');
    });
    return (
        <div>This is useEffect test</div>
    );
}
```
```js
// 지정해준 socre 값이 바뀌면 'hello'가 출력 되는 것을 볼 수 있다.
import React, { useEffect, useState } from 'react';

export default function EffectTest(){
    const [score, setScore] = useState(0);
//------------------------------
    useEffect(() => {
        console.log("hello");
    }, [score]);
//------------------------------
    return (
        <div>
            <div>{score}</div>
            <button onClick={() => {
                setScore(score + 1)
            }} >click</button>
        </div>
    );
}
```
