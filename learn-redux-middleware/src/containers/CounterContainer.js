import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, onIncrease, onDecrease }) => {
    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    )
}

export default connect(
    state => ({
        number: state.number
    }),
    {
        increase,
        decrease
    }
)(CounterContainer);
