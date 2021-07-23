# useMemo

예를 들어 아래와 같은 예제가 있다고 하자

```js
// Parent.js
// 상위 컴포넌트
import React, {useState} from 'react'
import Child from './Child'

export default function Parent() {

    const [a, setA] = useState();
    const [b, setB] = useState();

    function changeA(e) {
        setA(Number(e.target.value));
    }

    function changeB(e) {
        setB(Number(e.target.value));
    }

    return (
        <div>
            <input type="number" value={a} onChange={changeA} />
            <input type="number" value={b} onChange={changeB} />
            <Child a={a} b={b} />
        </div>
    );
}
```

```js
// Child.js
// 하위 컴포넌트
import React from 'react'

export default function Child({ a, b }) {

    const multiply = (a) => {
        console.log('multiply');
        return a * a;
    };

    const add = (b) => {
        console.log('add');
        return b + b;
    }

    return (
        <div>
            <div>곱한 값 : {multiply(a)}</div>
            <div>더한 값 : {add(b)}</div>
        </div>
    );
}
```

parent 컴포넌트는 a와 b를 입력받는 컴포넌트이고, Child는 a * a 값과 b + b 값을 화면에 보여주고 곱해졌다면 콘솔에 multiply를 출력하고 더해졌다면 add를 출력하는 컴포넌트이다.<br>
하지만 실행해 보면 콘솔에는 a 값과 b 값 중 하나만 바뀌어도 multiply와 add가 같이 출력 되는 것을 볼 수 있다.<br>
이렇게 간단한 계산이면 별문제는 없는데 만약 두 함수가 2초 이상이나 된다면 둘 중 하나만 바뀌어도 4초 이상을 기다려야 하는 문제가 발생한다.<br>
이러한 문제를 막기 위해 useMemo를 사용한다.

아래와 같이 Child.js 파일에서 useMemo를 import 하고 multiply와 add 함수를 실행하는 부분을 아래와 같이 바꿔보자.

```js
// Child.js
// 하위 컴포넌트
import React, { useMemo } from "react";

export default function Child({ a, b }) {
  const multiply = (a) => {
    console.log("multiply");
    return a * a;
  };

  const add = (b) => {
    console.log("add");
    return b + b;
  };

  return (
    <div>
      <div>곱한 값 : {useMemo(() => multiply(a), [a])}</div>
      <div>더한 값 : {useMemo(() => add(b), [b])}</div>
    </div>
  );
}

```

이렇게 바꾸면 a가 바뀌었을 땐 multiply만 실행되고 b가 바뀌었을 땐 add만 실행이 된다.

정리하자면 useMemo는 불필요한 계산을 막기 위해 사용된다