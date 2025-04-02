import { useState, useEffect, useCallback, useRef } from 'react';
import { Ship } from '@entities/ship/model/type';

const SHIPS_PER_PAGE = 12;

export const useShipPagination = (ships: Ship[], filterAndSortShips: (ships: Ship[]) => Ship[]) => {
  const [displayedShips, setDisplayedShips] = useState<Ship[]>([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    const filteredAndSortedShips = filterAndSortShips(ships);
    setDisplayedShips(filteredAndSortedShips.slice(0, page * SHIPS_PER_PAGE));
  }, [ships, page, filterAndSortShips]);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && ships.length > displayedShips.length) {
      setPage((prev) => prev + 1);
    }
  }, [ships, displayedShips]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    }
  }, [handleObserver]);

  return { displayedShips, loader };
};