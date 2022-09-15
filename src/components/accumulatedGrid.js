import React from "react";
import { Article } from "./article";
import { Tags } from "./tags";

const AccumulatedGrid = ({ articles = [] }) => {
  console.log(articles, "en accum");

  /*  const getUrls = (articles) => {
    return articles.map(article => {
      return article && article.promo_items && article.promo_items.basic && article.promo_items.basic.url
    })
  }
  console.log('xxxxxxxxxxxxxxxxxx',getUrls(articles)) */

  const filterArticles = articles.filter((article) => article.subtype === "7");

  const articlesAccumulated =
    filterArticles.length &&
    filterArticles.map((article) => {
      // console.log(article, 'articulos filtrados')
      return <Article key={article._id} {...article} />;
    });

  // return (
  //   <section>
  //     <div className="title">
  //       <h2>Acumulado Grilla</h2>
  //       <div className="underline"></div>
  //     </div>
  //     <div>
  //       <Tags articles={articles}/>
  //       {articlesAccumulated}
  //     </div>
  //   </section>
  // );
  return (
    <div className="sidebar__main">
      <div className="row">
        <div className="com-titleWithfollow hlp-marginBottom-15">
          <h1 className="com-title-section-xl hlp-marginBottom-40">
            Acumulado Grilla
          </h1>
        </div>
      </div>
      <div className="row">
        <div id="" class="cont_tags com-secondary-tag hlp-marginBottom-20">
          <Tags className="" articles={articles} />
        </div>
      </div>
      <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
        {articlesAccumulated}
        <div class="transparency"></div>
      </section>
    </div>
  );
};

export { AccumulatedGrid };
