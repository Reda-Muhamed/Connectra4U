"use client";
import { addComment } from "@/lib/actions";
import { User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddComment({
  currentUser,
  postId,
}: {
  currentUser: User;
  postId: number;
}) {
  const router = useRouter();
  const [desc, setDesc] = useState("");
  // add comment take postId , content
  const handleAddComment = async () => {
    if (!desc || !postId) return;
    await addComment(postId, desc);
    setDesc("");
    router.refresh();
  };
  return (
    <div className="flex items-center gap-4 mt-4">
      <Image
        width={23}
        height={23}
        src={currentUser?.avatar || "/assets/icons/profile-placeholder.svg"}
        alt="Add comment
            "
        className="min-[150px]:w-8 min-[150px]:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 rounded-full  "
      />
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="text-white  placeholder:text-sm  placeholder:text-start  bg-dark-3 outline-none flex-1 border-none focus:ring-1 focus:ring-blue-400 py-2 px-3  sm:p-3  resize-none  rounded-3xl flex-center overflow-scroll scrollbar-hide xs:h-10  md:h-12"
        placeholder={` Write a comment...`}
      />
      <div className="p-2 hover:bg-dark-4 rounded-full flex items-center justify-center">
        <Image
          width={20}
          height={20}
          src="/assets/icons/send.svg"
          alt="send
            "
          className="min-[150px]:w-6 min-[150px]:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full cursor-pointer  "
          onClick={handleAddComment}
        />
      </div>
    </div>
  );
}
