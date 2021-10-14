import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wrapper } from './style/Header.styles';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <Wrapper>
            <h1>
                <div className="logo-bars">
                    <FontAwesomeIcon icon={faBars} size="sm" />
                    <Link to="/">
                       <img src="./YouTube.png" className="logo" alt="logo" />
                    </Link>
                </div>
            </h1>
        </Wrapper>
    )
}
