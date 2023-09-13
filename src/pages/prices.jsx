import React from 'react';
import { Link } from 'react-router-dom';

export default function Prices() {
  return (
    <main className='main'>
      <section className='prices section'>
        <div className='prices__container section__container'>
          <h2 className='prices__title section__title'>
            Примерная стоимость черновых работ по монтажу всей электропроводки
            со сборкой распределительного щита*
          </h2>
          <form className='calc'>
            <fieldset className='calc__inputs-fieldset'>
              <ul className='calc__input-list'>
                <li className='calc__input-item'>
                  <label
                    className='calc__input-label section__text'
                    htmlFor='calc__input-area'
                  >
                    Укажите площадь помещения в кв. м
                  </label>
                  <input
                    className='calc__input section__text'
                    // {
                    //   errors.password
                    //     ? 'calc__input calc__input-error'
                    //     : 'calc__input'
                    // }
                    id='calc__input-area'
                    type='number'
                    placeholder='Площадь'
                    // pattern='^\d+$'
                    name='area'
                    minLength='1'
                    max='300'
                    // onChange={handleChange}
                    // value={values.password ? values.password : ''}
                    required
                  />
                  <span id='error-calc-area' className='calc__error'>
                    {/* {errors.password} */}
                  </span>
                </li>
                <li className='calc__input-item'>
                  <p className='calc__input-label section__text'>
                    Выберите высоту потолка
                  </p>
                  <ul className='calc__input-item-list'>
                    <li className='calc__input-item'>
                      <input
                        className='calc__input'
                        id='calc__input-height-1'
                        type='radio'
                        name='height'
                      />
                      <label className='calc__input-label section__text'>
                        2,5 м - 2,9 м
                      </label>
                    </li>
                    <li className='calc__input-item'>
                      <input
                        className='calc__input'
                        id='calc__input-height-2'
                        type='radio'
                        name='height'
                      />
                      <label className='calc__input-label section__text'>
                        2,91 м - 4 м
                      </label>
                    </li>
                    <li className='calc__input-item'>
                      <input
                        className='calc__input'
                        id='calc__input-height-3'
                        type='radio'
                        name='height'
                      />
                      <label className='calc__input-label section__text'>
                        выше 4 м
                      </label>
                    </li>
                  </ul>
                </li>
                <li className='calc__input-item'>
                  <p className='calc__input-label section__text'>
                    Выберите материал стен
                  </p>
                  <ul className='calc__input-item-list'>
                    <li className='calc__input-item'>
                      <input
                        className='calc__input'
                        id='calc__input-walls-1'
                        type='radio'
                        name='walls'
                      />
                      <label className='calc__input-label section__text'>
                        Большинство стен кирпичные
                      </label>
                    </li>
                    <li className='calc__input-item'>
                      <input
                        className='calc__input'
                        id='calc__input-walls-2'
                        type='radio'
                        name='walls'
                      />
                      <label className='calc__input-label section__text'>
                        Большинство стен из газобетона / пазогребня
                      </label>
                    </li>
                    <li className='calc__input-item'>
                      <input
                        className='calc__input'
                        id='calc__input-walls-3'
                        type='radio'
                        name='walls'
                      />
                      <label className='calc__input-label section__text'>
                        Большинство стен бетонные
                      </label>
                    </li>
                    <li className='calc__input-item'>
                      <input
                        className='calc__input'
                        id='calc__input-walls-4'
                        type='radio'
                        name='walls'
                      />
                      <label className='calc__input-label section__text'>
                        Большинство стен из гипсокартона
                      </label>
                    </li>
                    <li className='calc__input-item'>
                      <input
                        className='calc__input'
                        id='calc__input-walls-5'
                        type='radio'
                        name='walls'
                      />
                      <label className='calc__input-label section__text'>
                        Дом из дерева (брус, бревно), нужна скрытая проводка
                      </label>
                    </li>
                    <li className='calc__input-item'>
                      <input
                        className='calc__input'
                        id='calc__input-walls-6'
                        type='radio'
                        name='walls'
                      />
                      <label className='calc__input-label section__text'>
                        Дом из дерева (брус, бревно), нужна ретро проводка
                      </label>
                    </li>
                    <li className='calc__input-item'>
                      <input
                        className='calc__input'
                        id='calc__input-walls-7'
                        type='radio'
                        name='walls'
                      />
                      <label className='calc__input-label section__text'>
                        Дом из дерева (брус, бревно), нужна проводка в
                        кабель-канале
                      </label>
                    </li>
                  </ul>
                </li>
              </ul>
            </fieldset>
            <div className='calc__results'>
              <button className='calc__results-button' type='submit'>
                Рассчитать
              </button>
            </div>
            <div className='calc__work-price'>
              <p className='calc__price-text section__text'>
                Примерная стоимость работ по монтажу вашей проводки:
              </p>
              <p className='calc__price-text section__text'>{'123'}</p>
            </div>
            <div className='calc__goods-price'>
              <p className='calc__price-text section__text'>
                Примерная стоимость материалов для монтажа вашей проводки:
              </p>
              <p className='calc__price-text section__text'>{'123'}</p>
            </div>
            <p className='section__text'>
              * В примерную расчётную стоимость не входит установка
              светильников, а также механизмов розеток и выключателей. Расчётная
              стоимость не является публичной офертой.
            </p>
            <Link className='steps__list-item-link section__text' to='/contacts'>
                Связаться с нами
              </Link>
          </form>
        </div>
      </section>
    </main>
  );
}
