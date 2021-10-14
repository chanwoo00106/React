import React, { useState } from 'react'
import { faBars, faKeyboard, faTimes, faVideo, faTh, faBell, faUserCircle, faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wrapper } from './style/Header.styles';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [input, setInput] = useState();

    const onChange = e =>
        setInput(e.target.value);

    const onClick = () =>
        setInput("");

    return (
        <Wrapper>
            <h1>
                <div className="start">
                    <FontAwesomeIcon icon={faBars} size="sm" />
                    <Link to="/">
                       <img src="./YouTube.png" className="logo" alt="logo" />
                    </Link>
                </div>
            </h1>
            <form className="center">
                <div className="input-wrap">
                    <input placeholder="검색" value={input} onChange={onChange} />
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
                    <FontAwesomeIcon icon={faVideo} size="lg" />
                    <FontAwesomeIcon icon={faTh} size="lg" />
                    <FontAwesomeIcon icon={faBell} size="lg" />
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                </div>
            </div>
        </Wrapper>
    )
}
