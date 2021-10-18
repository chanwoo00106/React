import React, { useState } from 'react';
import { Wrapper } from './style/Contents.styles';


const sample = {
    title: "[Today's Match] Group Stage DAY 4 | 2021 월드 챔피언십",
    user: '신종기',
    img: "https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg"
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
