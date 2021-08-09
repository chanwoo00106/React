## Event 처리

> html에서는 onclick을 통해 javascript 함수를 실행했지만 React에서는 onClick으로 함수를 실행한다
>
> html에서 onclick은 함수를 ""로 감싸서 실행하지만 React는 {}로 감싸서 함수를 실행한다. 또 함수 호출시 ()를 쓰지 않는다 (바로 실행이 돼버리기 때문이다)
>
> 또는 ()=>이런 함수도 사용이 가능하다

```javascript
function App() {
  let [title, seTtitle] = useState('hi');
  let [score, seTscore] = useState(0);
  return (
    <div className="{ title }">
      <div className="title">
        <div
          onClick={() => {
            console.log('hi!');
          }}
        >
          GOOD {score}
        </div>
        <div>{title}</div>
      </div>
    </div>
  );
}
```

> input태그에서 키가 눌릴때 이벤트 처리는 onChage이다
> onClick과 동일하게 작성 하면 된다

```javascript
function App() {
  let [title, seTtitle] = useState('hi');
  let [score, seTscore] = useState(0);
  return (
    <div className="{ title }">
      <div className="title">
        <input
          onChage={(e) => {
            console.log(e.target.value);
          }}
        ></input>
        <div>{title}</div>
      </div>
    </div>
  );
}
```