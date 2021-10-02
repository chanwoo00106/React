import React from 'react';
import Write from './Write';
import News from './News';

export const Contents = ({ onClick }) => {
    return (
        <div className="contents">
            <Write onClick={onClick} />
            <News />
        </div>
    )
}
