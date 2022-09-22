import React from "react";
import { filterArticlesBySubtype } from "../utils/filterArticlesBySubtype";
import {groupAndSortTags} from "../utils/groupAndSortTags";
 

function Tags({ articles }) {
  const filterArticles = filterArticlesBySubtype(articles);

  const sortedTags = groupAndSortTags(filterArticles);

  return (
    <>
      {sortedTags.map(({ text, count, slug }) => {
        return (
          <a key={slug} href="/">
            {text} ({count}){" "}
          </a>
        );
      })}
    </>
  );
}

export { Tags };
