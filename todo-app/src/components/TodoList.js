import React from 'react'
import TodoListItem from './TodoListItem'
import './TodoList.scss'

export default function TodoList({todos}) {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} />
            ))}
        </div>
    )
}
