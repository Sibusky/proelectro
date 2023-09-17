import React from 'react';
import './styles.css';

export default function PricesTable({ priceList }) {

    // console.log(priceList, 'price list in price table')
  return (
    <section className='prices-table section'>
      <div className='prices-table__container section__container'>
        <h2 className='prices-table__title section__title'>
          Стоимость на отдельные виды работ
        </h2>
      </div>
    </section>
  );
}
