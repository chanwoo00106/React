import React from 'react'
import { WhiteBg, Popup } from './Style'
import { faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WritePopup = () => {
    return (
        <WhiteBg>
            <Popup>
                <div className="title">
                    <h2>게시물 만들기</h2>
                    <span className="exit">
                        <FontAwesomeIcon icon={faTimes} size="2x" />
                    </span>
                </div>
                <hr />
                <div className="user">
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                    <div className="name">
                        <div>변찬우</div>
                        <select>
                            <option selected value="0">친구만</option>
                        </select>
                    </div>
                </div>
                <textarea placeholder={`변찬우님, 무슨 색각을 하고 계신가요?`}></textarea>

            </Popup>
        </WhiteBg>
    )
}
