import React from 'react';
import ContactsContainer from '../components/ContactsContainer';
import ApplicationForm from '../components/ApplicationForm';

export default function Contacts({
  submitApplication,
  submitStatus,
  setSubmitStatus,
  isFetching,
}) {
  return (
    <main className='main'>
      <ContactsContainer />
      <ApplicationForm
        submitApplication={submitApplication}
        submitStatus={submitStatus}
        setSubmitStatus={setSubmitStatus}
        isFetching={isFetching}
      />
    </main>
  );
}
