import { useMemo } from 'react';

function useBookStats(books) {
  return useMemo(() => {
    const total = books.length;
    const dimiliki = books.filter(b => b.status === 'dimiliki').length;
    const dibaca = books.filter(b => b.status === 'dibaca').length;
    const dibeli = books.filter(b => b.status === 'dibeli').length;

    return { total, dimiliki, dibaca, dibeli };
  }, [books]);
}

export default useBookStats;
