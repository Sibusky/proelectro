import React from 'react';
import PricesComplex from '../components/PricesComplex';
import PricesTable from '../components/PricesTable';

export default function Prices({ priceCards, priceList, handleClick }) {
  return (
    <main className='main'>
      <PricesComplex priceCards={priceCards} handleClick={handleClick} />
      <PricesTable priceList={priceList} />
    </main>
  );
}
