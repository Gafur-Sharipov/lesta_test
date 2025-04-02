import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import { Ship } from "@entities/ship/model/type";

class ShipStore {
    ship: Ship[] = [];
    constructor() {
        makeAutoObservable(this);
    }
    getShip() {
        console.log(this.ship)
    }    
}

export const shipStore = new ShipStore();