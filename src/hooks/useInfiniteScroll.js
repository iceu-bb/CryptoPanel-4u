import { useState, useEffect } from 'react';
import { debounce } from '../helpers/debounce';

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(page);
    setPage(page + 1);
  }, [isFetching]);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight - 50 ||
      isFetching
    )
      return;
    setIsFetching(true);
  }, 250);

  return [page, isFetching, setIsFetching];
};

export default useInfiniteScroll;
