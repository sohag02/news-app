import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Image from "next/image";

export const Article = ({ title, description, image }: { title: string; description: string; image: string }) => {
  return (
    <Card className="flex flex-row items-center justify-between my-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <Image
      className="rounded-3xl p-4"
        src={image}
        alt={title}
        width={200}
        height={200}
      />
    </Card>
  );
};
