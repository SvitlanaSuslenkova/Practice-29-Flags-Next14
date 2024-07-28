import { IFlags } from "../components/Types";

export const paginate = (
  array: IFlags[],
  pageSize: number,
  pageNumber: number
) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};
