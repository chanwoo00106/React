import React from 'react';
import { connect } from 'react-redux';
import {changeInput, insert, toggle, remove} from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = ({remove, toggle, todos, input, changeInput, insert}) => {
    return (
        <div>
            <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}/>
        </div>
    )
};

export default connect(
    ({todos}) => ({
        todos: todos.todos,
        input: todos.input 
    }),
    {
        changeInput,
        insert,
        toggle,
        remove
        
    }
)(TodosContainer);
