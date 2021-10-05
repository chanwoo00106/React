import React from 'react';
import { useDispatch } from 'react-redux';
import {Like} from '../modules/news'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Emoji = ({id}) => {
    const dispatch = useDispatch();
    return (
        <div className="emoji">
            <div onClick={() => dispatch(Like(id))}>
            <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                <span>좋아요</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faComment} size="lg" />
                <span>댓글 달기</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faShare} size="lg" />
                <span>공유하기</span>
            </div>
        </div>
    )
}
