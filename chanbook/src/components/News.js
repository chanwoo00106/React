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
                    <div className="name">최형우</div>
                    <div className="time">3시간 전</div>
                </span>
            </div>
            <div className="text">React Native will rule the world</div>
            <div className="img">
                <img src="https://media.vlpt.us/images/koreanhole/post/30323257-52bd-4357-8183-9e8084581caf/thumb.png" alt="contents_image" />
            </div>

            <div className="thumb-num">
                <FontAwesomeIcon icon={faThumbsUp} size="1x" />
                <span>11억</span>
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
