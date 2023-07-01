import React from "react";
import styles from "./ContentItem.module.css";

const ContentItem = (props: any) => {
  const { content } = props;
  return (
    <div className={styles.content}>
      <div>{content.data}</div>
      <div>{content.createdAt}</div>
    </div>
  );
};

export default ContentItem;
