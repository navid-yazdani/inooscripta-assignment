import {FormEvent, useState } from 'react';
import styled from 'styled-components';
import useForm from '../../utiles/customHooks/useForm';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Card = styled.div`
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 650px;
    margin-inline: auto;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GridItem = styled.div`
  flex: 1 0 45%;
  padding: 8px;

  @media (max-width: 768px) {
    flex: 1 0 100%;
  }
`;

const TextField = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 45%;
  background-color: ${props => props.color === 'secondary' ? '#f44336' : '#4CAF50'};
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchPanel = () => {
  const { formData, onChangeInput, onResetForm, onSubmitForm } = useForm({
    keyword: '',
    date: '',
    category: '',
    source: '',
    author: ''
  });

  const [searched, setSearched] = useState(false);

  const { keyword, date, category, source, author } = formData;

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    onSubmitForm(event);
    setSearched(true);
  };

  return (
    <Card>
      <form onSubmit={handleSearch}>
        <TextField
          name='keyword'
          value={keyword}
          id='keyword'
          placeholder='Search by keyword'
          onChange={onChangeInput}
        />
        <Grid>
          {searched && (
            <>
              <GridItem>
                <DatePicker
                  selected={date ? new Date(date) : new Date()}
                  onChange={date => onChangeInput({ target: { name: 'date', value: String(date) } })}
                  customInput={<TextField />}
                />
              </GridItem>
              <GridItem>
                <TextField
                  name='category'
                  value={category}
                  id='category'
                  placeholder='Category'
                  onChange={onChangeInput}
                />
              </GridItem>
              <GridItem>
                <TextField
                  name='source'
                  value={source}
                  id='source'
                  placeholder='Source'
                  onChange={onChangeInput}
                />
              </GridItem>
              <GridItem>
                <TextField
                  name='author'
                  value={author}
                  id='author'
                  placeholder='Author'
                  onChange={onChangeInput}
                />
              </GridItem>
            </>
          )}
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button type='submit'>
            Search
          </Button>
          <Button
            color='secondary'
            onClick={onResetForm}
          >
            Reset Search
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default SearchPanel;
