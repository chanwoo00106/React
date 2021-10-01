import React from 'react';
import { Aside } from './Style';
import { faUserCircle, faUserFriends, faUsers, faTv, faHistory, faBookmark, faFlag, faCalendarCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const RightAside = () => {
    return (
        <Aside>
            <ul className="asideUl">
                <li>
                    <a href="#1">
                        <FontAwesomeIcon icon={faUserCircle} size="2x" />
                        <p>변찬우</p>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <FontAwesomeIcon icon={faUserFriends} size="2x" />
                        <p>친구</p>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <FontAwesomeIcon icon={faUsers} size="2x" />
                        <p>그룹</p>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <FontAwesomeIcon icon={faTv} size="2x" />
                        <p>Watch</p>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <FontAwesomeIcon icon={faHistory} size="2x" />
                        <p>과거의 오늘</p>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <FontAwesomeIcon icon={faBookmark} size="2x" />
                        <p>저장됨</p>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <FontAwesomeIcon icon={faFlag} size="2x" />
                        <p>페이지</p>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <FontAwesomeIcon icon={faCalendarCheck} size="2x" />
                        <p>이벤트</p>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <span className="more"><FontAwesomeIcon icon={faChevronDown} size="1x" /></span>
                        <p>더보기</p>
                    </a>
                </li>
            </ul>
            <hr className="asideHr" />
            <div className="quickly">내 바로가기</div>
        </Aside>
    )
}
