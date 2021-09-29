import React from 'react';
import { faFacebook, faReact, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUserFriends, faTv, faUsers, faUserCircle, faBars, faBell, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <div className="header-logo">
                <FontAwesomeIcon icon={faFacebook} size="3x" />
                <div className="search-div"><input type="search" placeholder="   Facebook 검색" className="search" /></div>
            </div>
            <div>
                <ul>
                    <li><a href="#1"><FontAwesomeIcon icon={faHome} size="2x" /></a></li>
                    <li><a href="#1"><FontAwesomeIcon icon={faUserFriends} size="2x" /></a></li>
                    <li><a href="#1"><FontAwesomeIcon icon={faTv} size="2x" /></a></li>
                    <li><a href="#1"><FontAwesomeIcon icon={faUsers} size="2x" /></a></li>
                    <li><a href="#1"><FontAwesomeIcon icon={faReact} size="2x" /></a></li>
                </ul>
            </div>
            <div>
                <span>
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                    <span>변찬우</span>
                </span>
                <FontAwesomeIcon icon={faBars} size="2x" />
                <FontAwesomeIcon icon={faFacebookMessenger} size="2x" />
                <FontAwesomeIcon icon={faBell} size="2x" />
                <FontAwesomeIcon icon={faSortDown} size="2x" />
            </div>
        </header>
    )
}
