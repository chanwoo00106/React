import React from 'react'
import {MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox} from 'react-icons/md';
import cn from 'classnames'
import './TodoListItem.scss'

export default function TodoListItem({todo}) {

    const {text, checked} = todo;

    return (
        <div className="TodoListItem">

            <div className={cn('checkbox', {checked})}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}
