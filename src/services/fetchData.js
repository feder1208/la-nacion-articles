const url = "https://api-test-ln.herokuapp.com/articles";

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const { articles = [] } = data || {};
  // const { articles = [] } = await response.json();
  console.log(articles, "en fetchData.js");
  return articles;
  // console.log(articles.articles[0].headlines.basic);
  // const mapTitles = articles.articles.map((article) => {
  //   return article.headlines.basic;
  // });
  // console.log(mapTitles, "titulos en app");
};

export { fetchData };
