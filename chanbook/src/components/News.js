import React from 'react';
import { NewsS } from './Style';
import { faUserCircle, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Emoji } from './Emoji';

const News = () => {
    return (
        <NewsS>
            <div className="user">
                <FontAwesomeIcon className="userCircle" icon={faUserCircle} size="3x" />
                <span className="information">
                    <div className="name">변찬우</div>
                    <div className="time">3시간 전</div>
                </span>
            </div>
            <div className="text">React will rule the world</div>
            <div className="img">
                <img src="https://miro.medium.com/max/1200/0*XCgoYU9sqt95P8J0.png" alt="contents_image" />
            </div>

            <div className="thumb-num">
                <FontAwesomeIcon icon={faThumbsUp} size="1x" />
                <span>5억</span>
            </div>
            <hr />
            <Emoji />
            <hr />
            <div className="comment">
                <FontAwesomeIcon className="userCircle" icon={faUserCircle} size="2x" />
                <input type="text" placeholder="댓글을 입력하세요..." />
            </div>
        </NewsS>
    )
}

export default News
