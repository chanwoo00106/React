import React, {useCallback, useState} from 'react';
import {MdAdd}from 'react-icons/md';
import './TodoInsert.scss';

function TodoInsert({onInsert}) {

    const [value, setValue] = useState('');

    const onChage = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <div>
            <form className="TodoInsert" onSubmit={onSubmit}>
                <input placeholder="할 일을 입력하세요" onChange={onChage} value={value} />
                <button type="submit">
                    <MdAdd />
                </button>
            </form>
        </div>
    );
};

export default TodoInsert;
