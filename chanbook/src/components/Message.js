import React from 'react';
import { MessageDiv } from './Style';
import { User } from './User';


export const Message = () => {
    return (
        <MessageDiv>
            <div className="sponsored">
                <h3>Sponsored</h3>
            </div>
            <hr />
            <div className="Messenger">
                <h3>연락처</h3>
                <User />
            </div>
        </MessageDiv>
    )
}
