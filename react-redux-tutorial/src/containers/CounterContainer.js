import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    console.log(increase, decrease);
    return (
        <div>
            <Counter number={number} onIncrease={increase} onDecrease={decrease} />
        </div>
    )
};

export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease
    }
)(CounterContainer);
