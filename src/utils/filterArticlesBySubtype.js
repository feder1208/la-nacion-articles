function filterArticlesBySubtype(articles = []) {
    return articles.filter((article) => article.subtype === "7");
}

export {filterArticlesBySubtype}