import React from "react";
import articles from "./article-content";
import Articles from "../components/Articles";

const ArtilclesList = () => {
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mb-6 text-grey-900">
        Article List
      </h1>
      <div className="container py-4 mx-auto ">
        <div className="flex flex-wrap -m-4">
          <Articles articles={articles} />
        </div>
      </div>
    </>
  );
};

export default ArtilclesList;
