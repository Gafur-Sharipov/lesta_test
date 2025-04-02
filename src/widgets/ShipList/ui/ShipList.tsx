import React from "react";
import { useShips } from "@entities/ship/api/shipApi";
import { ShipCard } from "@entities/ship/ui/ShipCard";
import { useShipFilters } from "@features/ship-list/lib/useShipFilters";
import { nationTranslations, classTranslations } from "@shared/constants/translations";
import styles from "./ShipList.module.css";
import { useShipPagination } from "@features/ship-list/lib/useShipPagination";

const ShipList: React.FC = () => {
  const { loading, error, data } = useShips();
  const {
    levelFilter,
    setLevelFilter,
    nationFilter,
    setNationFilter,
    classFilter,
    setClassFilter,
    sortOrder,
    handleSortChange,
    filterAndSortShips
  } = useShipFilters();

  const ships = data?.vehicles || [];
  const { displayedShips, loader } = useShipPagination(ships, filterAndSortShips);

  if (loading) return <p className={styles.loading}>Загрузка...</p>;
  if (error) return <p className={styles.error}>Ошибка: {error.message}</p>;

  const levels = [...new Set(ships.map(ship => ship.level))].sort((a, b) => a - b);
  const nations = [...new Set(ships.map(ship => ship.nation.name))];
  const classes = [...new Set(ships.map(ship => ship.type.name))];

  return (
    <div className={styles.shipListContainer}>
      <h2 className={styles.title}>Список кораблей</h2>
      <div className={styles.filters}>
        <select 
          className={styles.filterSelect}
          onChange={(e) => setLevelFilter(e.target.value ? Number(e.target.value) : null)}
          value={levelFilter || ""}
        >
          <option value="">Все уровни</option>
          {levels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
        <select 
          className={styles.filterSelect}
          onChange={(e) => setNationFilter(e.target.value || null)}
          value={nationFilter || ""}
        >
          <option value="">Все нации</option>
          {nations.map(nation => (
            <option key={nation} value={nation}>{nationTranslations[nation] || nation}</option>
          ))}
        </select>
        <select 
          className={styles.filterSelect}
          onChange={(e) => setClassFilter(e.target.value || null)}
          value={classFilter || ""}
        >
          <option value="">Все классы</option>
          {classes.map(shipClass => (
            <option key={shipClass} value={shipClass}>{classTranslations[shipClass] || shipClass}</option>
          ))}
        </select>
        <button className={styles.sortButton} onClick={handleSortChange}>
          Сортировка по уровню: {sortOrder === 'none' ? 'Нет' : sortOrder === 'asc' ? '↑' : '↓'}
        </button>
      </div>
      <div className={styles.shipGrid}>
        {displayedShips.map((ship) => (
          <ShipCard key={ship.title} ship={ship} />
        ))}
      </div>
      <div ref={loader} className={styles.loader}>
        {ships.length > displayedShips.length && "Загрузка..."}
      </div>
    </div>
  );
};

export default ShipList;