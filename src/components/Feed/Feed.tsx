import React, { useState } from "react";
import Post from "./Post";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

export default async function Feed({ username }: { username?: string }) {
  const { userId } = auth();
  const user = auth();
  if (!user?.userId) return;
  const currentUser = await prisma.user.findFirst({
    where: {
      id: user.userId,
    },
  });
  if (!currentUser) return;

  let posts: any[] = [];
  // const [posts, setPosts] =useState([]);
  if (username) {
    posts = await prisma.post.findMany({
      where: {
        user: {
          username: username,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        comments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  if (!username && userId) {
    const following = await prisma.follow.findMany({
      where: {
        followerId: userId,
      },
      select: {
        followingId: true,
      },
    });
    // console.log('following',following)
    const followingIds = following.map((f) => f.followingId);
    const ids = [userId, ...followingIds];

    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: ids,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        comments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  return (
    <div className="p-4 mb-[90px] w-full flex flex-col shadow-md text-light-1 bg-dark-2 rounded-xl ">
      {posts?.length > 0 ? (
        posts?.map((post) => (
          <Post key={post.id} post={post} currentUser={currentUser} />
        ))
      ) : (
        <div className="text-center">
          <div className="text-white text-lg">NO MORE FOUND</div>
        </div>
      )}
    </div>
  );
}
