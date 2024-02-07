import React, { useEffect, useState } from 'react';
import { formattedPrice } from '../../utils/utils';

import './styles.css';

export default function TableRow({
  id,
  title,
  unit,
  price,
  calculateTotalCost,
}) {
  const [value, setValue] = useState('');

  const cost = (value === '.' ? +('0' + value) : +value * +price) // if value starts with ".", replace it to "0."
    .toString()
    .replace(/(\.\d{2})\d+$/, '$1'); // if there will be more than 2 digits after ".", cut them

  useEffect(() => {
    calculateTotalCost(id, cost);
  }, [calculateTotalCost, id, cost]);

  function handleChange(e) {
    const inputValue = e.target.value;
    const regex = /^[0-9]*(\.[0-9]*)?$/; // only digits and period are allowed
    if (regex.test(inputValue) && inputValue.length <= 4) {
      setValue(inputValue);
    }
  }

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
          onChange={handleChange}
          placeholder='0.00'
          type='number'
        />
      </td>
      <td className='prices-table__body-cell table__body-cell table__cell'>
        {formattedPrice(cost)}
      </td>
    </tr>
  );
}
