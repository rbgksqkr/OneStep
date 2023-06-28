import React from "react";
import styles from "./ContentItem.module.css";

const ContentItem = (props: any) => {
  const { content } = props;
  return (
    <div className={styles.content}>
      <p>기록용 {content}</p>
    </div>
  );
};

export default ContentItem;
