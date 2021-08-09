# style 쓰는 법

> style은 html과 비슷하게 쓰되 ""안에 적는게 아니라 {}안에 적는다
> font-size와 같이 -가 들어가면 -를 지우고 -뒤의 문자를 대문자로 바꾼다
> 예) fontSize, fontFamily

```Javascript
function App() {
  let title = 'hi'
 return (
    <div style={ fontSize : '30px' } className="{ title }">
      <div className="title">
        <div>{ title }</div>
      </div>
    </div>
  );
}
```