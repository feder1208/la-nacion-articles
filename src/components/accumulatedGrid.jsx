import React, { useState, useEffect } from "react";
import { Loading } from "./loading";
import { Article } from "./article";
import { Tags } from "./tags";
import { fetchData } from "../services/fetchData";

const AccumulatedGrid = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = async () => {
    const getData = await fetchData();
    setArticles(await fetchData(getData));
    setLoading(false);
  };

  useEffect(() => {
    data();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  const filterArticles = articles.filter((article) => article.subtype === "7");

  const articlesAccumulated =
    filterArticles.length &&
    filterArticles.map((article) => {
      return <Article key={article._id} {...article} />;
    });

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
        <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
          <Tags className="" articles={articles} />
        </div>
      </div>
      <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
        {articlesAccumulated}
        <div className="transparency"></div>
      </section>
    </div>
  );
};

export { AccumulatedGrid };
