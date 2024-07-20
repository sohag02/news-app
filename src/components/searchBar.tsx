"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export function SearchBar() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = e.currentTarget.querySelector("input");
    if (!inputElement) return;
    const searchTerm = inputElement.value;
		if (!searchTerm) return;
    router.push(`/search?q=${searchTerm}`);
  };
  return (
    // <div className="my-2 flex w-full max-w-xs flex-col items-center space-y-2 sm:max-w-sm sm:flex-row sm:space-x-2 sm:space-y-0 md:max-w-lg lg:max-w-xl xl:max-w-2xl">
    <form
      onSubmit={handleSubmit}
      className="my-2 flex w-full max-w-xs flex-col items-center space-y-2 sm:max-w-sm sm:flex-row sm:space-x-2 sm:space-y-0 md:max-w-lg lg:max-w-xl xl:max-w-2xl"
    >
      <Input type="text" placeholder="Search.." />
      <Button type="submit">
        <Search className="mr-2 h-4 w-4" /> Search
      </Button>
    </form>
    // </div>
  );
}
