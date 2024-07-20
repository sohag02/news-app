"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Article } from "@/components/article";
import { SearchBar } from "@/components/searchBar";

export default function SearchPage() {
  const params = useSearchParams();
  const searchTerm = params.get("q");

  const [articles, setArticles] = React.useState([]);

  const getArticles = async () => {
    const response = await fetch("/api/search?q=" + searchTerm);
    const data: unknown = await response.json();
    console.log("data", data);
    return data.articles;
  };

  // useEffect(() => {
  //   getArticles()
  // 	.then((articles) => {
  // 		setArticles(articles)
  // 	})
  // 	.catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    fetch("/api/search?q=" + searchTerm)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setArticles(data.articles);
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);

  console.log("articles", articles);

  return (
    <div className="container mx-auto px-4">
			<SearchBar />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        {articles.map((article, index) => (
          <Article
            key={index}
            title={article?.title}
            description={article?.description}
            image={article?.urlToImage}
            url={article?.url}
            pub={article?.publishedAt}
						source={article?.source?.name}
          />
        ))}
      </div>
    </div>
  );
}
