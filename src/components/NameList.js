import '../App.css';
import Image from './Image';
import data from '../db/data.json';

export default function NameList(){
    return (
        <div className="memberList-div">
            <ul className="memberList">
                <div>Member</div>
                {data.member.map(member => (
                    <a key={member.num} className="member" href={`http://localhost:3000/${member.num}`}>
                        <li>{member.num}번 {member.name}</li>
                    </a>
                ))}
            </ul>
            <Image />
        </div>
    );
}