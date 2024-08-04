import React from "react";
import styles from "./Pagination.module.css";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { IFlags } from "../Types";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  data: IFlags[] | null | undefined;
}
const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  data,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      {data && (
        <div className={styles.paginationDiv}>
          <button
            title="back"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.buttonBackNext}
          >
            <IoArrowBackOutline />
          </button>
          <div className={styles.pagesDiv}>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  disabled={currentPage === page}
                  className={styles.buttonPage}
                  title="next"
                >
                  {page}
                </button>
              )
            )}
          </div>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={styles.buttonBackNext}
          >
            <IoArrowForwardOutline />
          </button>
        </div>
      )}
    </>
  );
};
export default Pagination;
/*
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  disabled={currentPage === page}
                  className={styles.buttonPage}
                >
                  {page}
                </button>
              )
            )}

            */
/*
  const buttonsToShow = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
    currentPage + 3,
  ];
  const buttonsToShowW = buttonsToShow.filter(
    (button) => button >= 1 && button <= totalPages
  );
            {currentPage > 3 && <p className={styles.dots}>...</p>}
            {buttonsToShowW.map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                disabled={currentPage === page}
                className={styles.buttonPage}
              >
                {page}
              </button>
            ))}
            {currentPage + 3 < totalPages && <p className={styles.dots}>...</p>}
            */
