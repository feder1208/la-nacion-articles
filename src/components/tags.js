import React from 'react'

function Tags({articles}) {

    const mapArticles = articles.map((article) => {
        const {taxonomy: {tags}} = article;
        const {text} = tags;
        // return console.log(text.map(texti => texti.text), 'en tags')
       
      })
   
    // const getTags =  mapArticles.map(tag => tag.text)
    // console.log(getTags);
    return (
        <>
        <div>tags</div>
        {/* <div>{props}</div> */}
        </>
      )
      
  
}

export {Tags}