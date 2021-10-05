import React from 'react';
import { MessageDiv } from './Style';
import { User } from './User';
import data from '../db/data.json';


export const Message = () => {
    return (
        <MessageDiv>
            <div className="sponsored">
                <h3>Sponsored</h3>
            </div>
            <hr />
            <div className="Messenger">
                <h3>연락처</h3>
                {data.user.map((u, i) => (
                    <User user={u} key={i} />
                ))}
            </div>
        </MessageDiv>
    )
}
