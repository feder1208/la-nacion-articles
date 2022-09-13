import React from "react";
import { Article } from "./article";
import { Tags } from "./tags";

const AccumulatedGrid = ({ articles = [] }) => {
  // console.log(articles, "en articles");

 /*  const getUrls = (articles) => {
    return articles.map(article => {
      return article && article.promo_items && article.promo_items.basic && article.promo_items.basic.url
    })
  }
  console.log('xxxxxxxxxxxxxxxxxx',getUrls(articles)) */

  const filterArticles = articles.filter(article => article.subtype === "7");

  const articlesAccumulated = filterArticles.length && filterArticles.map((article) => {
    // console.log(article, 'articulos filtrados')
    return <Article key={article._id} {...article}/>;
  })

  return (
    <section>
      <div className="title">
        <h2>Acumulado Grilla</h2>
        <div className="underline"></div>
      </div>
      <div>
        <Tags articles={articles}/>
        {articlesAccumulated}
      </div>
    </section>
  );
};

export { AccumulatedGrid };
