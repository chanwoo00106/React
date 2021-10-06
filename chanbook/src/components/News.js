import React, { useState } from 'react';
import { NewsS } from './Style';
import { faUserCircle, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { numToKorean, FormatOptions } from 'num-to-korean';
import { Emoji } from './Emoji';
import { useSelector, useDispatch } from 'react-redux';
import {Like} from '../modules/news'


const News = ({ id, name, time, text, img, userImg }) => {
    const dispatch = useDispatch();
    const [like, setLike] = useState( useSelector(state => {
        const result = state.News.find(i => i.id === id);
        return result.like
    }));

    const onClick = () => {
        dispatch(Like);
        setLike(like + 1);
    }


    return (
        <NewsS>
            <div className="user">
                {userImg ? (
                    <span className="userImg">
                        <img src={userImg} alt="userImg" />
                    </span>
                ) : (
                    <FontAwesomeIcon className="userCircle" icon={faUserCircle} size="3x" />
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
            <Emoji onClick={onClick} />
            <hr />
            <div className="comment">
                <FontAwesomeIcon className="userCircle" icon={faUserCircle} size="2x" />
                <input type="text" placeholder="댓글을 입력하세요..." />
            </div>
        </NewsS>
    )
}

export default News
