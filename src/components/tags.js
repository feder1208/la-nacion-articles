import React from "react";

function Tags({ articles }) {
  const filterArticles = articles.filter((article) => article.subtype === "7");

  const tags = filterArticles
    .map((article) => {
      return article.taxonomy.tags;
    })
    .flat();
  // console.log(tags, "en tags");

  function groupTags(array) {
    return array.reduce((acc, curr) => {
      const key = curr.text;

      if (!acc.some(position => position.text === key)) { 
        acc.push({...curr, count: 0});
      }

      acc[acc.findIndex(el => el.text === key)].count += 1;

      return acc;
    }, []);
  }

  let groupedTags = groupTags(tags);
  console.log(groupedTags, "groupedTags");

  const sortedTags = groupedTags.sort((a, b) => b.count - a.count).splice(0, 10);
  console.log(sortedTags);

  return (
    <>
      {sortedTags.map(({text, count, slug}) => {
        return <a key={slug} href='/' >{text} ({count}) </a>
      })}
    </>
  );
}

export { Tags };
