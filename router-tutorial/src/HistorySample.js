import React, {Component} from "react";

class HistorySample extends Component {
    // 뒤로 가기
    handleGoBack = () => {
        this.props.history.goBack();
    }

    // 홈으로 이동
    handleGoHome = () => {
        this.props.history.push('/');
    };

    componentDidMount() {
        this.unblock = this.props.history.block('정말 떠나실 건가요?')
    };

    componentWillUnmount() {
        if(this.unblock) {
            this.unblock();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>back</button>
                <button onClick={this.handleGoHome}>home</button>
            </div>
        );
    }
}

export default HistorySample