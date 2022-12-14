import React from "react";
import { SetDate } from "./date";

const Article = ({ display_date, headlines = '', promo_items = {} }) => {
  const { basic: { url = "" } = {} } = promo_items;

  return (
    <>
      <article className="mod-caja-nota lugares w-100-mobile">
        <section id="" className="cont-figure">
          <a href="/" className="figure">
            <picture id="" className="content-pic picture">
              <img src={url} alt="" className="content-img" />
            </picture>
          </a>
        </section>
        <div className="mod-caja-nota__descrip">
          <h2 className="com-title-acu">
            <a href="/">
              <b>{headlines.basic}</b> que tiene de escudo al Che Guevara y
              donde izan la bandera de Cuba
            </a>
          </h2>
          <SetDate className="com-date" date={display_date} />
        </div>
      </article>
    </>
  );
};

export { Article };
