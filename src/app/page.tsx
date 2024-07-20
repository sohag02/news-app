"use client";
import CategoryTab from "@/components/categoryTab";
import { Article } from "@/components/article";
import { useEffect, useState } from "react";
import { SearchBar } from "@/components/searchBar";

export default function HomePage() {
  const [articles, setArticles] = useState<unknown[]>([]);

  const getArticles = async (): Promise<unknown[]> => {
    const response = await fetch('/api/toi');
    const data: unknown = await response.json();
    return data.items;
  };


  useEffect(() => {
    getArticles()
      .then((FetchedArticles) => {
        setArticles(FetchedArticles);
      })
      .catch((error) => console.log(error));
  }, []);


  console.log("articles", articles);

  return (
    <div className="container mx-auto px-4">
      <SearchBar />
      <CategoryTab />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {articles?.map((article, index) => (
          <Article
            key={index}
            title={article?.title}
            description={article?.content}
            image={article?.enclosure?.url}
            url={article?.link}
            pub={article?.isoDate}
						source={article?.creator}
          />
        ))}
      </div>
    </div>
  );
}
