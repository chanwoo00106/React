import React, { useState } from 'react';
import Write from './Write';
import News from './News';
import { useSelector } from 'react-redux';

export const Contents = ({ onClick }) => {
    const { data } = useSelector(data => ({data: data.News}));

    const [like, setLike] = useState()

    return (
        <div className="contents">
            <Write onClick={onClick} />
            {data.map((d, i) => (
                <div key={i}>
                    <p>{d.like}</p>
                    <News key={i} id={d.id} name={d.name} time={d.houre} text={d.text} img={d.img} userImg={d.userImg} like={d.like} />
                </div>
            ))}
        </div>
    )
}