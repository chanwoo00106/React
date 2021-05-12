import '../App.css';
import {Link} from 'react-router-dom';
import data from '../db/data.json';

export default function NameList(){
    return (
        <ul className="memberList">
            <div>Member</div>
            {data.member.map(member => (
                <Link key={member.num} className="member" to={`/${member.num}`}>
                    <li>{member.num}번 {member.name}</li>
                </Link>
            ))}
        </ul>
    );
}