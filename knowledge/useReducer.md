# useReducer

useReducer는 state가 많고 state 변경하는 함수가 복잡할 때 사용한다

예를 들어

```js
import React, {useState} from 'react';

export default function Index() {

    const [count, setCount] = useState(0);

    function plus() {
        setCount(count + 1);
    }

    function minus() {
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <div>{count}</div>
        </div>
    );
}
```

이 코드에 있는 plus 함수라든가 minus 라든가 onchange 같은 state를 변경하는 함수들을 useReducer를 사용해 하나로 합쳐 보겠다.

```js
// Index.js
import React, { useReducer } from "react";
import { stateInitional, indexReducer } from "./IndexReducer";

export default function Index() {
  const [state, dispatch] = useReducer(indexReducer, stateInitional);

  return (
    <div>
      <button onClick={() => {dispatch({type: 'plus'})}}>+</button>
      <button onClick={() => {dispatch({type: 'minus'})}}>-</button>
      <div>{state.count}</div>
    </div>
  );
}
```

Index.js에서는 IndexReducer라는 파일을 불러와서 useReducer에 넣어주고 state와 dispatch로 받아서 사용한다

```js
//IndexReducer.js
export const stateInitional = {
  count: 0
};

export const indexReducer = (state, action) => {
  switch (action.type) {
    case "plus": {
      return {
        ...state,
        count: state.count + 1
      };
    }
    case "minus": {
      return {
        ...state,
        count: state.count - 1
      };
    }
  }
};

```

IndexReducer.js에서는 useState 대신 stateInitional을<br>
여러 함수 대신 indexReducer에서 switch로 처리한다
