import { Connection } from "../types";

export const removeEdgesAndNodes = (array: Connection<any>) => {
  if (!array?.edges) {
    return [];
  }

  return array.edges.map((edge) => edge?.node).filter(Boolean);
};
