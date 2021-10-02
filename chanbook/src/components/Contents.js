import React from 'react';
import Write from './Write';
import News from './News';
import { Message } from './Message';

export const Contents = () => {
    return (
        <div className="contents">
            <Write />
            <News />
            <Message />
        </div>
    )
}
