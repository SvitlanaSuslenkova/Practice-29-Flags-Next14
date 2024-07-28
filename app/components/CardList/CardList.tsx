"use client";
import { ICardList } from "../Types";
import React from "react";
import ShortCard from "../ShortCard/ShortCard";
import styles from "./CardList.module.css";
import { IFlags } from "../Types";
import { lazy, useState, useEffect } from "react";
import { paginate } from "../../utils/pagination";
const Pagination = lazy(() => import("../Pagination/Pagination"));

const CardList: React.FC<ICardList> = ({
  filteredData,
  namefilteredData,
  nameFilter,
  filteredregion,
  data,
}) => {
  const [paginatedCountries, setPaginatedCountries] = useState<IFlags[]>([]);
  // const [itemsPerPage, setItemsPerPage] = useState(4);
  const itemsPerPage = 12;
  /*const countItemsPerPage = () => {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      setItemsPerPage(12);
    } else if (window.matchMedia("(min-width: 800px)").matches) {
      setItemsPerPage(9);
    } else if (window.matchMedia("(min-width: 500px)").matches) {
      setItemsPerPage(6);
    } else {
      setItemsPerPage(4);
    }
  };

  useEffect(() => {
    countItemsPerPage();

    const handleResize = () => {
      countItemsPerPage();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);*/

  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
    if (nameFilter || filteredregion) setCurrentPage(1);
  }, [nameFilter, filteredregion]);
  useEffect(() => {
    const cPage = sessionStorage.getItem("currentSessionPage");
    if (cPage) {
      setCurrentPage(Number(cPage));
    }
  }, []);

  useEffect(() => {
    if (!data) return;
    const dataToPaginate = namefilteredData
      ? namefilteredData
      : filteredData
      ? filteredData
      : data;

    setPaginatedCountries(paginate(dataToPaginate, itemsPerPage, currentPage));
  }, [
    namefilteredData,
    filteredData,
    data,
    currentPage,
    nameFilter,
    filteredregion,
  ]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("currentSessionPage", page.toString());
  };
  return (
    <>
      <div className={styles.cardList}>
        {paginatedCountries &&
          paginatedCountries.map((country) => (
            <ShortCard
              key={country.name.common}
              nameFilter={nameFilter}
              filteredregion={filteredregion}
              {...country}
            />
          ))}
        {nameFilter && paginatedCountries.length == 0 && (
          <p className={styles.noCountries}>No countries to show...</p>
        )}
      </div>
      <Pagination
        data={data}
        totalItems={
          namefilteredData?.length || filteredData?.length || data?.length || 0
        }
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default CardList;
