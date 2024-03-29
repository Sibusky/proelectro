import { useCallback, useState } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());

    // Подставляю свой текст ошибки при валидации имени, чтобы пользователь
    // понимал что не так
    if (name === 'name') {
      if (
        target.validationMessage === 'Please match the requested format.' ||
        target.validationMessage === 'Введите данные в указанном формате.'
      ) {
        setErrors({
          ...errors,
          name: 'Ваше имя не должно содержать цифры',
        });
      }
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return [values, errors, isValid, handleChange, resetForm, setValues];
}
