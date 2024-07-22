"use client";
import React from "react";
import { SearchBar } from "./searchBar";
import { Newspaper } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./themeToggle";

export const Navbar = () => {
  return (
    <div className="mx-2 my-2 flex flex-row items-center justify-between px-2">
      <Link href="/">
        <div className="flex flex-row items-center">
          <Newspaper />
          <h1 className="px-2 text-2xl font-semibold">News</h1>
        </div>
      </Link>
      <SearchBar />
      <ThemeToggle />
    </div>
  );
};
