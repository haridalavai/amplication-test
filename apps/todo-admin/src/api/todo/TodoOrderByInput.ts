import { SortOrder } from "../../util/SortOrder";

export type TodoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  task?: SortOrder;
  updatedAt?: SortOrder;
};
