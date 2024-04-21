import React, { useState } from 'react';
import styled from 'styled-components';
import useForm from '../../utiles/customHooks/useForm';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Card = styled.div`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
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

const Select = styled.select`
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
  });

  const [searched, setSearched] = useState(false);

  const { keyword, date, category, source } = formData;

  const handleSearch = (event: Event) => {
    onSubmitForm(event);
    setSearched(true);
  };

  return (
    <Card style={{ minWidth: '805px' }}>
      <form onSubmit={handleSearch}>
        <Grid>
          <GridItem>
            <TextField
              name='keyword'
              value={keyword}
              id='keyword'
              placeholder='Search by keyword'
              onChange={onChangeInput}
            />
          </GridItem>
          {searched && (
            <>
              <GridItem>
                <DatePicker
                  selected={date}
                  onChange={date => onChangeInput({ target: { name: 'date', value: date } })}
                  customInput={<TextField />}
                />
              </GridItem>
              <GridItem>
                <Select
                  name='category'
                  value={category}
                  id='category'
                  onChange={onChangeInput}
                >
                  <option value=''>Select category</option>
                  <option value='category1'>Category 1</option>
                  <option value='category2'>Category 2</option>
                </Select>
              </GridItem>
              <GridItem>
                <Select
                  name='source'
                  value={source}
                  id='source'
                  onChange={onChangeInput}
                >
                  <option value=''>Select source</option>
                  <option value='source1'>Source 1</option>
                  <option value='source2'>Source 2</option>
                </Select>
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
