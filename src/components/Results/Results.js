import React from "react";
import styles from "./Results.module.css";

import ResultsItem from "../ResultsItem/ResultsItem";

function Results({ results }) {
  return (
    <div className={styles.main}>
      {results &&
        results.items.length &&
        results.items.map((item, i) => <ResultsItem item={item} key={i} />)}
    </div>
  );
}

export default Results;
