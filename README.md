# React

> node를 설치한 후에 입력

```
npm create react-app {프로젝트명}
cd {프로젝트명}
npm start
```

> 코드는 App.js에서 짠다
> React는 html대신 JSX를 사용한다
> 이유는 js와 충돌이 일어나기 때문이다
>
> React는 데이터 바인딩이 쉽다
> (생각하는 모든 곳에 가능)
> EX) {변수명, 함수등}

```Javascript
function App() {
  let title = 'hi'
 return (
    <div className="{ title }">
      <div className="title">
        <div>{ title }</div>
      </div>
    </div>
  );
}
```

+ 기초
  + [style 작성법](knowledge/style.md)
  + [Event 처리](knowledge/Event.md)
  + [component](knowledge/component.md)
  + [export default](knowledge/export-default.md)
  + [props](knowledge/props.md)
  + [map](knowledge/map.md)
  + [promise & async](knowledge/promise&async.md)
  + [SPA란?](knowledge/SPA.md)
  + [React.memo](knowledge/React.memo.md)
  + [generator Function](knowledge/generatorFunction.md)

+ Hooks
  + [useCallback](knowledge/useCallback.md)
  + [useEffect](knowledge/useEffect.md)
  + [useMemo](knowledge/useMemo.md)
  + [useReducer](knowledge/useReducer.md)
  + [NavLink와 Link](knowledge/NavLink와Link.md)
  + [useState](knowledge/useState.md)
    + [immer](knowledge/immer.md)

+ Redux
  + [connect](knowledge/connect.md)

## 조금 중요한거 설명

- redux-thunk: 비동기 작업을 처리할 때 가장 많이 사용하는 미들웨어입니다.<br>
  객체가 아닌 함수 형태의 액션을 디스패치할 수 있게 해 줍니다.<br>
  ex) `dispatch(increase(num))`

- redux-saga: 특정 액션이 디스패치되었을 때 정해진 로직에 따라 다른 액션을<br>
  디스패치시키는 규칙을 작성하여 비동기 작업을 처리할 수 있게 해 줍니다.