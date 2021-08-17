import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    return (
        <Counter
            number={number}
            onIncrease={() => dispatch(increase())}
            onDecrease={() => dispatch(decrease())}
        />
    );
};

export default CounterContainer;
