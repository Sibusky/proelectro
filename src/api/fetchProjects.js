import { projects } from '../constants/projects';
import { prices } from '../constants/prices';


export const fetchProjects = new Promise((resolve, reject) => {
  return setTimeout(() => {
    resolve(projects);
  }, 2000);
}).then((res) => (res ? res : Promise.reject(res, 'Ошибка загрузки данных')));


export const fetchPrices = new Promise((resolve, reject) => {
  return setTimeout(() => {
    resolve(prices);
  }, 2000);
}).then((res) => (res ? res : Promise.reject(res, 'Ошибка загрузки данных')));