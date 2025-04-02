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
    icons: {
      large: string;
      medium: string;
    };
    level: number;
    type: {
      name: string;
      title: string;
      icons: {
        default: string;
      };
    };
    nation: {
      name: string;
      title: string;
      color: string;
      icons: {
        small: string;
        medium: string;
        large: string;
      };
    };
  }
  
  export interface VehiclesQueryResponse {
    vehicles: Ship[];
  }
  