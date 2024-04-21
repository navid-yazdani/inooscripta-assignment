import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import {News} from "../../utiles/services";
import {Article} from "../../utiles/services/type.ts";
import axios from "axios";
import SearchBar from "../../components/Home/SearchBar.tsx";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`;

const FlexItem = styled.div`
    flex: 1 0 100%;
    margin: 10px;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;

    @media (min-width: 1200px) {
        /* xl screens */
        flex: 0 0 calc(100% / 6 - 20px);
    }
`;

const NewsFeed: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const convertDate = (timestamp: EpochTimeStamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US');
  }

  const fetchArticles = (query: string) => {
    News.getNews({params: {query}}).then(response => {
      setArticles(response.articles);
    })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  };

  return (
    <Container>
      <SearchBar onSearch={(query) => fetchArticles(query)}/>
      <FlexContainer>
        {articles.map((article) => (
          <FlexItem key={article.id}>
            <img src={article.urlToImage} alt={article.title}/>
            <h2>{article.title}</h2>
            <p>{article.source?.name}</p>
            <p>{article.description}</p>
            <p>{convertDate(article.publishedAt)}</p>
          </FlexItem>
        ))}
      </FlexContainer>
    </Container>
  );
};

export default NewsFeed;
