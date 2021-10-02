import React from 'react'
import { UserS } from './Style'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const User = () => {
    return (
        <UserS>
            <span className="userImg">
                <FontAwesomeIcon icon={faUserCircle} size="2x" />
                <span className="greenCircle"></span>
            </span>
            <p className="name">최형우</p>
        </UserS>
    )
}
