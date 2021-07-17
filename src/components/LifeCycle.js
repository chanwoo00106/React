import React, { Component } from 'react';

class LifeCycle extends Component {
  state = {
    number: 0,
    color: null,
  };

  MyRef = null;

  constructor(props) {
    console.log('constructor');
    super(props);
    console.log('컴포넌트를 만들 때 처음으로 호출된다');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    console.log('컴포넌트가 마운트될 때와 업데이트될 때 호출된다');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log('첫 렌더링을 다 마친 후 실행');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log(
      'props 또는 state를 변경했을 때 리렌더링을 시작할지 여부를 지정하는 메서드'
    );
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    console.log('컴포넌트 DOM을 제거할 때 실행');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(nextProps, nextState, snapshot) {
    console.log('getSnapshotBeforeUpdate');
    console.log('render에서 만들어진 결과물이 브라우저에 반영되기 직전에 호출');
    if (snapshot) {
      console.log('업데이트되기 직전 색상 : ', snapshot);
    }
  }

  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        <h1 style={style} ref={(ref) => (this.MyRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>add</button>
      </div>
    );
  }
}

export default LifeCycle;
