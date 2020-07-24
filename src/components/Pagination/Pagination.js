import React from "react";
import styles from "./Pagination.module.css";

function Pagination({ results = {}, onClick }) {
  const { queries = {} } = results;

  const numberOfButtons = new Array(4).fill(0);

  const onPageChange = (page) => {
    const { request = [] } = queries;
    const query = request[0];
    if (query) {
      const currentPage = Math.ceil(query.startIndex / query.count);
      if (currentPage === page) {
        return;
      }
    }
    if (typeof onClick === "function") {
      onClick(page);
    }
  };

  return (
    <div className={styles.main}>
      {numberOfButtons.map((n, i) => {
        return (
          <button key={i} onClick={(e) => onPageChange(i + 1)}>
            {i + 1}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
