import React from 'react'
import qs from 'qs';

function About({ location }) {
    console.log(location)
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 이 설정으로 문자열 맨 앞에 ?를 생략합니다.
    });
    console.log(query)
    const showDetail = query.detail === 'true';
    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터 기초 공부</p>
            {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
        </div>
    )
}

export default About
