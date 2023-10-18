import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TodoWhereInput = {
  id?: StringFilter;
  task?: StringNullableFilter;
};
