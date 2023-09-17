import React, { useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { fetchPriceList } from '../../api/fetchData';

import './styles.css';

export default function PricesTable() {
  const [priceList, setPriceList] = useState([]);
  const [isFetching] = useFetchData(fetchPriceList('prices'), setPriceList);

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
