import React from 'react';
import { faUserCircle, faVideo, faImages, faGrin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Write.css'

const Write = () => {
    return (
        <div className="content">
            <div className="top">
                <FontAwesomeIcon icon={faUserCircle} size="3x" />
                <input type="text" placeholder={`변찬우님, 무슨 생각을 하고 계신가요?`} />
            </div>
            <hr />
            <div className="bottom">
                <div>
                    <FontAwesomeIcon icon={faVideo} size="2x" />
                    <span>라이브 방송</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faImages} size="2x" />
                    <span>사진/동영상</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGrin} size="2x" />
                    <span>기분/활동</span>
                </div>
            </div>
        </div>
    )
}

export default Write
