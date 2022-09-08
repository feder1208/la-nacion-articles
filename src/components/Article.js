import React from "react";

const Article = (props) => {
  return (
    <>
      <article className="single-article">
        <img alt="articulo" />

        <div className="article-info">
          <h2>{props.article.headlines.basic}</h2>
          <h4>Article date</h4>
        </div>
      </article>
      <h4>article</h4>
    </>
  );
};

export { Article };
