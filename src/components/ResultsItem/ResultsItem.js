import React from "react";
import styles from "./ResultsItem.module.css";

function ResultsItem({ item }) {
  return (
    <div className={styles.main}>
      <div className={styles.thumb}>Thumb</div>
      <div className={styles.info}>
        <div className={styles.link}>
          <a href={item.link} target="_blank">
            {item.link}
          </a>
        </div>
        <div className={styles.title}>{item.htmlTitle}</div>
        <div className={styles.description}>{item.snippet}</div>
      </div>
    </div>
  );
}

export default ResultsItem;
