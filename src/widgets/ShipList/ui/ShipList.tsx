import { useShips } from "@entities/ship/api/shipApi";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ShipCard } from "@entities/ship/ui/ShipCard";
import styles from "./ShipList.module.css"

const SHIPS_PER_PAGE = 10;
const ShipList: React.FC = () => {
  const { loading, error, data } = useShips();
  const [displayedShips, setDisplayedShips] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    if (data && data.vehicles) {
      setDisplayedShips(data.vehicles.slice(0, page * SHIPS_PER_PAGE));
    }
  }, [data, page]);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && data && displayedShips.length < data.vehicles.length) {
      setPage((prev) => prev + 1);
    }
  }, [data, displayedShips]);

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
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div>
      <h2>Список кораблей</h2>
      <ul className={styles["ship-list"]}>
        {displayedShips.map((ship) => (
          <ShipCard key={ship.title} ship={ship} />
        ))}
      </ul>
      <div ref={loader}>
        {displayedShips.length < (data?.vehicles?.length || 0) && "Загрузка..."}
      </div>
    </div>
  );
};

export default ShipList;
