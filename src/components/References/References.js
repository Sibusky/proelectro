import React, { useEffect, useState } from 'react';
import './References.css';
import Spinner from '../UI/Spinner';

export default function References() {
  const [fakeFetching, setFakeFetching] = useState(false);

  //Настройка линтера, чтобы не ругался на отсутсвие feedback_vk
  /* global feedback_vk */

  // Загрузка отзывов
  useEffect(() => {
    document.addEventListener(
      'DOMContentLoaded',
      feedback_vk.init({ id: 'feedback_vk', gid: 114151564, count: 100 })
    );
    return document.removeEventListener(
      'DOMContentLoaded',
      feedback_vk.init({ id: 'feedback_vk', gid: 114151564, count: 100 })
    );
  }, []);

  useEffect(() => {
    setFakeFetching(true);
    setTimeout(() => {
      setFakeFetching(false);
    }, 1000);
  }, [setFakeFetching]);

  return (
    <main className='references'>
      <section className='feedback section'>
        <div className='feedback__container section__container'>
          <h2 className='feedback__title section__title'>
            Отзывы о нашей работе
          </h2>
          {fakeFetching ? <Spinner /> : null}
          <div
            className={fakeFetching ? 'feedback_vk_fetching' : 'feedback_vk'}
            id='feedback_vk'
          ></div>
        </div>
      </section>
    </main>
  );
}
