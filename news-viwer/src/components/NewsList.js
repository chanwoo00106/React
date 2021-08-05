import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

function NewsList() {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=f9ceb37eab5e42fe8853946fe69d3cca');
                setArticles(res.data.articles);
            } catch(e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    }
    if (!articles) {
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )
}

export default NewsList
