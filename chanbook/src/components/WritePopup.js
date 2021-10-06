import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNews, Toggle } from '../modules/news';
import { WhiteBg, MainPopup } from './Style'
import { faEllipsisH, faImages, faLaugh, faMapMarkerAlt, faMicrophone, faTimes, faUserCircle, faUserTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WritePopup = () => {
    const [img, setImg] = useState();
    const [text, setText] = useState();

    const AddFile = e => {
        const url = URL.createObjectURL(e.target.files[0]);
        setImg(url);
    }

    const dispatch = useDispatch();
    const {toggle} = useSelector(state => ({toggle: state.News.toggle}))
    const onClick = (name, text, imgUrl, userImg) => {
        if (text){
            dispatch(addNews(name, text, imgUrl, userImg));
        }
        dispatch(Toggle())
        if (toggle) document.querySelector('body').style.overflow = 'visible';
        else document.querySelector('body').style.overflow = 'hidden';
    }

    return (
        <WhiteBg>
            <MainPopup>
                <div className="title">
                    <h2>게시물 만들기</h2>
                    <span className="exit">
                        <FontAwesomeIcon icon={faTimes} size="2x" onClick={() => onClick} />
                    </span>
                </div>
                <hr />
                <div className="writePadding">
                    <div className="user">
                        <FontAwesomeIcon icon={faUserCircle} size="2x" />
                        <div className="name">
                            <div>변찬우</div>
                            <select>
                                <option selected value="0">친구만</option>
                            </select>
                        </div>
                    </div>
                    <textarea onChange={e => setText(e.target.value)} placeholder={`변찬우님, 무슨 색각을 하고 계신가요?`}></textarea>
                    {img && (
                        <>
                            <img src={img} alt="image_sample" />
                        </>
                    )}
                    <div className="add">
                        <span>게시물에 추가</span>
                        <div className="icons">
                            <span>
                                <input id="file" type="file" style={{display: 'none'}} onChange={AddFile} />
                                <label for="file">
                                    <FontAwesomeIcon style={{ color: "#45BD62" }} size="lg" icon={faImages} />
                                </label>
                            </span>
                            <span><FontAwesomeIcon style={{ color: "#1877F2" }} size="lg" icon={faUserTag} /></span>
                            <span><FontAwesomeIcon style={{ color: "#F9CD65" }} size="lg" icon={faLaugh} /></span>
                            <span><FontAwesomeIcon style={{ color: "#F5533D" }} size="lg" icon={faMapMarkerAlt} /></span>
                            <span><FontAwesomeIcon style={{ color: "#F13957" }} size="lg" icon={faMicrophone} /></span>
                            <span><FontAwesomeIcon style={{ color: "#606770" }} size="lg" icon={faEllipsisH} /></span>
                        </div>
                    </div>
                    <button onClick={() => onClick("최형우", text, img, "https://ih1.redbubble.net/image.1359065021.9702/raf,750x1000,075,t,000000:44f0b734a5.jpg")} className="submit">게시</button>
                </div>
            </MainPopup>
        </WhiteBg>
    )
}
