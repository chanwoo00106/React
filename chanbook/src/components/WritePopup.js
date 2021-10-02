import React from 'react'
import { WhiteBg, MainPopup } from './Style'
import { faEllipsisH, faImages, faLaugh, faMapMarkerAlt, faMicrophone, faTimes, faUserCircle, faUserTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WritePopup = ({ onClick }) => {
    return (
        <WhiteBg onClick={onClick}>
            <MainPopup>
                <div className="title">
                    <h2>게시물 만들기</h2>
                    <span className="exit">
                        <FontAwesomeIcon icon={faTimes} size="2x" onClick={onClick} />
                    </span>
                </div>
                <hr />
                <div className="writePadding">
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
                    <div className="add">
                        <span>게시물에 추가</span>
                        <div className="icons">
                            <span><FontAwesomeIcon style={{ color: "#45BD62" }} size="lg" icon={faImages} /></span>
                            <span><FontAwesomeIcon style={{ color: "#1877F2" }} size="lg" icon={faUserTag} /></span>
                            <span><FontAwesomeIcon style={{ color: "#F9CD65" }} size="lg" icon={faLaugh} /></span>
                            <span><FontAwesomeIcon style={{ color: "#F5533D" }} size="lg" icon={faMapMarkerAlt} /></span>
                            <span><FontAwesomeIcon style={{ color: "#F13957" }} size="lg" icon={faMicrophone} /></span>
                            <span><FontAwesomeIcon style={{ color: "#606770" }} size="lg" icon={faEllipsisH} /></span>
                        </div>
                    </div>
                    <button className="submit">게시</button>
                </div>
            </MainPopup>
        </WhiteBg>
    )
}
