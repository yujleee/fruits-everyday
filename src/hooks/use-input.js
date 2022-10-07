import { useState } from 'react';

const useInput = (validateValue) => {
  const [value, setValue] = useState('');
  const [isEntered, setIsEntered] = useState(false);

  const isValid = validateValue(value);
  const hasError = !isValid && isEntered;

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const valueBlurHandler = () => {
    setIsEntered(true);
  };

  const reset = () => {
    setValue('');
    setIsEntered(false);
  };

  return {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
