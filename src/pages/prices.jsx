import React from 'react';
import PricesComplex from '../components/PricesComplex';
import PricesTable from '../components/PricesTable';

export default function Prices({ handleClick }) {
  return (
    <main className='main'>
      <PricesComplex handleClick={handleClick} />
      <PricesTable />
    </main>
  );
}
