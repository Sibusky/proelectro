export function fetchCards(data) {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(data);
    }, 2000);
  }).then((res) => (res ? res : Promise.reject(res, 'Ошибка загрузки данных')));
}
