# React

## 1Day

> node를 설치한 후에 입력

```
npx create-react-app
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
### style 쓰는 법

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
### state 쓰는법

> React에서는 리렌더링이 필요할 때에 useState를 쓴다
> state는 from { useState } import 'react'; 라고 코드 위에 선언을 해준다
> 사용 방법은 useState('변수값') 이렇게 적는다
> state를 쓰면 2개의 array가 남는데 하나는 변수가 나오고 다른 하나는 변수값을 수정할 수 있는 함수가 나온다
> 그래서 let [변수값이 저장되는 변수, 변수값을 수정할 변수] = useState( '변수값' ) 이렇게 된다
> 변경을 하지 않는 변수는 let이나 const, var를 쓰면 된다

```Javascript
function App() {
  let [title, setTitle] = useState('hi')
 return (
    <div className="{ title }">
      <div className="title">
        <div>{ title }</div>
      </div>
    </div>
  );
}

```

### Event 처리

> html에서는 onclick을 통해 javascript 함수를 실행했지만 React에서는 onClick으로 함수를 실행한다
>
> html에서 onclick은 함수를 ""로 감싸서 실행하지만 React는 {}로 감싸서 함수를 실행한다. 또 함수 호출시 ()를 쓰지 않는다 (바로 실행이 돼버리기 때문이다)
>
> 또는 ()=>이런 함수도 사용이 가능하다

```javascript
function App() {
 let [title, seTtitle] = useState('hi')
 let [score, seTscore] = useState(0)
 return (
    <div className="{ title }">
      <div className="title">
        <div onClick={ ()=>{ console.log('hi!') } }>GOOD {score}</div>
        <div>{ title }</div>
      </div>
    </div>
  );
}
```
> input태그에서 키가 눌릴때 이벤트 처리는 onChage이다
> onClick과 동일하게 작성 하면 된다

```javascript
function App() {
 let [title, seTtitle] = useState('hi')
 let [score, seTscore] = useState(0)
 return (
    <div className="{ title }">
      <div className="title">
        <input onChage={ e => {console.log(e.target.value)} }></input>
        <div>{ title }</div>
      </div>
    </div>
  );
}
```

### State 변경

> State 변수를 바꾸는 법은 State의 두 변수중 두 번째로 나오는 함수로 변경해야 재 랜더링이 일어난다.

```javascript
function App() {
 let [title, seTtitle] = useState('hi')
 let [score, seTscore] = useState(0)
 return (
    <div className="{ title }">
      <div className="title">
        <div onClick={ ()=>{ seTscore(score + 1) } }>GOOD {score}</div>
        <div>{ title }</div>
      </div>
    </div>
  );
}
```
> 문자열은 변경 함수에 다른 문자열을 넣으면 되지만 리스트는
``` javascript 
[title, seTtitle] = useState(['hi', 'teemo', 'nice'])
seTtitle(title[0] = 'hello')
```
> 와 같이 할 수가 없다 왜나하면 랜더링을 할때 리스트 안에 있은 모든 값을 그대로 넣어 주어야 하기 때문이다.
``` javascript
[title, seTtitle] = useState(['hi', 'teemo', 'nice'])
seTtitle(['hello', 'teemo', 'nice'])
```
> 이런 형식으로 적어주면 된다
> 하지만 이건 너무 좋지 않은 코드이므로
``` javascript
[title, seTtitle] = useState(['hi', 'teemo', 'nice'])
a = [...title]
a[0] = 'hello'
seTtitle(a)
```
> 이런 형식으로 적어주는게 좋다
> 여기서 ...은 전개 연산자로 나열형 자료를 추출하거나 연결할 때 사용한다.


### component
> div 태그가 너무 많아지면 보기에 별로 좋지 않아서 함수로 div를 묶어서 쓴다
> 예)  function 컴포넌트명() { return( <div>어쩌고 저쩌고</div> ) }
> 이 컴포넌트를 넣고 싶은곳에 넣으면 된다

``` javascript
function App(){
  return (
    <Newss></Newss>
  )
}

function Newss(){
    return (
      <div className="news">
        <div>Teemo 만세!</div>
        <dl>
          <li>hello</li>
          <li>안녕</li>
        </dl>
        <hr/>
      </div>
    )
}
```

### export의 의미
> export는 영어로 수출한다는 뜻으로 export를 사용하여 전달하면 해당 변수 안에 있는 객체 안에 담아 전달 할 수 있다.
> 다른 파일에서는 import를 사용해 export한 파일의 객체를 볼 수 있다.
``` javascript
/*export 파일*/

let a = 'hello'
export {a}

```
``` javascript
/*improt 파일*/

import a from './export'
consol.log(a)
// 출력 : hello
```

> 2개도 export 할 수 있음

### export default의 의미
> export default는 변수 뿐만 아니라 함수, 오브젝트, 클래스도 보낼 수 있다
> default는 기본이라는 뜻을 갖고 있으며 괄호 같은 것을 생략한다

``` javascript
/*export_default 파일*/

export function sayHi(user) {
  console.log('Hello, ${user}');
}
```
``` javascript
/*import 파일*/

import sayhello from './exprot_default'
sayhello('Teemo')
//출력 : Hello, Teemo
```
> 만약 export default 할때 전달하는 데이터를 {}로 감싸서 보내면 객체 형태로 값을 받는다


### props
> props는 component에 값을 전달 할때 사용한다
``` javascript
function a(props){
  console.log(props.name);
  <h1>{ props.name }</h1>
}

function App(){
  return (
    <div>
      <a name="Teemo" />
    </div>
  );
}
```
> 여기서 a함수에 props의 변수 이름을 바꿀 수 있다.
> 아래와 같은 코드 처럼
```javascript
function a({name}){
  console.log(name);
  <h1>{ name }</h1>
}

function App(){
  return (
    <div>
      <a name="Teemo" />
    </div>
  );
}
```
### map
> component가 늘어나고 그에 따라 props가 바뀐다고 해보자 이걸 코드로 작성하면 굉장히 더러운 코드가 될 것이다
> 이럴 때일수록 map함수를 꼭 사용해야 한다
> map의 사용법은 배열.map(변수명 => ( 하나하나에 적용할 것들 ))
> 함수를 중괄호로 만들면 return을 해줘야 하지만 소괄호로 만들면 return을 적지 않아도 된다

```javascript
function a({name}){
  console.log(name);
  <h1>{ name }</h1>
}

let a = ['Teemo', 'is', 'great', 'code']

function App(){
  return (
    <div>
      {a.map(title => ( <a name={title} /> ))}
    </div>
  );
}
```
