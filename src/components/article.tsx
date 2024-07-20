import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { timeAgo } from "@/lib/getTime";

export const Article = ({
  title,
  description,
  image,
  url,
  pub,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  pub: string;
}) => {
  return (
    <Link href={url}>
      <Card className="my-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="flex-grow">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardFooter>
            {timeAgo(pub)}
          </CardFooter>
        </div>
        <Image
          className="rounded-3xl p-4 w-full sm:w-auto"
          src={image}
          alt={title}
          width={200}
          height={200}
          objectFit="cover"
        />
      </Card>
    </Link>
  );
};
