import React from 'react'
import WithRouterSample from './WithRouterSample';
import { withRouter } from 'react-router'

const data = {
    teemo: {
        name: 'Teemo',
        description: 'I love mushroom'
    },
    chan: {
        name: 'chanwoo',
        description: 'I am human'
    }
}

export default function Profile({match}) {
    const {username} = match.params;
    const profile = data[username];

    if(!profile){
        return <div>존재하지 않는 사용자 입니다.</div>
    }

    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>
    )
}
