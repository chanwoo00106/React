import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBurn, faMusic, faFilm, faGamepad, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { Wrapper } from './style/Category.styles';
import { NavLink } from 'react-router-dom';

export const Category = () => {
    return (
        <Wrapper>
            <NavLink to="/quest/hot" activeStyle={{background: "rgba(0,0,0,.4)"}}>
                <FontAwesomeIcon icon={faBurn} size="2x" />
                <p>인기</p>
            </NavLink>
            <NavLink to="/quest/music" activeStyle={{background: "rgba(0,0,0,.4)"}}>
                <FontAwesomeIcon icon={faMusic} size="2x" />
                <p>음악</p>
            </NavLink>
            <NavLink to="/quest/movie" activeStyle={{background: "rgba(0,0,0,.4)"}}>
                <FontAwesomeIcon icon={faFilm} size="2x" />
                <p>영화</p>
            </NavLink>
            <NavLink to="/quest/game" activeStyle={{background: "rgba(0,0,0,.4)"}}>
                <FontAwesomeIcon icon={faGamepad} size="2x" />
                <p>게임</p>
            </NavLink>
            <NavLink to="/quest/sports" activeStyle={{background: "rgba(0,0,0,.4)"}}>
                <FontAwesomeIcon icon={faTrophy} size="2x" />
                <p>스포츠</p>
            </NavLink>
            <NavLink to="/quest/study" activeStyle={{background: "rgba(0,0,0,.4)"}}>
                <FontAwesomeIcon icon={faLightbulb} size="2x" />
                <p>학습</p>
            </NavLink>
        </Wrapper>
    )
}
