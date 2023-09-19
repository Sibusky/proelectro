import { collection, getDocs } from 'firebase/firestore';
import { db } from '../constants/firebaseConfig';

const baseUrl = 'http://localhost:3001';

function checkResponce(res) {
  return res ? res : Promise.reject(res, 'Ошибка загрузки данных');
}

// Fake data fetch
export function fetchCards(data) {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(data);
    }, 0);
  }).then((res) => checkResponce(res));
}

// Fetch data from firebase
export function fetchPriceList(collectionName) {
  const collectionRef = collection(db, collectionName);

  return new Promise((resolve, reject) => {
    resolve(getDocs(collectionRef));
  })
    .then((res) => checkResponce(res))
    .then((res) =>
      res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
}

// POST new application
export function postNewApplication(application) {
  return fetch(`${baseUrl}/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(application),
  }).then((res) => checkResponce(res));
}
