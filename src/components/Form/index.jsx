import React from 'react';
import './styles.css';

export default function Form({
  children,
  handleSubmit,
  isValid,
  isFetching,
  loadingMessage,
  buttonMessage,
  isServerReady,
}) {
  const isButtonDisabled = !isValid || isFetching || !isServerReady;
  return (
    <form className='form' onSubmit={handleSubmit}>
      <fieldset className='form__fieldset'>
        <ul className='form__fieldset-list'>{children}</ul>
        <p className='section__text'>
          <small>* поля, отмеченные звёздочкой, обязательны к заполнению</small>
        </p>
        <button
          disabled={isButtonDisabled}
          className={
            isButtonDisabled
              ? 'form__submit-button form__submit-button_disabled section__text'
              : 'form__submit-button button section__text'
          }
          type='submit'
        >
          {isFetching ? loadingMessage : buttonMessage}
        </button>
      </fieldset>
    </form>
  );
}
