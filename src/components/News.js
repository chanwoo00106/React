import data from '../db/data.json';

export default function News(){
    return (
        <ul className="newsList">
            {data.news.map(news => (
                <li key={news.num}>{news.title}</li>
            ))}
        </ul>
    );
}