import "./App.css";
import React, { useState, useEffect } from "react";
import { Loading } from "./components/Loading";
// import { AccumulatedGrid } from "./components/accumulatedGrid";
import { AccumulatedGrid } from "./components/accumulatedGrid";
import './components/index.css'
// import {fetchData} from "./services/fetchData"

const url = "https://api-test-ln.herokuapp.com/articles";

function App() {
  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    // setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const { articles = [] } = data || {};
    setArticles(articles);
    // console.log(articles, "en app.js");
    // console.log(articles.articles[0].headlines.basic);
    // const mapTitles = articles.articles.map((article) => {
    //   return article.headlines.basic;
    // });
    // console.log(mapTitles, "titulos en app");
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (loading) {
  //   return (
  //     <main>
  //       <Loading />
  //     </main>
  //   );
  // }

  return <AccumulatedGrid articles={articles} />;
}

export default App;
