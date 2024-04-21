import { useState } from 'react';

function useLocalStorage(key, defaultValue) {
  const [localStorageData] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  function setLocalStorageData(data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  return [localStorageData, setLocalStorageData];
}

export default useLocalStorage;
