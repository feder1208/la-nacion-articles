import React from "react";

const Article = ({ _id, display_date, headlines, promo_items = {} }) => {
  const { basic: { url = "" } = {} } = promo_items;

  return (
    <>
      <article className="single-article">
        {/* <img alt="articulo" src={promo_items.basic.url}/> */}
        <img alt="images" src={url} className="images" />

        <div className="article-info">
          {/* <h2>{props.articles.headlines.basic}</h2> */}
          {/*  <a href={_id} alt={headlines.basic}>
            <img src={promo_items.basic.url} alt='images'/>
          </a> */}
          <h2>
            {headlines.basic}.que tiene de escudo al Che Guevara y donde izan la
            bandera de Cuba
          </h2>

          <h4>{display_date}</h4>
        </div>
      </article>
    </>
  );
};

export { Article };
