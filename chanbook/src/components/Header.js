import React from 'react';
import { faFacebook, faReact, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUserFriends, faTv, faUsers, faUserCircle, faBars, faBell, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderS, HeaderLogo, SearchDiv, CenterUl, RightIcons } from './HeaderStyle';

export const Header = () => {
    return (
        <HeaderS>
            <HeaderLogo>
                <FontAwesomeIcon className="logo-icon" icon={faFacebook} size="3x" />
                <SearchDiv><input type="search" placeholder="   Facebook 검색" className="search" /></SearchDiv>
            </HeaderLogo>
            <div>
                <CenterUl>
                    <li><a href="#1"><FontAwesomeIcon className="icons hover-icon" icon={faHome} size="2x" /></a></li>
                    <li><a href="#1"><FontAwesomeIcon className="icons" icon={faUserFriends} size="2x" /></a></li>
                    <li><a href="#1"><FontAwesomeIcon className="icons" icon={faTv} size="2x" /></a></li>
                    <li><a href="#1"><FontAwesomeIcon className="icons" icon={faUsers} size="2x" /></a></li>
                    <li><a href="#1"><FontAwesomeIcon className="icons" icon={faReact} size="2x" /></a></li>
                </CenterUl>
            </div>
            <RightIcons>
                <span className="user">
                    <span className="right-icon"><FontAwesomeIcon icon={faUserCircle} size="2x" /></span>
                    <span className="user-name">변찬우</span>
                </span>
                <span className="right-icon"><FontAwesomeIcon icon={faBars} size="2x" /></span>
                <span className="right-icon"><FontAwesomeIcon icon={faFacebookMessenger} size="2x" /></span>
                <span className="right-icon"><FontAwesomeIcon icon={faBell} size="2x" /></span>
                <span className="right-icon"><FontAwesomeIcon icon={faSortDown} size="2x" /></span>
            </RightIcons>
        </HeaderS>
    )
}
