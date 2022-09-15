import React, { useState, useEffect } from "react";
import { Loading } from "./components/loading";

import "../src/index.css";
// import {fetchData} from "./services/fetchData"
import { Header } from "./components/header";
import { BannerTop } from "./components/bannerTop";
import { AccumulatedGrid } from "./components/accumulatedGrid";
import { BannerAside } from "./components/bannerAside";
import { Footer } from "./components/footer";

const url = "https://api-test-ln.herokuapp.com/articles";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const { articles = [] } = data || {};
    setArticles(articles);
    setLoading(false);
  };

  // useEffect(() => {
  //   const data = fetchData();
  //   setArticles(data);
  // }, []);
  

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <Header />
      <main>
        <BannerTop />
        <div className="lay-sidebar">
          <AccumulatedGrid articles={articles} />
          <BannerAside />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
