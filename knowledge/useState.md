# useState

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

# State 변경

> State 변수를 바꾸는 법은 State의 두 변수중 두 번째로 나오는 함수로 변경해야 재 랜더링이 일어난다.

```javascript
function App() {
  let [title, seTtitle] = useState('hi');
  let [score, seTscore] = useState(0);
  return (
    <div className="{ title }">
      <div className="title">
        <div
          onClick={() => {
            seTscore(score + 1);
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

> 문자열은 변경 함수에 다른 문자열을 넣으면 되지만 리스트는

```javascript
[title, seTtitle] = useState(['hi', 'teemo', 'nice']);
seTtitle((title[0] = 'hello'));
```

> 와 같이 할 수가 없다 왜나하면 랜더링을 할때 리스트 안에 있은 모든 값을 그대로 넣어 주어야 하기 때문이다.

```javascript
[title, seTtitle] = useState(['hi', 'teemo', 'nice']);
seTtitle(['hello', 'teemo', 'nice']);
```

> 이런 형식으로 적어주면 된다
> 하지만 이건 너무 좋지 않은 코드이므로

```javascript
[title, seTtitle] = useState(['hi', 'teemo', 'nice']);
a = [...title];
a[0] = 'hello';
seTtitle(a);
```

> 이런 형식으로 적어주는 게 좋다
> 여기서 ...은 전개 연산자로 나열형 자료를 추출하거나 연결할 때 사용한다.