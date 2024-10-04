import prisma from "@/lib/client";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function UserMediaCard({ user }: { user: User }) {
  const postsWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      imageUrl: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div
      className={` flex flex-col gap-4 p-4  bg-dark-3 rounded-lg shadow-lg text-sm overflow-auto custom-scrollbar md:mb-32
      ${
        postsWithMedia.length < 4
          ? "h-48"
          : postsWithMedia.length >= 4
          ? "h-72"
          : "h-32"
      }
      `}
    >
      {/* top */}
      <div className="mb-2">
        <span className="text-gray-200 font-medium">Photos</span>
      </div>
      <div className="flex justify-center flex-wrap gap-3 lg:gap-2 xl:gap-3 text-light-2">
        {postsWithMedia.length
          ? postsWithMedia.map((post) => (
              <div className="relative w-[74px] h-24">
                <Link href="/post/id">
                  <Image
                    src={post.imageUrl!} // the ! is for to sure that this post has an image
                    fill
                    alt="photo"
                    quality={90}
                    className=" object-cover rounded-lg"
                  />
                </Link>
              </div>
            ))
          : "No media Found"}
      </div>
    </div>
  );
}
