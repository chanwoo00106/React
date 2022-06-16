import React, { useEffect, useState } from "react";
import { NewsS } from "./Style";
import { faUserCircle, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { numToKorean, FormatOptions } from "num-to-korean";
import { Emoji } from "./Emoji";
import { useSelector, useDispatch } from "react-redux";
import { Like } from "../modules/news";

const News = ({ id, name, time, text, img, userImg }) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(
    useSelector((state) => {
      const result = state.News.write.find((i) => i.id === id);
      return result.like;
    })
  );

  useEffect(() => {
    console.log("hello");
  });

  const onClick = () => {
    dispatch(Like);
    setLike(like + 1);
  };

  const timeCalc = (time) => {
    const ms = new Date() - new Date(time);
    return Math.floor(ms / (1000 * 60 * 60 * 24)) <= 0
      ? Math.floor((ms / (1000 * 60 * 60)) % 24) <= 0
        ? Math.floor((ms / (1000 * 60)) % 60) <= 0
          ? `${Math.floor((ms / 1000) % 60)}초 전`
          : `${Math.floor((ms / (1000 * 60)) % 60)}분 전`
        : `${Math.floor((ms / (1000 * 60 * 60)) % 24)}시간 전`
      : `${Math.floor(ms / (1000 * 60 * 60 * 24))}일 전`;
  };

  return (
    <NewsS>
      <div className="user">
        {userImg ? (
          <span className="userImg">
            <img src={userImg} alt="userImg" />
          </span>
        ) : (
          <FontAwesomeIcon
            className="userCircle"
            icon={faUserCircle}
            size="3x"
          />
        )}
        <span className="information">
          <div className="name">{name}</div>
          <div className="time">{timeCalc(time)}</div>
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
  );
};

export default News;
