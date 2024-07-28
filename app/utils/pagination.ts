export const paginate = (
  array: number[],
  pageSize: number,
  pageNumber: number
) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};
