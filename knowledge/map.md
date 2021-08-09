# map

> component가 늘어나고 그에 따라 props가 바뀐다고 해보자 이걸 코드로 작성하면 굉장히 더러운 코드가 될 것이다
> 이럴 때일수록 map 함수를 꼭 사용해야 한다
> map의 사용법은 배열.map(변수명 => ( 하나하나에 적용할 것들 ))
> 함수를 중괄호로 만들면 return을 해줘야 하지만 소괄호로 만들면 return을 적지 않아도 된다

```javascript
function a({ name }) {
  console.log(name);
  <h1>{name}</h1>;
}

let a = ['Teemo', 'is', 'great', 'code'];

function App() {
  return (
    <div>
      {a.map((title) => (
        <a name={title} />
      ))}
    </div>
  );
}
```