import { Tab } from "@/components/tab";

export default function CategoryTab() {
  const categoryList = [
    "business",
    "entertainment",
    "technology",
    "science",
    "sports",
    "politics",
    "health",
    "education",
    "travel",
    "food",
    "games",
    "other",
  ];

  return (
    <nav className="overflow-x-auto rounded-lg bg-gray-800 p-4 text-white">
      <ul className="flex gap-4">
        <li>
          <Tab name="Home" path="/" />
        </li>
        {categoryList.map((category, index) => (
          <li key={index}>
            <Tab
              name={category.charAt(0).toUpperCase() + category.slice(1)}
              path={`/category/${category}`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
