import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {article, params} from "../../utiles/services/type.ts";
import SearchPanel from "../../components/Home/SearchPanel.tsx";
import {useSearchParams} from "react-router-dom";
import {News} from "../../utiles/services";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 16px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 0 100%;
    margin: 10px;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
`;

const Image = styled.img`
    max-width: 100%;
    height: 200px;
    border-radius: 16px;
`;

const HeaderTextEellipsis = styled.h2`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TextEellipsis = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const NewsFeed: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState<article[]>([]);

  useEffect(() => {
    const params: params = {};
    for (const entry of searchParams.entries()) {
      params[entry[0]] = entry[1]
    }
    if (Object.entries(params).length <= 0) {
      const storage = localStorage.getItem('params') && JSON.parse(localStorage.getItem('params')!);
      setSearchParams({...storage});
    } else {
      localStorage.setItem('params', JSON.stringify(params));
    }
    fetchArticles(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const convertDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US');
  }

  const fetchArticles = (params: params) => {
    fetchNewsArticles(params);
    fetchNewsAiArticles(params);
    fetchGuardianArticles(params);
  }

  const fetchNewsArticles = (params: params) => {
    const newsApi = import.meta.env.VITE_NEWS_API_BASE_URL;
    const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;
    const data = {
      q: params.keyword ? params.keyword : 'bbc',
      sources: params.source,
      to: params.date,
      category: params.category,
      apiKey: newsApiKey
    }
    News.getNews(newsApi, data).then(response => {
      const news: article[] = [];
      const data = response.articles as article[];
      data?.forEach(article => {
        news.push({
          author: article.author,
          title: article.title,
          description: article.description,
          image: article.urlToImage!,
          publishedAt: article.publishedAt,
          source: article.source
        })
      })
      setArticles((prevState => ([...prevState, ...news])))
    })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  };

  const fetchNewsAiArticles = (params: params) => {
    const newsApi = import.meta.env.VITE_NEWS_AI_API_BASE_URL;
    const newsApiKey = import.meta.env.VITE_NEWS_AI_API_KEY;
    const data = {
      keyword: params.keyword ? params.keyword : 'bbc',
      categoryUri: params.category,
      sourceUri: params.source,
      authorUri: params.author,
      dateEnd: params.date,
      apiKey: newsApiKey
    }
    News.getNews(newsApi, data).then(response => {
      const news: article[] = [];
      const data = response.articles as { results?: article[] };
      data.results?.forEach((article) => {
        news.push({
          author: article.authors![0],
          title: article.title,
          description: article.body!,
          image: article.image,
          publishedAt: article.publishedAt,
          source: article.source
        })
      })
      setArticles((prevState => ([...prevState, ...news])))
    })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  };

  const fetchGuardianArticles = (params: params) => {
    const newsApi = import.meta.env.VITE_GUARDIAN_BASE_URL;
    const newsApiKey = import.meta.env.VITE_GUARDIAN_API_KEY;
    const data = {
      q: params.keyword,
      section: params.category,
      published: params.date,
      author: params.author,
      'api-key': newsApiKey
    }
    News.getNews(newsApi, data).then(response => {
      const news: article[] = []
      response.response?.results?.forEach(article => {
        news.push({
          author: Array.isArray(article.authors) ? article.authors[0] : '',
          title: article.webTitle!,
          description: article.webTitle!,
          image: '',
          publishedAt: article.webPublicationDate!,
          source: {
            name: 'guardian'
          }
        })
      })
      setArticles((prevState => ([...prevState, ...news])))
    })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  };

  return (
    <>
      <SearchPanel/>
      <Container>
        {articles.map((article, index) => (
          <Card key={index}>
            {article.image && <Image src={article.image} alt={article.title}/>}
            <HeaderTextEellipsis>{article.title}</HeaderTextEellipsis>
            <TextEellipsis>{article.description}</TextEellipsis>
            <p>{convertDate(article.publishedAt)}</p>
            <p>{article.source.name?.trim() || article.source.title?.trim()}</p>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default NewsFeed;
