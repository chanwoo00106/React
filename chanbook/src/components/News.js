import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const News = () => {
    return (
        <div className="contents">
            <div className="user">
                <FontAwesomeIcon icon={faUserCircle} size="2x" />
            </div>
            <div className="text"></div>
            <div className="emoji"></div>
            <div className="comment"></div>
        </div>
    )
}

export default News
