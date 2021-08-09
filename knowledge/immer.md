# immer

immer를 사용하면 <u>불변성을 유지하는 작업</u>을 매우 간단하게 처리할 수 있다

```js
import produce from 'immer';

const nextState = produce(originalState, draft => {
    draft.somewhere.deep.inside = 5;
})
```

produce 함수는 두 가지 파라미터를 받는데 첫 번째 파라미터는 <u>수정하고 싶은 상태</u>이고,
두 번째 파라미처는 <u>상태를 어떻게 업데이트할지 정하는</u> 함수이다.

두 번째 파라미터로 전달되는 함수 내부에서 원하는 값을 변경하면,
produce 함수가 <u>불변성 유지를 대신해 주면서 새로운 상태를 생성</u>해 준다.

이 라이브러리의 핵심은 <u>불변성에 신경 쓰지 않는 것처럼 코드를 작성하되 불변성 관리는 제대로해 주는 것</u>이다

아래는 좀더 복잡한 데이터를 불변성을 유지하면서 업데이트하는 예시이다.

```js
import produce from 'immer';

const State = [
    {
        id: 1,
        todo: 'react 어렵네...',
        checked: true
    },
    {
        id: 2,
        todo: 'Teemo 보기',
        checked: false
    }
];

const nextState = produce(State, draft => {
    // id가 2인 항목의 checked 값을 ture로 설정
    const todo = draft.find(t => t.id === 2);
    todo.checked = true;
    
    // 새로운 데이터 추가
    draft.push({
        id: 3,
        todo: '커밋하기',
        checked: false
    });

    draft.splice(draft.findIndex(t => t.id === 1), 1);
});
```