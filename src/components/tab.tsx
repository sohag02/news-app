"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export const Tab = ({name, path}: {name: string, path: string}) => {
	const pathname = usePathname();
  return (
    <Link href={path}>
      <Button variant={pathname === path ? "active" : "ghost"}>{name}</Button>
    </Link>
  );
};
