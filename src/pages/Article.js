import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const name = useParams();
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold mb-6 text-grey-900">
        This is {name.name} Article
      </h1>
    </div>
  );
};

export default Article;
