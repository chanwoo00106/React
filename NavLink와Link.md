# NavLink 와 Link

## Link

Link 컴포넌트를 사용하면 브라우저의 주소만 바꿀뿐, 페이지를 새로 불러오지는 않는다.

```js
// App.js
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Home';
import About from './About';


export default function App() {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">홈</Link>
        </h1>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} /> 
      </Switch>
    </div>
  );
}
```

```js
//Home.js
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/xxx">찾을 수 없는 페이지</Link></li>
      </ul>
    </div>
  );
}
```

## NavLink

공식문서에 아래와 같이 NavLink 컴포넌트는 Link의 special version 이라고 명시 되어 있다.

특정 링크에 스타일을 넣어 줄 수 있는데 이것이 바로 Link와 NavLink의 가장 큰 차이점이다.

NavLink에는 activeStyle과 activeClassName이라는 속성이 있는데<br>
리액트 웹의 현재 URL과 to가 가리키는 링크가 일치할 때,<br>
activeStyle과 activeClassName이 활성화 되고 일치하지 않으면 비활성화 된다.

마지막으로 exact는 url과 to가 가리키는 링크가 정확히 맞아 떨어져야만 설정한 컴포넌트가 보이게 된다.

[참고 자료](https://velog.io/@seong-dodo/React-Link%EC%99%80-NavLink)
