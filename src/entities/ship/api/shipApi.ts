import { useQuery } from "@apollo/client";
import { GET_VEHICLES } from "./queries";

export const useShips = () => {
  return useQuery(GET_VEHICLES);
};
