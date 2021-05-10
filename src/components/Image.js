import React from 'react';

export default function Image(){
    return (
        <>
            <fieldset className="image-fieldset">
                <legend>사진</legend>
                <img className="image" src="./images/10/1.jpg" />
                <img className="image" src="./images/10/2.jpg" />
                <img className="image" src="./images/10/3.jpg" />
            </fieldset>
        </>
    );
}