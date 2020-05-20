import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  // create a stack
  const [storedValue, setStoredValue] = useState(() => {
    // set the initial state to the local storage or the passed in value
    const selections = window.localStorage.getItem(key);
    return selections ? JSON.parse(selections) : initialValue;
  });

  const setValue = (value: T) => {
    // sync the value the state
    setStoredValue(value);
    // stringify value and set it to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}

export default useLocalStorage;