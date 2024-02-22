import React, { useCallback, useState } from 'react';
import { formattedPrice } from '../../utils/utils';
import { priceListData } from '../../constants/priceListData';
import TableRow from '../TableRow';
import Button from '../Button';

import './styles.css';

export default function PricesTable() {
  const [totalRows, setTotalRows] = useState([]);
  const [totalCost, setTotalCost] = useState();

  const calculateTotalCost = useCallback(
    (id, cost) => {
      const rowCost = { id, cost };
      setTotalRows((prevState) => {
        if (prevState.some((state) => state.id === id && state.cost === cost)) {
          return prevState;
        }
        if (prevState.some((state) => state.id === id && state.cost !== cost)) {
          return [...prevState.filter((state) => state.id !== id), rowCost];
        }
        return [...prevState, rowCost];
      });
      setTotalCost(
        totalRows.reduce((acc, currentValue) => acc + +currentValue.cost, 0)
      );
    },
    [totalRows]
  );

  return (
    <section className='prices-table section'>
      <div className='prices-table__container section__container'>
        <h2 className='prices-table__title section__title'>
          Стоимость отдельных видов работ
        </h2>
        <table className='prices-table__table table section__text'>
          <thead className='prices-table__head table__head'>
            <tr className='prices-table__row table__row'>
              <th className='prices-table__head-cell table__head-cell table__cell'>
                Наименование вида работ
              </th>
              <th className='prices-table__head-cell table__head-cell table__cell'>
                Ед. изм.
              </th>
              <th className='prices-table__head-cell table__head-cell table__cell'>
                Цена, руб
              </th>
              <th className='prices-table__head-cell table__head-cell table__cell'>
                Кол-во
              </th>
              <th className='prices-table__head-cell table__head-cell table__cell table__cell_wider'>
                Стоимость, руб
              </th>
            </tr>
          </thead>
          <tbody className='prices-table__body table__body'>
            {priceListData
              .sort((a, b) => a.id - b.id)
              .map((price) => (
                <TableRow
                  key={price.id}
                  id={price.id}
                  title={price.title}
                  unit={price.unit}
                  price={price.price}
                  calculateTotalCost={calculateTotalCost}
                />
              ))}
            <tr className='prices-table__row table__row'>
              <td
                className='prices-table__body-cell table__body-cell table__cell-result table__cell'
                colSpan='4'
              >
                Итого<span>*</span>:
              </td>
              <td className='prices-table__body-cell table__body-cell table__cell'>
                {totalCost
                  ? formattedPrice(totalCost.toFixed(2).toString())
                  : '0'}
              </td>
            </tr>
          </tbody>
        </table>
        <p className='prices-table__reference section__text'>
          <span>*</span> - данная таблица не является коммерческим предложением.
          Расчётная итоговая сумма определяется только на замерах.{' '}
        </p>
        <div className='prices-table__contacts section__text'>
          <Button path={'/contacts'}>Свяжитесь</Button>
          <p className='prices-table__reference section__text'>
            с нами, чтобы узнать подробнее.
          </p>
        </div>
      </div>
    </section>
  );
}
