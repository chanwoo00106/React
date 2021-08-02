import React from 'react'
import {Link, Route} from 'react-router-dom';
import Profile from './Profile';

export default function Profiles() {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <Link to="/profiles/chan">chan</Link>
                </li>
                <li>
                    <Link to="/profiles/teemo">teemo</Link>
                </li>
            </ul>
            <Route path="/profiles" exact render={() => <div>사용자를 선택해 주세요.</div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    )
}
