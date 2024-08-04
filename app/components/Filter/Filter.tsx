"use client";
import React from "react";
import { useState, useEffect } from "react";
import { IFilter } from "../Types";
import styles from "./Filter.module.css";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

const Filter: React.FC<IFilter> = ({
  setFilteredData,
  data,
  filteredregion,
  setFilteredregion,
  setCurrentPage,
}): JSX.Element => {
  const [openSelect, setOpenSelect] = useState(false);

  useEffect(() => {
    if ((!filteredregion || filteredregion == "all") && data) {
      setFilteredData(data);
    } else if (filteredregion && filteredregion !== "all" && data) {
      const newfilteredData = data.filter(
        (item) => item.region.toLowerCase() === filteredregion.toLowerCase()
      );
      setFilteredData(newfilteredData);
    } else {
      setFilteredData(data);
    }
  }, [filteredregion, data, setFilteredData]);

  function regionFilter(e: React.MouseEvent<HTMLButtonElement>) {
    //e.preventDefault;
    if (filteredregion !== (e.target as HTMLButtonElement).value) {
      setFilteredData(data);
    }
    const newregion = (e.target as HTMLButtonElement).value;
    if (newregion) {
      setFilteredregion(newregion);
      setCurrentPage(1);
    }
  }
  return (
    <div
      className={styles.filterContainer}
      onMouseOver={() => {
        setOpenSelect(true);
      }}
      onMouseOut={() => {
        setOpenSelect(false);
      }}
    >
      <div
        className={styles.filter}
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
      >
        {filteredregion !== "" &&
        filteredregion !== undefined &&
        filteredregion !== null ? (
          `${
            filteredregion.charAt(0).toUpperCase() +
            filteredregion.slice(1).toLowerCase()
          }`
        ) : (
          <span>
            Filter by Region{" "}
            {!openSelect ? (
              <VscChevronUp className={styles.filterArrow} />
            ) : (
              <VscChevronDown className={styles.filterArrow} />
            )}
          </span>
        )}
      </div>
      {openSelect && (
        <div className={styles.filterList}>
          <button value="all" onClick={(e) => regionFilter(e)}>
            All
          </button>
          <button value="africa" onClick={(e) => regionFilter(e)}>
            Africas
          </button>
          <button value="americas" onClick={(e) => regionFilter(e)}>
            America
          </button>
          <button value="asia" onClick={(e) => regionFilter(e)}>
            Asia
          </button>
          <button value="europe" onClick={(e) => regionFilter(e)}>
            Europe
          </button>
          <button value="oceania" onClick={(e) => regionFilter(e)}>
            Oceania
          </button>
          <button value="antarctic" onClick={(e) => regionFilter(e)}>
            Antarctic
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
