import React from "react";

function Tags({ articles }) {
  const filterArticles = articles.filter((article) => article.subtype === "7");

  const tags = filterArticles.map((article) => {
    return article.taxonomy.tags;
  }).flat();
//   console.log(tags, "en tags");



  function groupTags(obj, prop) {

    return obj.reduce((acc, curr) =>  {
    
        
      let key = curr[prop]
  
      if (!acc[key]) {
  
        acc[key] = []
        
  
      }
  
      acc[key].push(curr)
  
      return acc
  
    }, {})
  
  }
  
  let groupedTags = groupTags(tags, 'text')
  
  console.log(groupedTags, 'groupedTags')


 /*  for (let text of tags) {
    console.log(text.text);
    for (let final of text) {
        console.log(final.text);
    } 
  }
 */
  return (
    <>
      <div>tags</div>
    </>
  );
}

export { Tags };
