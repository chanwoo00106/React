import React from 'react'
import { Wrapper } from './style/ColumnContents.styles'

const sample = {
    title: "[Today's Match] Group Stage DAY 4 | 2021 월드 챔피언십",
    user: '신종기',
    img: "https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg"
}

export const ColumnContents = () => {

    const a = [sample, sample, sample, sample, sample, sample, sample, sample, sample, sample, sample, sample, sample, sample, sample, sample]

    return (
        <Wrapper>
            <p>인기 급상승 동영상</p>
            <div className="constents">
                {a.map((i, idx) => (
                    <div key={idx} className="tag">
                        <img className="img" src="https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg" alt="sample-img" />
                        <div className="text">
                            <h3>그냥 제목임</h3>
                            <p>설명설명</p>
                        </div>
                    </div>
                ))}
            </div>
        </Wrapper>
    )
}
