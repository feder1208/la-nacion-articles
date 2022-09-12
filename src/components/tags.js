import React from "react";

function Tags({ articles }) {
  const filterArticles = articles.filter((article) => article.subtype === "7");

  const tags = filterArticles.map((article) => {
    return article.taxonomy.tags;
  });
  console.log(tags, "en tags");

  for (let text of tags) {
    console.log(text);
    for (let final of text) {
        console.log(final.text);
    } 
  }

  return (
    <>
      <div>tags</div>
    </>
  );
}

export { Tags };
