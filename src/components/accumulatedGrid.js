import React from "react";
import { Article } from "./article";

const AccumulatedGrid = ({ articles = [] }) => {
  console.log(articles, "en articles");
  console.log('hola');

  const getUrls = (articles) => {
    return articles.map(article => {
      return article && article.promo_items && article.promo_items.basic && article.promo_items.basic.url
    })
  }
  console.log('xxxxxxxxxxxxxxxxxx',getUrls(articles))

  const filterArticles = articles.filter(article => article.subtype === "7");

  const articlesAccumulated = filterArticles.length && filterArticles.map((article) => {
    console.log(article, 'en articles')
    return <Article key={article._id} {...article}/>;
  })

  return (
    <section>
      <div className="title">
        <h2>Acumulado Grilla</h2>
        <div className="underline"></div>
      </div>
      <div>
        {/* {articles.length && articles.map((article) => {
          console.log(article, 'en articles')
          return <Article key={article._id} {...article}/>;
        })} */}
        {articlesAccumulated}
      </div>
    </section>
  );
};

export { AccumulatedGrid };
