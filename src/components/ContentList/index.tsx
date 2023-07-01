import React from "react";
import Content from "@/components/ContentItem";
import { IContent } from "@/types/content";

const ContentList = (props: any) => {
  const { contents } = props;
  return (
    <>
      {contents.map((content: IContent, idx: number) => (
        <Content key={idx} content={content}></Content>
      ))}
    </>
  );
};

export default ContentList;
