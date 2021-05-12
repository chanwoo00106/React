import React from 'react';
import { useParams } from 'react-router-dom';

export default function Images(){
    const num = Number(useParams().num);
    console.log(num);
    return (
        <>
            <fieldset className="image-fieldset">
                <legend>사진</legend>
                <img className="image" src={`./images/${num}/1.jpg`} alt="사진을 찾을 수 없음" title="image" />
                <img className="image" src={`./images/${num}/2.jpg`} alt="사진을 찾을 수 없음" title="image" />
                <img className="image" src={`./images/${num}/3.jpg`} alt="사진을 찾을 수 없음" title="image" />
            </fieldset>
        </>
    );
}