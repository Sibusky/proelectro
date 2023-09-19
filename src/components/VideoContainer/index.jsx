import React from 'react';
import { videos } from '../../constants/videos';

import './styles.css';

export default function VideoContainer() {
  return (
    <section className='video section'>
      <div className='video__container section__container'>
        <h2 className='video__title section__title'>Наши видео на YouTube</h2>
        <ul className='video__list'>
          {videos.map((video) => (
            <li className='video__item' key={video.id}>
              <iframe
                className='video__iframe'
                title={video.title}
                src={`https://www.youtube.com/embed/${video.embedUrl}`}
                border='0'
                allowFullScreen
              ></iframe>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
