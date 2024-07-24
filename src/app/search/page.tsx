"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Article } from "@/components/article";
import { useState } from "react";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

interface Data {
  totalResults: number;
  articles: Article[];
}

export default function SearchPage() {
  const params = useSearchParams();
  const searchTerm = params.get("q");

  const [articles, setArticles] = useState<Article[]>([]);

  const getArticles = async () => {
    const response = await fetch("/api/search?q=" + searchTerm);
    const data = await response.json() as Data
    console.log("data", data);
    return data.articles;
  };

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    })
    .catch((error) => console.log(error));
  }, [searchTerm]);

  // useEffect(() => {
  //   fetch("/api/search?q=" + searchTerm)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("data", data);
  //       setArticles(data.articles);
  //     })
  //     .catch((error) => console.log(error));
  // }, [searchTerm]);

  console.log("articles", articles);

  return (
    <div className="container mx-auto px-4">
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
