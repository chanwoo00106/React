# useCallback

컴포넌트는 자신이 가지고 있는 state나 부모에게 받는  변경될 때마다 리렌더링 되는데 그때 내부에 있는 변수나 함수 같은 것들도 매번 다시 선언되어 사용된다.

예를 들어 useMemo의 예제에 return 위에 console.log를 찍어주면

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

    console.log("Parent");

    return (
        <div>
            <input type="number" value={a} onChange={changeA} />
            <input type="number" value={b} onChange={changeB} />
            <Child a={a} b={b} />
        </div>
    );
}
```

input 태그에 값이 바뀔 때마다 Parent가 찍히는 것을 볼 수 있다.<br>
즉 여기서 input 태그에 값이 바뀌면 changeA나 changeB도 재선언 된다고 볼 수 있다.<br>
하지만 changeA나 changeB는 첫 마운트 될 때 한 번만 선언하고 재사용하면 되지 않을까?

```js
// Parent.js
// 상위 컴포넌트
import React, {useState, useCallback} from 'react'
import Child from './Child'

export default function Parent() {

    const [a, setA] = useState();
    const [b, setB] = useState();

    const changeA = useCallback((e) => {
        setA(Number(e.target.value));
    }, []);

    const changeB = useCallback((e) => {
        setB(Number(e.target.value));
    }, []);

    return (
        <div>
            <input type="number" value={a} onChange={changeA} />
            <input type="number" value={b} onChange={changeB} />
            <Child a={a} b={b} />
        </div>
    );
}
```

Parent.js에서 useCallback을 import 해주고 changeA와 changeB를 위와 같이 바꿔보자.<br>
첫 마운트 될 때만 선언되었는지 아닌지는 확인하기 어렵겠지만 위와 같이 사용된다.<br>
주로 API를 요청하는 함수를 useCallback으로 선언 한다고 한다.<br>