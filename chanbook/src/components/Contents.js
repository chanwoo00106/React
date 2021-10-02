import React from 'react';
import Write from './Write';
import News from './News';
import data from '../db/data.json';

export const Contents = ({ onClick }) => {
    return (
        <div className="contents">
            <Write onClick={onClick} />
            {data.write.map((d, i) => (
                <News key={i} name={d.name} time={d.houre} text={d.text} img={d.img} userImg={d.userImg} like={d.like} />
            ))}
        </div>
    )
}