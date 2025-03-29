export interface ShipIcon {
    large: string;
    medium?: string;
  }
  
  export interface ShipType {
    name: string;
    title: string;
    icons: {
      default: string;
    };
  }
  
  export interface ShipNation {
    name: string;
    title: string;
    color: string;
    icons: {
      small: string;
      medium: string;
      large: string;
    };
  }
  
  export interface Ship {
    title: string;
    description: string;
    icons: ShipIcon;
    level: number;
    type: ShipType;
    nation: ShipNation;
  }
  
  export interface VehiclesQueryResponse {
    vehicles: Ship[];
  }
  