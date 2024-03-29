import React from 'react';
import './styles.css';

export default function Input({
  tagName = 'input',
  label,
  name,
  type,
  placeholder,
  pattern,
  minLength,
  maxLength,
  isRequired,
  isFetching,
  values,
  errors,
  handleChange,
}) {
  const Tag = tagName || 'input';

  return (
    <li className={`form__input-item form__input-item-${tagName}`}>
      <label
        className='form__input-label section__text'
        htmlFor={`form__input-${name}`}
      >
        {label}
      </label>
      <div className='form__input-container'>
        <Tag
          className={`section__text form__input form__input-${tagName}${
            errors[`${name}`] ? ` form__input-error form__input-error-${tagName}` : ''
          }`}
          readOnly={isFetching && true}
          id={`form__input-${name}`}
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          name={name}
          onChange={handleChange}
          value={values[`${name}`] ? values[`${name}`] : ''}
          minLength={minLength}
          maxLength={maxLength}
          required={isRequired}
        />
        <div className='form__span-container'>
          <span
            id={`error-form-${name}`}
            className='form__span-text form__error'
          >
            {errors[`${name}`]}
          </span>
          {name === 'message' && values[`${name}`] && (
            <span className='form__span-text'>осталось {2000 - values[`${name}`].length} символов</span>
          )}
        </div>
      </div>
    </li>
  );
}
