import React, { useEffect, useState } from 'react';
import { formattedPrice } from '../../utils/utils';

import './styles.css';

export default function TableRow({ id, title, unit, price, handleTotal }) {
  const [value, setValue] = useState('');

  const cost = (value === '.' ? +('0' + value) : +value * +price)
    .toString()
    .replace(/(\.\d{2})\d+$/, '$1');

  useEffect(() => {
    handleTotal(id, cost);
  }, [handleTotal, id, cost]);

  return (
    <tr className='prices-table__row table__row'>
      <td className='prices-table__body-cell table__body-cell table__cell'>
        {title}
      </td>
      <td className='prices-table__body-cell table__body-cell table__cell'>
        {unit}
      </td>
      <td className='prices-table__body-cell table__body-cell table__cell'>
        {formattedPrice(price)}
      </td>
      <td className='prices-table__body-cell table__body-cell table__cell'>
        <input
          className='prices-table__input'
          value={value}
          onChange={(e) => {
            const inputValue = e.target.value;
            const regex = /^[0-9]*(\.[0-9]*)?$/;
            if (regex.test(inputValue) && inputValue.length <= 4) {
              setValue(inputValue);
            }
          }}
          placeholder='0.00'
        />
      </td>
      <td className='prices-table__body-cell table__body-cell table__cell'>
        {formattedPrice(cost)}
      </td>
    </tr>
  );
}
