# props

> props는 component에 값을 전달할 때 사용한다

```javascript
function a(props) {
  console.log(props.name);
  <h1>{props.name}</h1>;
}

function App() {
  return (
    <div>
      <a name="Teemo" />
    </div>
  );
}
```

> 여기서 a 함수에 props의 변수 이름을 바꿀 수 있다.
> 아래와 같은 코드처럼

```javascript
function a({ name }) {
  console.log(name);
  <h1>{name}</h1>;
}

function App() {
  return (
    <div>
      <a name="Teemo" />
    </div>
  );
}
```