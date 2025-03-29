import React from "react";
import type { Ship } from "@entities/ship/model/type";
import styles from "@entities/ship/ui/ShipCard.module.css";

interface ShipCardProps {
  ship: Ship;
}
console.log(styles);
export const ShipCard: React.FC<ShipCardProps> = ({ ship }) => {
  return (
    <li
      className={`${styles["ship-card"]} ${styles[`ship-card--${ship.type.name}`]}`}
    >
      <img
        className={styles["ship-card__image"]}
        src={ship.icons.large}
        alt={ship.title}
        width="200"
      />
      <h3 className={styles["ship-card__title"]}>{ship.title}</h3>
      <p className={styles["ship-card__description"]}>{ship.description}</p>
    </li>
  );
};
