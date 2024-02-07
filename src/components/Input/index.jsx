import React from 'react';
import './styles.css';

export default function Input({
  tagName,
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
    <li className='form__input-item'>
      <label
        className='form__input-label section__text'
        htmlFor={`form__input-${name}`}
      >
        {label}
      </label>
      <div className='form__input-container'>
        <Tag
          className={`section__text form__input${
            errors[`${name}`] ? ' form__input-error' : ''
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
        <span id={`error-form-${name}`} className='form__error'>
          {errors[`${name}`]}
        </span>
      </div>
    </li>
  );
}
