import React from 'react';
import './About.css';
import aboutPhoto from '../../../images/about-photo.jpeg';

export default function About() {
  return (
    <section className='about section'>
      <div className='about__container section__container'>
        <h2 className='about__title section__title'>Кто мы</h2>
        <div className='about__text-container'>
          <img
            className='about__photo'
            src={aboutPhoto}
            alt='Бригада ПроЭлектро'
          />

          <p className='about__text section__text'>
            ПроЭлектро - бригада профессиональных электриков. Нас трое: Смирнов
            Алексей, Дымов Роман, Кичигин Михаил. Электрикой в квартирах и
            коттеджах занимаемся с февраля 2016 года. За это время накопили
            столько опыта, что можем гордиться каждым выполненным объектом. Не
            все мастера учитывают работу смежных рабочих, а мы это делаем и
            часто получаем признание не только клиентов, но и отделочников.
          </p>
          <p className='about__text section__text'>
            Мы любим то, чем занимаемся, а занимаемся мы только электрикой. В
            вопросах сантехники или отделки помочь не сможем. Но поделимся
            номерами телефонов подходящих мастеров.
          </p>
          <p className='about__text section__text'>
            Если работы нужно выполнить “вчера”, то мы, к сожалению, не возьмём
            такой объект, потому что всегда есть график работ, которому мы
            следуем. За скоростью выполнения не гонимся - качество монтажа на
            первом месте. Выполненная нами электропроводка не только
            эргономична, но и надёжна.
          </p>
          <p className='about__text section__text'>
            Делаем электрику в Вологде, но готовы выехать в район.
          </p>
        </div>
      </div>
    </section>
  );
}
