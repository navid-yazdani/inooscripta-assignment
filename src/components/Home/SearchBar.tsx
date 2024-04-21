import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {useLocation, useNavigate} from 'react-router-dom';

// Define your styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const SearchInput = styled.input`
    margin-bottom: 20px;
`;

// Define the types for your state
interface Article {
  date: Date;
  category: string;
  source: string;
  author: string;
  title: string;
}

interface SearchProps {
  onSearch: (query: string) => void;
}

// Define your component
const SearchComponent: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');

    if (query) {
      setSearchTerm(query);
      onSearch(query);
    }
  }, [location]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`?query=${searchTerm}`);
  };

  return (
    <Container>
      <form onSubmit={handleSearchSubmit}>
        <SearchInput
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </Container>
  );
};

export default SearchComponent;
