# redux

리덕스는 actions를 사용해서 state를 관리하고 업데이트 하기 위한 패턴 및 라이브러리입니다.<br>
애플리케이션의 전체 state를 관리하는 중앙 저장소 역할을 하고,<br>
`state가 actions을 통해서만 업데이트` 될 수 있도록하는 규칙을 가지고 있습니다.

## redux를 사용해야 하는 이유

애플리케이션의 state가 언제, 어디서, 왜, 어떻게 업데이트 되는지, 이러한 변경이 발생했을 때<br>
애플리케이션 로직이 어떻게 작동하는지 쉽게 이해 할 수 있습니다.

## redux를 사용할 때

- 많은 state가 있고, 여러 컴포넌트에서 사용해야 할 때
- state가 자주 업데이트 될 때
- state의 업데이트 로직이 복잡 할 때
- 크기가 큰 프로젝트에서 여러 사람들이 작업을 해야 할 때

## 프로젝트 구조

* components : 화면에 실제로 그려지는 컴포넌트를 담는 폴더
* containers : 리덕스 스토어와 컴포넌트를 이어주는 매개체를 담는 폴더
* modules : 리덕스의 State, Reducer를 정의한 파일들을 담는 폴더

## Redux 라이브러리 및 도구

> <b style="font-size: 1.5rem">React-Redux</b>
>
> React 구성 요소가 상태 조각을 읽고 저장소를 업데이트하는 작업을 전달하여<br>
> Redux 저장소와 상호 작용할 수 있도록하는 공식 패키지입니다.

> <b style="font-size: 1.5rem">Redux Toolkit</b>
>
> Redux Toolkit은 redux에서 제시하는 방법들을 기초로 해서 만들어졌고,<br>
> Redux를 사용할 때 필요한 대부분의 작업을 단순화시켜서 애플리케이션에 redux를 쉽게 적용할 수 있고<br>
> redux를 사용할 때 흔히 하는 실수를 방지 할 수 있습니다.

> <b style="font-size: 1.5rem">Redux DevTools Extension</b>
>
> 시간에 따른 저장소의 state 변화를 보여줍니다.<br>
> 이를 통해 효과적으로 디버깅 할 수 있습니다.

## 용어 정리

> <b style="font-size: 1.5rem">Actions</b>
>
> action은 type 이라는 키 값을 가지고 있는 자바스크립트 오브젝트입니다.<br>
> 애플리케이션에서 어떠한 이벤트가 일어날지에 대한 설명이라고 볼 수 있습니다.

> <b style="font-size: 1.5rem">Action Creators</b>
>
> action creator action 객체를 리턴하는 함수입니다.<br>
> action 생성자를 사용하게 되면 코드를 작성할 때마다<br>
> 일일이 action을 적지 않아도 됩니다.<br>
> 대충 아래와 같이 생겼습니다.

```js
const increase = count => {
    return {
        type: 'counter/increase',
        payload: count
    }
}

const decrease = count => {
    return {
        type: 'counter/decrease',
        payload: count
    }
}
```

> <b style="font-size: 1.5rem">Reducers</b>
>
> 현재 state와 action 객체를 받는 함수입니다.<br>
> state를 어떻게 업데이트할지 정하고,<br>
> 정해진 방법대로 코드를 적용한 새로운 state를 반환하기 위해 사용합니다<br>
>
> reducer는 받은 action(이벤트) type을 기반으로 이벤트를 처리하는<br>
> `이벤트 리스너라고` 할 수 있습니다.
>
> 대충 아래와 같이 생김
```js
const initialState = 0;

function reducer(state=initialState, action){
    switch(action.type){
        case 'increase':
            return state + action.payload;
        case 'decrease':
            return state - action.payload;
    }
}
```

> <b style="font-size: 1.5rem">store</b>
>
> 리덕스에서는 한 애플리케이션 당 하나의 스토어를 만들게 됩니다.<br>
> 스토어 안에는, 현재의 앱 상태와, 리듀서가 들어가있고,<br>
> 추가적으로 몇가지 내장 함수들이 있습니다.

> <b style="font-size: 1.5rem">dispatch</b>
>
> state를 업데이트하는 유일한 방법은 store.dispatch()를 사용해서 action객체를 전달하는 것 입니다.<br>
> store는 reducer 함수를 통해서 전달하는 action에 따라 실행하고<br>
> state를 업데이트 합니다. 업데이트 된 후 getState()를 실행하면<br>
> 업데이트 된 state를 확인 할 수 있습니다.

> <b style="font-size: 1.5rem">subscribe</b>
>
> subscribe 함수는, 함수 형태의 값을 파라미터로 받아옵니다.<br>
> subscribe 함수에 특정 함수를 전달해주면,<br>
> 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출됩니다.

> <b style="font-size: 1.5rem">Selectors</b>
>
> selector는 store state에서 특정 값을 추출하는 방식의 함수입니다.<br>
> 애플리케이션이 커지면서 앱의 다른 컴포넌트가 같은 데이터를 사용할 때<br>
> 반복되는 로직을 방지 할 수 있습니다.

