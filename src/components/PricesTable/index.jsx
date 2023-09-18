import React, { useCallback, useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { fetchPriceList } from '../../api/fetchData';
import { formattedPrice } from '../../utils/utils';
import { priceListData } from '../../constants/priceListData';
import TableRow from '../TableRow';
import Spinner from '../UI/Spinner';

import './styles.css';
import Button from '../Button';

export default function PricesTable() {
  const [priceList, setPriceList] = useState([]);
  const [isFetching] = useFetchData(fetchPriceList('prices123'), setPriceList);

  const [totalRows, setTotalRows] = useState([]);
  const [totalCost, setTotalCost] = useState();

  const handleTotal = useCallback(
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

        {isFetching ? (
          <Spinner />
        ) : (
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
              {(!priceList || priceList.length === 0
                ? priceListData
                : priceList
              )
                .sort((a, b) => a.id - b.id)
                .map((price) => (
                  <TableRow
                    key={price.id}
                    id={price.id}
                    title={price.title}
                    unit={price.unit}
                    price={price.price}
                    handleTotal={handleTotal}
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
        )}
        <p className='prices-table__reference section__text'>
          <span>*</span> - данная таблица не является коммерческим пердложением.
          Рассчётная итоговая сумма определяется только на замерах.{' '}
        </p>
        <p className='prices-table__reference section__text'>
          <Button path={'/contacts'}>Свяжитесь</Button> с нами, чтобы узнать
          подробнее.
        </p>
      </div>
    </section>
  );
}
