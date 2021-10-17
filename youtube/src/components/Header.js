import React, { useState } from 'react'
import { faBars, faKeyboard, faTimes, faVideo, faTh, faBell, faUserCircle, faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderWrap, Wrapper } from './style/Header.styles';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [input, setInput] = useState();

    const onClick = () =>
        setInput("");

    const onSubmit = e => {
        e.preventDefault();
        setInput(e.target[0].value)
    }

    return (
        <>
            <Wrapper>
                <h1>
                    <div className="start">
                        <FontAwesomeIcon icon={faBars} size="sm" />
                        <Link to="/">
                           <img src="./YouTube.png" className="logo" alt="logo" />
                        </Link>
                    </div>
                </h1>
                <form className="center" onSubmit={onSubmit}>
                    <div className="input-wrap">
                        <input placeholder="검색" />
                        <FontAwesomeIcon icon={faKeyboard} size="1x" />
                        {input && <FontAwesomeIcon className="remove" onClick={onClick} icon={faTimes} size="1x" />}
                    </div>
                    <button className="search-btn">
                        <FontAwesomeIcon icon={faSearch} size="2x" />
                    </button>
                    <FontAwesomeIcon className="microphone" icon={faMicrophone} size="lg" />
                </form>
                <div className="end">
                    <div className="buttons">
                        <Link to="/"><FontAwesomeIcon icon={faVideo} size="lg" /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faTh} size="lg" /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faBell} size="lg" /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faUserCircle} size="2x" /></Link>
                    </div>
                </div>
            </Wrapper>
            <HeaderWrap />
        </>
    )
}
