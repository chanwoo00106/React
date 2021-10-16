import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './style/SideMenu.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArchive, faHistory, faPhotoVideo, faChevronDown, faUserCircle, faFilm, faGamepad, faStream, faCog, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faClock, faThumbsUp, faLightbulb, faFlag, faQuestionCircle, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


export const SideMenu = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} size="lg" />
                        <p>홈</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faCompass} size="lg" />
                        <p>탐색</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                        <p>구독</p>
                    </Link>
                </li>
            </ul>
            <hr />
            <ul>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faArchive} size="lg" />
                        <p>보관함</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHistory} size="lg" />
                        <p>시청 기록</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faPhotoVideo} size="lg" />
                        <p>내 동영상</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faClock} size="lg" />
                        <p>나중에 볼 동영상</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                        <p>좋아요 표시한 동영상</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faChevronDown} size="lg" />
                        <p>더보기</p>
                    </Link>
                </li>
            </ul>
            <hr />
            <p className="sideTitle">구독</p>
            <ul>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faUserCircle} size="lg" />
                        <p>수면재</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faUserCircle} size="lg" />
                        <p>baekteun</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faUserCircle} size="lg" />
                        <p>기타</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faUserCircle} size="lg" />
                        <p>등등</p>
                    </Link>
                </li>
            </ul>
            <hr />
            <p className="sideTitle"><b>YOUTUBE</b> 더보기</p>
            <ul>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                        <p><b>YouTube Premium</b></p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faFilm} size="lg" />
                        <p>영화</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faGamepad} size="lg" />
                        <p>게임</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faStream} size="lg" />
                        <p>실시간</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faLightbulb} size="lg" />
                        <p>학습</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faTrophy} size="lg" />
                        <p>스포츠</p>
                    </Link>
                </li>
                <hr />
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faCog} size="lg" />
                        <p>설정</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                        <p>신고 기록</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faCommentAlt} size="lg" />
                        <p>고객센터</p>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faFlag} size="lg" />
                        <p>의견 보내기</p>
                    </Link>
                </li>
            </ul>
            <hr />
            <div className="comment">
                <div>
                    정보 보도자료 저작권 문의하기 크리에이터 광고 개발자
                </div>
                <div>
                    약관 개인정보처리방침 정책 및 안전<br /><b>YouTube</b> 작동의 원리 새로운 기능 테스트하기
                </div>
                <div>
                    © 2021 Google LLC<br />
                    CEO: 선다 피차이<br />
                    주소: 1600 Amphitheatre Parkway,<br />Mountain View, CA 94043, USA.<br />
                    전화: 080-822-1450(무료)
                </div>
            </div>
        </Wrapper>
    )
}
