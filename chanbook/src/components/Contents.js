import React from 'react';
import Write from './Write';
import News from './News';
import { useSelector } from 'react-redux';

export const Contents = () => {
    const { data } = useSelector(data => ({data: data.News.write}));

    return (
        <div className="contents">
            <Write />
            {data.map((d, i) => (
                <News key={i} id={d.id} name={d.name} time={d.houre} text={d.text} img={d.img} userImg={d.userImg} like={d.like} />
            ))}
        </div>
    )
}