import { timeSpentSince } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Comment as CommentType, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type WrittenCommentClientProps = CommentType & { user: User };

export default function Comment({
  comment,
}: {
  comment: WrittenCommentClientProps;
}) {
  const user = useAuth();
  // console.log(user)
  return (
    <div className="flex items-start gap-4">
      {/* Avatar */}
      <Link href={`/profile/${comment.user.username}`}>
        <Image
          width={30}
          height={30}
          src={comment.user.avatar || "/assets/icons/profile-placeholder.svg"}
          alt="user pic
           "
          className="min-[150px]:w-8 min-[150px]:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 rounded-full  "
        />
      </Link>
      {/* Comment */}
      <div className="flex-1 flex flex-col ">
        <p className="text-md text-light-1 ">{comment.content}</p>
        <div className="flex items-center gap-4 mt-2 text-[#e1dcdc]  text-xs ">
          <span className="hover:underline cursor-pointer">
            {timeSpentSince(new Date(comment.createdAt))}
          </span>
          <span className="hover:underline cursor-pointer">Like</span>
          <span className="hover:underline cursor-pointer ">Reply</span>
        </div>
      </div>
      {/* Icons */}
      {user.userId === comment.user.id && (
        <div className="w-10 h-6 rounded-3xl flex items-center justify-center cursor-pointer hover:bg-dark-4">
          <Image
            width={19}
            height={19}
            src="/assets/icons/dots.svg"
            alt="dots icon
           "
            className="min-[150px]:w-5 min-[150px]:h-5 md:w-6 md:h-6  rounded-full  "
          />
        </div>
      )}
    </div>
  );
}
