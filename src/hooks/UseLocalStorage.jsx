import React, { useEffect, useState } from 'react';

const PREFIX = "CodeCraft";

const UseLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);

    if (jsonValue !== null) {
      try {
        return JSON.parse(jsonValue);
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        return initialValue; 
      }
    }
    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(prefixedKey, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default UseLocalStorage;
