import React from 'react';
import { NavLink } from 'react-router-dom';
import { SideWrap, Wrapper } from './style/SideMenu.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArchive, faHistory, faPhotoVideo, faChevronDown, faUserCircle, faFilm, faGamepad, faStream, faCog, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faClock, faThumbsUp, faLightbulb, faFlag, faQuestionCircle, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


export const SideMenu = () => {
    return (
        <>
            <Wrapper>
                <ul>
                    <li>
                        <NavLink to="/" exact activeStyle={{background: "rgba(0,0,0,.4)"}}>
                            <FontAwesomeIcon icon={faHome} size="lg" />
                            <p>홈</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/quest" activeStyle={{background: "rgba(0,0,0,.4)"}}>
                            <FontAwesomeIcon icon={faCompass} size="lg" />
                            <p>탐색</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                            <p>구독</p>
                        </NavLink>
                    </li>
                </ul>
                <hr />
                <ul>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faArchive} size="lg" />
                            <p>보관함</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faHistory} size="lg" />
                            <p>시청 기록</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faPhotoVideo} size="lg" />
                            <p>내 동영상</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faClock} size="lg" />
                            <p>나중에 볼 동영상</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                            <p>좋아요 표시한 동영상</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faChevronDown} size="lg" />
                            <p>더보기</p>
                        </NavLink>
                    </li>
                </ul>
                <hr />
                <p className="sideTitle">구독</p>
                <ul>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faUserCircle} size="lg" />
                            <p>수면제</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faUserCircle} size="lg" />
                            <p>baekteun</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faUserCircle} size="lg" />
                            <p>기타</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faUserCircle} size="lg" />
                            <p>등등</p>
                        </NavLink>
                    </li>
                </ul>
                <hr />
                <p className="sideTitle"><b>YOUTUBE</b> 더보기</p>
                <ul>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                            <p><b>YouTube Premium</b></p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faFilm} size="lg" />
                            <p>영화</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faGamepad} size="lg" />
                            <p>게임</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faStream} size="lg" />
                            <p>실시간</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faLightbulb} size="lg" />
                            <p>학습</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faTrophy} size="lg" />
                            <p>스포츠</p>
                        </NavLink>
                    </li>
                    <hr />
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faCog} size="lg" />
                            <p>설정</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                            <p>신고 기록</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faCommentAlt} size="lg" />
                            <p>고객센터</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faFlag} size="lg" />
                            <p>의견 보내기</p>
                        </NavLink>
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
            <SideWrap />
        </>
    )
}
