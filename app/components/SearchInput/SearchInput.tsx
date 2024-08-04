"use client";
import React from "react";
import { useEffect } from "react";
import { ISearchInput } from "../Types";
import styles from "./SearchInput.module.css";

const SearchInput: React.FC<ISearchInput> = ({
  filteredData,
  placeholder,
  setNamefilteredData,
  nameFilter,
  setNameFilter,
  setCurrentPage,
}): JSX.Element => {
  function countryNameFilter(e: React.ChangeEvent<HTMLInputElement>) {
    //e.preventDefault;
    setNameFilter((e.target as HTMLInputElement).value);
    setCurrentPage(1);
  }
  useEffect(() => {
    if (nameFilter && filteredData) {
      const newfilteredData = filteredData.filter((item) =>
        item.name.common.toLowerCase().includes(nameFilter.toLowerCase())
      );
      setNamefilteredData(newfilteredData);
    }
    if (nameFilter == "") {
      setNamefilteredData(filteredData);
    }
  }, [nameFilter, filteredData, setNamefilteredData]);

  return (
    <input
      id="search"
      className={styles.searchInput}
      type="text"
      placeholder={placeholder}
      onChange={(e) => countryNameFilter(e)}
      value={nameFilter ?? ""}
      maxLength={23}
    ></input>
  );
};
export default SearchInput;
