import React, { useEffect, useRef } from 'react';
import './References.css';

export default function References() {
  const feedbackRef = useRef();

  // console.log(feedbackRef.current.innerHTML)

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

  return (
    <main className='references'>
      <section className='feedback section'>
        <div className='feedback__container section__container'>
          <h2 className='feedback__title section__title'>
            Отзывы о нашей работе
          </h2>
          
          <div className='feedback_vk' id='feedback_vk' ref={feedbackRef}></div>
        </div>
      </section>
    </main>
  );
}
