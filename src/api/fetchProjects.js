import { projects } from '../constants/projects';

export const fetchProjects = new Promise((resolve, reject) => {
  return setTimeout(() => {
    resolve(projects);
  }, 2000);
}).then((res) => (res ? res : Promise.reject(res, 'Ошибка загрузки данных')));
