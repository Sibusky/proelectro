import { useEffect, useState } from 'react';

export function useFetchData(fetchFunction, setter) {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetchFunction
      .then((res) => setter(res))
      .catch((err) => console.error(err))
      .finally(() => setIsFetching(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [isFetching];
}
