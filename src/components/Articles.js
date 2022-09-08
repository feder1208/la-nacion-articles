import React from "react";
import { Article } from "./Article";

const Articles = ({ articles }) => {
  console.log(articles, "en articles");
  // console.log(typeof articles, "en articles");
  // const keys = Object.keys(articles);
  // console.log(keys);

  // const mapTitles = articles.map((article) => {
  //   return article.headlines.basic;
  // });
  // console.log(mapTitles, "maptitles en articles");
  const getArticlesValues = Object.values(articles).map((article) => {
    return article;
  });

  // getArticlesValues.map((article) => {
  //   return console.log(article._id, "con id?");
  // });
  return (
    <section>
      <div className="title">
        <h2>Acumulado Grilla</h2>
        <div className="underline"></div>
      </div>
      <div>{(articles = getArticlesValues)}</div>
    </section>
  );
};

export { Articles };
