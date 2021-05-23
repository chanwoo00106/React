import React from 'react';
import data from '../db/data.json';
import Say from './Say';
import { useParams } from 'react-router-dom';

// react css 변경 하기  

export default function Images(){
    const num = Number(useParams().num);
    return (
        <>
            <fieldset className="image-fieldset">
                <legend>여러가지 등등</legend>
                <img className="image" src={`./images/${num}/1.jpg`} alt="사진을 찾을 수 없음" title="image" />
                <img className="image" src={`./images/${num}/2.jpg`} alt="사진을 찾을 수 없음" title="image" />
                <img className="image" src={`./images/${num}/3.jpg`} alt="사진을 찾을 수 없음" title="image" />
                
            </fieldset>
            <Say say={data.member.say} />
        </>
    );
}