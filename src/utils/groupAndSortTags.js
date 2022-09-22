function groupAndSortTags(articles = []) {
  const tags = articles
    .map((article) => {
      return article.taxonomy.tags;
    })
    .flat();

  function groupTags(array) {
    return array.reduce((acc, curr) => {
      const key = curr.text;

      if (!acc.some((position) => position.text === key)) {
        acc.push({ ...curr, count: 0 });
      }

      acc[acc.findIndex((el) => el.text === key)].count += 1;

      return acc;
    }, []);
  }

  let groupedTags = groupTags(tags);

  const sortedTags = groupedTags
    .sort((a, b) => b.count - a.count)
    .splice(0, 10);

  return sortedTags;
}

export { groupAndSortTags };
