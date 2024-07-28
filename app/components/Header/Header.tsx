"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useTheme } from "../../Context/ThemeContext";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = (): JSX.Element => {
  const { toggleTheme, theme } = useTheme();
  const [savedTheme, setSavedTheme] = useState<string | null>(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setSavedTheme(theme);
  }, []);
  const cleanSearchParams = () => {
    sessionStorage.setItem("filteredregion", "");
    sessionStorage.setItem("nameFilter", "");
  };
  return (
    <div className={styles.headerDiv}>
      <div className={styles.headerCenterDiv}>
        <Link
          href="/"
          className={styles.headerQuestion}
          onClick={cleanSearchParams}
        >
          <p>Where in the world?</p>
        </Link>
        <p className={styles.mode}>
          <button onClick={toggleTheme} className={styles.buttonMode}>
            {savedTheme !== "light" ? (
              <span>
                <HiOutlineMoon className={styles.iconMode} />
                Dark Mode
              </span>
            ) : (
              <span>
                <HiOutlineSun className={styles.iconMode} />
                Light Mode
              </span>
            )}
          </button>
          <span className={styles.icon}></span>
        </p>
      </div>
    </div>
  );
};

export default Header;
