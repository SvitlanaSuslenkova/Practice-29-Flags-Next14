import React from "react";
import styles from "./Pagination.module.css";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { IFlags } from "../Types";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  data: IFlags[] | undefined;
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
