# connect

connect 함수는 리덕스 스토어안에 있는 상태를 props로 넣어줄수도있고, 액션을 디스패치하는 함수를 props 로 넣어줄수도 있습니다.<br>
일단 아래 코드를 보면

```js
import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from '../components/Counter';

// mapStateToProps과 mapDispatchToProps가 여기 props로 넘어온다
const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    )
}

const mapStateToProps = state => ({
  number: state.counter
});

const mapDispatchToProps = dispatch => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);

```

`mapStateToProps`는 컴포넌트에 props로 넣어줄 리덕스 스토어 상태에 관련된 함수이고,<br>
`mapDispatchToProps`는 컴포넌트에 props로 넣어줄 액션을 디스패치하는 함수들에 관련된 함수입니다.

## connect 함수와 useSelector, useDispatch의 차이점

컨테이너 컴포넌트를 만들 때 connect 함수를 사용해도 좋고 useSelector, useDispatch를 사용해도 좋다<br>
리덕스 관련 hook이 있다고 해서 connect 함수가 사라지는 것은 아니기 때문에 자기가 더 편한 것을 사용하면 된다.

하지만 알아둬야 할 점은 connect 함수를 사용하여 컨테이너 컴포넌트를 만들었을 경우,<br>
해당 컨테이너 컴포넌트의 부모 컴포넌트가 리렌더링될 때 해당 컨테이너 컴포넌트의 props가 바뀌지 않았다면<br>
리렌더링이 자동으로 방지되어 성능이 최적화 됩니다.

반면 useSelector를 사용하여 리덕스 상태를 조회했을 때는 최적화가 이루어지지 않으므로, 성능 최적화를 위해서는 React.memo를 컨테이너 컴포넌트에 사용해 주어야 합니다.