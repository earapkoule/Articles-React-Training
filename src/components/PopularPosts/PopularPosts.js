import React, { useEffect, useState } from "react";

const PopularPosts = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(
    function () {
      async function fetchData() {
        const urlSafe = new URL("https://dev.to/api/articles");
        const params = { top: "" };
        if (props.tag) params.tag = props.tag;
        urlSafe.search = new URLSearchParams(params).toString();

        setTimeout(async () => {
          const response = await fetch(urlSafe);
          const responseJson = await response.json();
          setArticles(responseJson);
          console.log("articles", responseJson);
        }, 5000);
      }
      fetchData();
    },
    [props.tag]
  );
  return (
    <div>
      {articles.length > 0 ? articles[0].title : "articles not available"}
    </div>
  );
};

export default PopularPosts;
