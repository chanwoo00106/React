import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBurn, faMusic, faFilm, faGamepad, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { Wrapper } from './style/Category.styles';
import { Link } from 'react-router-dom';

export const Category = () => {
    return (
        <Wrapper>
            <Link to="/quest/hot">
                <FontAwesomeIcon icon={faBurn} size="2x" />
                <p>인기</p>
            </Link>
            <Link to="/quest/music">
                <FontAwesomeIcon icon={faMusic} size="2x" />
                <p>음악</p>
            </Link>
            <Link to="/quest/movie">
                <FontAwesomeIcon icon={faFilm} size="2x" />
                <p>영화</p>
            </Link>
            <Link to="/quest/game">
                <FontAwesomeIcon icon={faGamepad} size="2x" />
                <p>게임</p>
            </Link>
            <Link to="/quest/sports">
                <FontAwesomeIcon icon={faTrophy} size="2x" />
                <p>스포츠</p>
            </Link>
            <Link to="/quest/study">
                <FontAwesomeIcon icon={faLightbulb} size="2x" />
                <p>학습</p>
            </Link>
        </Wrapper>
    )
}
