import React, { useEffect } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { deleteMessageInTime } from '../../utils/utils';
import Form from '../Form';
import Input from '../Input';

import { WEBSITE, SEND, LOADING } from './constants';
import './styles.css';

export default function ApplicationForm({
  submitApplication,
  submitStatus,
  setSubmitStatus,
  isFetching,
}) {
  const [values, errors, isValid, handleChange, resetForm] =
    useFormWithValidation();

  // Delete message about send status
  useEffect(() => {
    if (submitStatus) {
      deleteMessageInTime(setSubmitStatus);
    }
  }, [submitStatus, setSubmitStatus]);

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
        <Form
          handleSubmit={handleSubmit}
          isValid={isValid}
          isFetching={isFetching}
          loadingMessage={LOADING}
          buttonMessage={SEND}
          submitStatus={submitStatus}
        >
          <Input
            label='Имя*'
            name='name'
            type='text'
            placeholder='Ваше имя'
            pattern='^[^0-9]*$'
            minLength='2'
            maxLength='60'
            isRequired={true}
            isFetching={isFetching}
            values={values}
            errors={errors}
            handleChange={handleChange}
          />
          <Input
            label='Почта'
            name='email'
            type='email'
            placeholder='Ваша почта'
            isRequired={false}
            isFetching={isFetching}
            values={values}
            errors={errors}
            handleChange={handleChange}
          />
          <Input
            label='Телефон*'
            name='phone'
            type='tel'
            placeholder='+79001231212'
            pattern='^(?:\+7|8)9\d{9}$'
            isRequired={true}
            isFetching={isFetching}
            values={values}
            errors={errors}
            handleChange={handleChange}
          />
          <Input
            tagName='textarea'
            label='Сообщение*'
            name='message'
            placeholder='Ваш текст...'
            minLength='3'
            maxLength='2000'
            isRequired={true}
            isFetching={isFetching}
            values={values}
            errors={errors}
            handleChange={handleChange}
          />
        </Form>
      </div>
    </section>
  );
}
