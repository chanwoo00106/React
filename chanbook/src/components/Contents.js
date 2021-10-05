import React from 'react';
import Write from './Write';
import News from './News';
import { useSelector } from 'react-redux';

export const Contents = ({ onClick }) => {
    const data = useSelector(data => data.News);
    console.log(data)
    return (
        <div className="contents">
            <Write onClick={onClick} />
            {data.map((d, i) => (
                <News key={i} name={d.name} time={d.houre} text={d.text} img={d.img} userImg={d.userImg} like={d.like} />
            ))}
        </div>
    )
}