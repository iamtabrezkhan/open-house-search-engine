import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ onChange }) {
  const handleChange = (e) => {
    const value = e.target.value;
    if (typeof onChange === "function") {
      onChange(value);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.searchContainer}>
        <div className={styles.searchIcon}>S</div>
        <div className={styles.inputContainer}>
          <input placeholder="Search" name="search" onChange={handleChange} />
        </div>
        <div className={styles.cross}>&times;</div>
      </div>
    </div>
  );
}

export default SearchBar;
