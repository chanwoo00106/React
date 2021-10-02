import React from 'react';
import { NewsS } from './Style';
import { faUserCircle, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { numToKorean, FormatOptions } from 'num-to-korean';
import { Emoji } from './Emoji';

const News = ({ name, time, text, img, userImg, like }) => {
    return (
        <NewsS>
            <div className="user">
                {userImg ? (
                    <FontAwesomeIcon className="userCircle" icon={faUserCircle} size="3x" />
                ) : (
                    <div></div>
                )}
                <span className="information">
                    <div className="name">{name}</div>
                    <div className="time">{time}시간 전</div>
                </span>
            </div>
            <div className="text">{text}</div>
            {img && (
                <div className="img">
                    <img src={img} alt="contents_image" />
                </div>
            )}

            <div className="thumb-num">
                <FontAwesomeIcon icon={faThumbsUp} size="1x" />
                <span>{numToKorean(like, FormatOptions.MIXED)}</span>
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
