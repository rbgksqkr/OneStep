import React from "react";
import Content from "@/components/ContentItem";

const ContentList = (props: any) => {
  const { contents } = props;
  return (
    <>
      {contents.map((content: any, idx: number) => (
        <Content key={idx} content={content}></Content>
      ))}
    </>
  );
};

export default ContentList;
