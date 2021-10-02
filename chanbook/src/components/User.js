import React from 'react'
import { UserS } from './Style'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const User = ({ user }) => {
    return (
        <UserS>
            <span className="userImg">
                {user.userImg ? (
                    <span className="img">
                        <img src={user.userImg} alt="user_image" />
                    </span>
                ) : (
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                )}
                <span className="greenCircle"></span>
            </span>
            <p className="name">{user.name}</p>
        </UserS>
    )
}
