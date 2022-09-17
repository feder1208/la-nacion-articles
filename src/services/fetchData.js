
const fetchData = async () => {
    const url = "https://api-test-ln.herokuapp.com/articles";
    const response = await fetch(url);
    const data = await response.json();
    const { articles = [] } = data || {};
    return articles
}

export {fetchData}