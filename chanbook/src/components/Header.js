import React from 'react';
import { faFacebook, faReact, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUserFriends, faTv, faUsers, faUserCircle, faBars, faBell, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderS } from './Style'

export const Header = () => {
    return (
        <HeaderS>
            <div className="header-logo">
                <FontAwesomeIcon className="logo-icon" icon={faFacebook} size="3x" />
                <div className="search-div"><input type="search" placeholder="   Facebook 검색" className="search" /></div>
            </div>
            <div>
                <ul className="centerUl">
                    <li><a href="#1"><FontAwesomeIcon className="icons hover-icon" icon={faHome} size="2x" /></a></li>
                    <li><a href="#1"><FontAwesomeIcon className="icons" icon={faUserFriends} size="2x" /></a></li>
                    <li><a href="#1"><FontAwesomeIcon className="icons" icon={faTv} size="2x" /></a></li>
                    <li><a href="#1"><FontAwesomeIcon className="icons" icon={faUsers} size="2x" /></a></li>
                    <li><a href="#1"><FontAwesomeIcon className="icons" icon={faReact} size="2x" /></a></li>
                </ul>
            </div>
            <div className="right-icons">
                <span className="user">
                    <span className="right-icon"><FontAwesomeIcon icon={faUserCircle} size="2x" /></span>
                    <span className="user-name">변찬우</span>
                </span>
                <span className="right-icon"><FontAwesomeIcon icon={faBars} size="2x" /></span>
                <span className="right-icon"><FontAwesomeIcon icon={faFacebookMessenger} size="2x" /></span>
                <span className="right-icon"><FontAwesomeIcon icon={faBell} size="2x" /></span>
                <span className="right-icon"><FontAwesomeIcon icon={faSortDown} size="2x" /></span>
            </div>
        </HeaderS>
    )
}
