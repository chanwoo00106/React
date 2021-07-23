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
            e.preventDefault();
            if (value.replace(' ', '') !== ''){
                onInsert(value);
                setValue('');
            }
        },
        [onInsert, value],
    );

    return (
        <div>
            <form className="TodoInsert" onSubmit={onSubmit}>
                <input placeholder="할 일을 입력하세요" onChange={onChage} value={value} />
                <button type="submit" onClick={onSubmit}>
                    <MdAdd />
                </button>
            </form>
        </div>
    );
};

export default TodoInsert;
