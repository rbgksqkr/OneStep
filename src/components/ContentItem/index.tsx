import React from "react";
import styles from "./ContentItem.module.css";

const ContentItem = (props: any) => {
  const { content } = props;
  return (
    <div className={styles.content}>
      <p>{content.data}</p>
    </div>
  );
};

export default ContentItem;
