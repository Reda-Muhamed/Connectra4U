import { timeSpentSince } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import PostStats from "./PostStats";
import AddComment from "./AddComment";
import WrittenComments from "./WrittenComments";

export default function Post() {
  return (
    <div className="post-card mb-6 shadow-lg">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link href={`/profile/idmi`}>
            <img
              src={
                // post?.creator?.imageUrl ||
                "/assets/icons/profile-placeholder.svg"
              }
              className="rounded-full xs:w-10 md:w-12 xs:h-10 md:h-12"
            />
          </Link>
          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">{"Forma"}</p>
            <div className=" flex-center gap-2 text-light-2">
              <p className="subtle-semibold lg:small-regular">
                {timeSpentSince(new Date("20/01/2022"))}
              </p>
            </div>
          </div>
        </div>
        <Link href={`update-post/q444444`} className={``}>
          <img src="/assets/icons/edit.svg" width={20} height={20} />
        </Link>
      </div>
      <Link href={`/posts/wwwwwwwwwwwwwwwwwwww`}>
        <div className="small-medium lg:base-medium py-5 ">
          <p className="text-wrap break-words"> Caption</p>
        </div>

        <img
          src="/assets/images/newside1.jpg"
          alt="post image"
          className="post-card_img mb-3"
        />
      </Link>
      <div className="w-full h-px bg-gray-900 my-2 mb-3" />
      <PostStats />
      <div className="w-full h-px bg-gray-900 my-3 " />
      <WrittenComments/>
      <AddComment />
    </div>
  );
}
