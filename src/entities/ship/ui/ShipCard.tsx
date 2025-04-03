import React from "react";
import type { Ship } from "@entities/ship/model/type";
import styles from "@entities/ship/ui/ShipCard.module.css";

interface ShipCardProps {
  ship: Ship;
}

export const ShipCard: React.FC<ShipCardProps> = ({ ship }) => {
  return (
    <li className={`${styles["ship-card"]} ${styles[`ship-card--${ship.type.name}`]}`}>
      <div className={styles["ship-card__image-container"]}>
        <img
          className={styles["ship-card__image"]}
          src={ship.icons.large}
          alt={ship.title}
          loading="lazy"
        />
        <div className={styles["ship-card__level"]}>Уровень: {ship.level}</div>
      </div>
      <div className={styles["ship-card__content"]}>
        <h3 className={styles["ship-card__title"]}>{ship.title}</h3>
        <div className={styles["ship-card__info"]}>
          <span className={styles["ship-card__nation"]}>
            <img 
              src={ship.nation.icons.small} 
              className={styles["ship-card__nation-icon"]}
            />
            {ship.nation.title}
          </span>
          <span className={styles["ship-card__type"]}>
            <img 
              src={ship.type.icons.default} 
              alt={ship.type.title} 
              className={styles["ship-card__type-icon"]}
            />
            {ship.type.title}
          </span>
        </div>
        <p className={styles["ship-card__description"]}>{ship.description}</p>
      </div>
    </li>
  );
};
