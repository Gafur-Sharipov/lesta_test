import { useShips } from "@entities/ship/api/shipApi";
import React from "react";
import {ShipCard} from "@entities/ship/ui/ShipCard";
import styles from "./ShipList.module.css"

const ShipList: React.FC = () => {
  const { loading, error, data } = useShips();

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div>
      <h2>Список кораблей</h2>
      <ul className={styles["ship-list"]}>
        {data.vehicles.map((ship) => (
          <ShipCard key={`${Math.random()}-${ship.title}`} ship={ship} />
        ))}
      </ul>
    </div>
  );
};

export default ShipList;
