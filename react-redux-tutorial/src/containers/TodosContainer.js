import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changeInput, insert, toggle, remove} from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = () => {
    const {input, todos} = useSelector(({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }));
    const dispatch = useDispatch();
    return (
        <div>
            <Todos
            input={input}
            todos={todos}
            onChangeInput={useCallback(input => dispatch(changeInput(input)), [dispatch])}
            onInsert={useCallback(text => dispatch(insert(text)), [dispatch])}
            onToggle={useCallback(id => dispatch(toggle(id)), [dispatch])}
            onRemove={useCallback(id => dispatch(remove(id)), [dispatch])}/>
        </div>
    )
};

export default TodosContainer;
