import {FormEvent, useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import { isObjectEmpty, removeObjectEmptyValue } from '../common';

interface SearchParams {
  keyword: string;
  date: string;
  category: string;
  source: string;
  author: string;
}

function useForm(initialState: SearchParams) {
  const [formData, setFormData] = useState(initialState);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchCriteria = Object.fromEntries([...searchParams]);
    setFormData((prevState) => {
      return { ...prevState, ...searchCriteria };
    });
  }, [searchParams]);

  function onChangeInput(event: { target: { name: string; value: string; }; }) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function onResetForm() {
    localStorage.removeItem('params');
    setFormData(initialState);
    if (isObjectEmpty(Object.fromEntries(searchParams))) {
      console.log('The search form is already empty.')
      return;
    }
    setSearchParams();
  }

  function onSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isObjectEmpty(formData)) {
      console.log('The search form is empty. Please enter a criteria then try for a new search!')
      //  <=== INSTEAD WE CAN CHECK THE FILTERED DATA
      return; //
    } //
    const filteredData = removeObjectEmptyValue({ ...formData });
    setSearchParams({ ...filteredData });
  }

  return {
    formData,
    onChangeInput,
    onResetForm,
    onSubmitForm,
  };
}

export default useForm;
