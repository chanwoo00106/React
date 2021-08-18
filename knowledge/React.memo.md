# React.memo

React는 먼저 컴퍼넌트를 렌더링(rendering) 한 뒤, 이전 렌더된 결과와 비교하여 DOM 업데이트를 결정한다. 만약 렌더 결과가 이전과 다르다면, React는 DOM을 업데이트한다.

컴퍼넌트가 React.memo()로 래핑 될 때, React는 컴퍼넌트를 렌더링하고 결과를 메모이징(Memoizing)한다. 그리고 다음 렌더링이 일어날 때 props가 같다면, React는 메모이징(Memoizing)된 내용을 재사용한다.

예시를 보면 함수형 컴퍼넌트 Movie가 React.memo()로 래핑 되어 있다.

```js
export function Movie({ title, releaseDate }) {
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}
// 여기 아래 부분
export const MemoizedMovie = React.memo(Movie);
```

React.memo(Movie)는 새로 메모이징된 컴퍼넌트인 MemoizedMovie를 반환한다. 한 가지 차이점을 제외하고 원래의 Movie 컴퍼넌트와 같은 결과를 나타낼 것이다.

MemoizedMovie의 렌더링 결과는 메모이징 되어있다. 만약 title이나 releaseData 같은 props가 변경 되지 않는다면 다음 렌더링 때 메모이징 된 내용을 그대로 사용하게 된다.

메모이징 한 결과를 재사용 함으로써, React에서 리렌더링을 할 때 가상 DOM에서 달라진 부분을 확인하지 않아 성능상의 이점을 누릴 수 있다.

<details>
    <summary>언제 React.memo()를 써야할까</summary>
    <div>
        컴퍼넌트가 같은 props로 자주 렌더링되거나, 무겁고 비용이 큰 연산이 있는 경우, React.memo()로 컴퍼넌트를 래핑할 필요가 있다.
    </div>
</details>

<details>
    <summary>언제 React.memo()를 사용하지 말아야 할까</summary>
    <div>
        렌더링될 때 props가 다른 경우가 대부분인 컴포넌트를 생각해보면, 메모이제이션 기법의 이점을 얻기 힘들다.
    </div>
</details>

[베낀 사이트](https://ui.toast.com/weekly-pick/ko_20190731)

