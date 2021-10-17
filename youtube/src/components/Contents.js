import React, { useState } from 'react';
import { Wrapper } from './style/Contents.styles';


const sample = {
    title: "[Today's Match] Group Stage DAY 4 | 2021 월드 챔피언십",
    user: 'LCK',
    img: "https://i.ytimg.com/vi/_-9WoR0X8WE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZJpWfCCalYgYxk3mk_Sa8k7QJrQ"
}

export const Contents = () => {
    const [data, setData] = useState([sample, sample, sample, sample, sample, sample, sample, sample, sample, sample, sample, sample, sample, sample, sample,]);

    return (
        <Wrapper>
            {data.map((i, idx) => (
                <div key={idx}>
                    <img src={i.img} alt="img" />
                    <h3>{i.title}</h3>
                    <p><b>{i.user}</b></p>
                </div>

            ))}
        </Wrapper>
    )
}
