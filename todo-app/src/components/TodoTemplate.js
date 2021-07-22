import React from 'react';
import './TodoTemplate.scss';

function TodoTemplate({ children }) {
    return (
        <div>
            <div className="TodoTemplate">
                <div className="app-title">일정 관리</div>
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default TodoTemplate;
