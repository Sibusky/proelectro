import React from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

import { WEBSITE, SEND } from './constants';
import './styles.css';

export default function ApplicationForm({
  submitApplication,
  submitStatus,
  isFetching,
}) {
  const [values, errors, isValid, handleChange, resetForm] =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const payload = { ...values, website: WEBSITE };
    submitApplication(payload);
    resetForm();
  }

  return (
    <section className='application section'>
      <div className='application__container section__container'>
        <h2 className='application__title section__title'>
          Оставьте заявку и мы с вами свяжемся
        </h2>
        <form
          className='application__form'
          encType='multipart/form-data'
          onSubmit={handleSubmit}
        >
          <fieldset className='application__form-fieldset'>
            <ul className='application__input-list'>
              <li className='application__input-item'>
                <label
                  className='application__input-label'
                  htmlFor='application__input-name'
                >
                  Имя
                </label>
                <input
                  className={
                    errors.name
                      ? 'application__input application__input-error'
                      : 'application__input'
                  }
                  readOnly={isFetching && true}
                  id='application__input-name'
                  type='text'
                  placeholder='Ваше имя'
                  pattern='^[^0-9]*$'
                  name='name'
                  onChange={handleChange}
                  value={values.name ? values.name : ''}
                  minLength='2'
                  maxLength='50'
                  required
                />
                <span
                  id='error-application-name'
                  className='application__error'
                >
                  {errors.name}
                </span>
              </li>
              <li className='application__input-item'>
                <label
                  className='application__input-label'
                  htmlFor='application__input-email'
                >
                  Почта
                </label>
                <input
                  className={
                    errors.email
                      ? 'application__input application__input-error'
                      : 'application__input'
                  }
                  readOnly={isFetching && true}
                  id='application__input-email'
                  type='email'
                  placeholder='Ваша почта'
                  name='email'
                  onChange={handleChange}
                  value={values.email ? values.email : ''}
                  required
                />
                <span
                  id='error-application-email'
                  className='application__error'
                >
                  {errors.email}
                </span>
              </li>
              <li className='application__input-item'>
                <label
                  className='application__input-label'
                  htmlFor='application__input-phone'
                >
                  Телефон
                </label>
                <input
                  className={
                    errors.phone
                      ? 'application__input application__input-error'
                      : 'application__input'
                  }
                  readOnly={isFetching && true}
                  id='application__input-phone'
                  type='phone'
                  placeholder='Ваш телефон'
                  name='phone'
                  onChange={handleChange}
                  value={values.phone ? values.phone : ''}
                  required
                />
                <span
                  id='error-application-phone'
                  className='application__error'
                >
                  {errors.phone}
                </span>
              </li>

              {/* <li className='application__input-item'>
                <label
                  className='application__input-label'
                  htmlFor='application__input-file'
                >
                  Файл
                </label>
                <input
                  className='application__input'
                  id='application__input-file'
                  type='file'
                  name='file'
                  accept='.pdf,.doc,.docx,.jpg,.jpeg,.png'
                  onChange={handleFileChange}
                />
              </li> */}

              <li className='application__input-item'>
                <textarea
                  className={
                    errors.message
                      ? 'application__input application__input-error'
                      : 'application__input'
                  }
                  readOnly={isFetching && true}
                  id='application__input-message'
                  type='text'
                  placeholder='Опишите суть вашего вопроса...'
                  name='message'
                  onChange={handleChange}
                  value={values.message ? values.message : ''}
                  required
                />
                <span
                  id='error-application-message'
                  className='application__error'
                >
                  {errors.message}
                </span>
              </li>
            </ul>
          </fieldset>
          <button
            disabled={!isValid || isFetching ? true : false}
            className={
              !isValid || isFetching
                ? 'application__submit-btn application__submit-btn_disabled'
                : 'application__submit-btn button'
            }
            type='submit'
          >
            {isFetching ? 'Загрузка...' : SEND}
          </button>
          {submitStatus ?? <p>{submitStatus}</p>}
        </form>
      </div>
    </section>
  );
}
