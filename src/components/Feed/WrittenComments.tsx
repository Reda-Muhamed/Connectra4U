import prisma from "@/lib/client";
import { timeSpentSince } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import WrittenCommentsClient from "./WrittenCommentsClient";
import { auth } from "@clerk/nextjs/server";
import { Prisma, User } from "@prisma/client";

export default async function WrittenComments({
  postId,
  currentUser,
}: {
  postId: number;
  currentUser: User;
}) {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });

  // console.log(currentUser)
  // console.log("comments :   => ", comments[0].content);
  if (comments && currentUser)
    return (
      <WrittenCommentsClient
        comments={comments}
        currentUser={currentUser}
        postId={postId}
      />
    );
  else return <div>No comments yet</div>;
}
