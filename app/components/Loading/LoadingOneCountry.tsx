"use client";
import { CgSpinner } from "react-icons/cg";
import styles from "./LoadingOneCountry.module.css";
export default function LoadingOneCountry() {
  return (
    <div className={styles.cardOneCountry}>
      <CgSpinner className={styles.spinner} />
    </div>
  );
}
