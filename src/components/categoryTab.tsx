"use client";
import { Tab } from "@/components/tab";

export default function CategoryTab() {

  const categroryList = ["business", "entertainment", "technology", "science", "sports", "politics", "health", "education", "travel", "food", "games", "other"];

  return (
    <nav className="flex flex-row gap-4 px-4 py-8 text-white">
      <Tab name="Home" path="/" />
      {
        categroryList.map((category, index) => {
          return <Tab name={category.charAt(0).toUpperCase() + category.slice(1)} path={`/category/${category}`} key={index} />;
        })
      }
    </nav>
  );
}
