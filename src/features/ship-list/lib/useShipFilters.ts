import { useState, useCallback } from 'react';
import { Ship } from '@entities/ship/model/type';

type SortOrder = 'asc' | 'desc' | 'none';

export const useShipFilters = () => {
  const [levelFilter, setLevelFilter] = useState<number | null>(null);
  const [nationFilter, setNationFilter] = useState<string | null>(null);
  const [classFilter, setClassFilter] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('none');

  const filterAndSortShips = useCallback((ships: Ship[]) => {
    let filteredShips = ships.filter(ship => 
      (!levelFilter || ship.level === levelFilter) &&
      (!nationFilter || ship.nation.name === nationFilter) &&
      (!classFilter || ship.type.name === classFilter)
    );

    if (sortOrder !== 'none') {
      filteredShips.sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.level - b.level;
        } else {
          return b.level - a.level;
        }
      });
    }

    return filteredShips;
  }, [levelFilter, nationFilter, classFilter, sortOrder]);

  const handleSortChange = () => {
    setSortOrder(current => {
      if (current === 'none') return 'desc';
      if (current === 'desc') return 'asc';
      return 'none';
    });
  };

  return {
    levelFilter,
    setLevelFilter,
    nationFilter,
    setNationFilter,
    classFilter,
    setClassFilter,
    sortOrder,
    handleSortChange,
    filterAndSortShips
  };
};