import { useState, useEffect } from 'react';

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

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight - 50 ||
      isFetching
    )
      return;
    setIsFetching(true);
  };

  return [page, isFetching, setIsFetching];
};

export default useInfiniteScroll;
