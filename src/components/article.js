import React from "react";

const Article = ({ _id, display_date, headlines, promo_items = {}, taxonomy }) => {
  const { basic: { url = "" } = {} } = promo_items;

  return (
    <>
      <article className="single-article">
        {/* <img alt="articulo" src={promo_items.basic.url}/> */}
        <img alt="images" src={url} className="images" />

        <div className="article-info">
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
