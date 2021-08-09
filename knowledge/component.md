# component

> div 태그가 너무 많아지면 보기에 별로 좋지 않아서 함수로 div를 묶어서 쓴다
> 예) function 컴포넌트명() { return( <div>어쩌고저쩌고</div> ) }
> 이 컴포넌트를 넣고 싶은 곳에 넣으면 된다

```javascript
function App() {
  return <Newss></Newss>;
}

function Newss() {
  return (
    <div className="news">
      <div>Teemo 만세!</div>
      <dl>
        <li>hello</li>
        <li>안녕</li>
      </dl>
      <hr />
    </div>
  );
}
```