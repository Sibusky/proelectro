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
    <main className='main'>
      <section className='feedback section'>
        <div className='feedback__container section__container'>
          <h2 className='feedback__title section__title'>
            Отзывы о нашей работе
          </h2>
          <div className='feedback__site'>
            <div className='feedback__browser'>
              <div className='feedback__tab-bar'>
                <div className='feedback__dot-buttons'>
                  <div className='feedback__dot-button'></div>
                  <div className='feedback__dot-button'></div>
                  <div className='feedback__dot-button'></div>
                </div>
                <div className='feedback__tab'>
                  <div className='feedback__tab-vk-logo'></div>
                  <p className='feadback__tab-name section__text feedback__text'>
                    Электрик в Вологде
                  </p>
                  <p className='feadback__tab-close section__text feedback__text'>
                    ×
                  </p>
                </div>
                <p className='feedback__tab-plus section__text feedback__text'>
                  +
                </p>
                <p className='feedback__tab-arrow section__text feedback__text'>
                  ᐯ
                </p>
              </div>
              <div className='feedback__search-query'>
                <div className='feedback__navigate-buttons'>
                  <p className='feedback__arrow-back section__text feedback__text'>
                    ᐸ
                  </p>
                  <p className='feedback__arrow-forward section__text feedback__text'>
                    ᐳ
                  </p>
                  <p className='feedback__arrow-reboot section__text feedback__text'>
                    ⟳
                  </p>
                </div>
                <div className='feedback__query-input'>
                  <a
                    className='feedback__query link'
                    href='https://vk.com/topic-114151564_38563040'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <p className='feedback__query-text section__text feedback__text'>
                      https://vk.com/vol_electro
                    </p>
                  </a>
                </div>
              </div>
            </div>
            {fakeFetching ? <Spinner /> : null}
            <div
              className={fakeFetching ? 'feedback_vk_fetching' : 'feedback_vk'}
              id='feedback_vk'
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
}
