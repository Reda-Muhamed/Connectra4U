import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FriendRequestList from "./FriendRequestList";

export default async function FriendRequest() {
  const { userId } = auth();
  if (!userId) return null;
  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });
  if (requests.length === 0) return null;

  return (
    // handle the hight depend on the number of requests && handle the see all function
    // i make it scroll bar also
    <div className="h-fit  flex flex-col gap-4 p-4  bg-dark-3 rounded-lg shadow-lg text-sm overflow-auto custom-scrollbar">
      {/* top */}
      <div className="flex-between">
        <span className="text-gray-200 ">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs hover:underline">
          See all
        </Link>
      </div>
      {/* User */}
     <FriendRequestList requests={requests}/>
    </div>   
  );
}
