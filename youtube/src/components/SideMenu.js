import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './style/SideMenu.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArchive, faHistory, faPhotoVideo, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faClock, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


export const SideMenu = () => {
    return (
        <Wrapper>
            <ul className="menu">
                <li>
                    <Link>
                        <FontAwesomeIcon icon={faHome} size="lg" />
                        <p>홈</p>
                    </Link>
                </li>
                <li>
                    <Link>
                        <FontAwesomeIcon icon={faCompass} size="lg" />
                        <p>탐색</p>
                    </Link>
                </li>
                <li>
                    <Link>
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                        <p>구독</p>
                    </Link>
                </li>
            </ul>
            <hr />
            <ul className="menu">
                <li>
                    <Link>
                        <FontAwesomeIcon icon={faArchive} size="lg" />
                        <p>보관함</p>
                    </Link>
                </li>
                <li>
                    <Link>
                        <FontAwesomeIcon icon={faHistory} size="lg" />
                        <p>시청 기록</p>
                    </Link>
                </li>
                <li>
                    <Link>
                        <FontAwesomeIcon icon={faPhotoVideo} size="lg" />
                        <p>내 동영상</p>
                    </Link>
                </li>
                <li>
                    <Link>
                        <FontAwesomeIcon icon={faClock} size="lg" />
                        <p>나중에 볼 동영상</p>
                    </Link>
                </li>
                <li>
                    <Link>
                        <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                        <p>좋아요 표시한 동영상</p>
                    </Link>
                </li>
                <li>
                    <Link>
                        <FontAwesomeIcon icon={faChevronDown} size="lg" />
                        <p>더보기</p>
                    </Link>
                </li>
            </ul>
        </Wrapper>
    )
}
