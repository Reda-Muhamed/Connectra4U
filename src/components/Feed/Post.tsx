import { timeSpentSince } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import PostStats from "./PostStats";
import AddComment from "./AddComment";
import WrittenComments from "./WrittenComments";
import { Comment, Post as PostType, User } from "@prisma/client";
type FeedPostType = PostType & { user: User } & {
  likes: [{ userId: string }];
} & {
  comments: [Comment];
};
export default function Post({
  post,
  currentUser,
}: {
  post: FeedPostType;
  currentUser: User;
}) {
  // console.log(post);
  return (
    <div className="post-card mb-[95px] shadow-lg">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link href={`/profile/idmi`}>
            <img
              src={post.user.avatar || "/assets/icons/profile-placeholder.svg"}
              className="rounded-full xs:w-10 md:w-12 xs:h-10 h-10 w-10 md:h-12"
            />
          </Link>
          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {post.user.name ? post.user.name : post.user.username}
            </p>
            <div className=" flex-center gap-2 text-light-2">
              <p className="subtle-semibold lg:small-regular">
                {timeSpentSince(post.createdAt)}
              </p>
            </div>
          </div>
        </div>
        <Link href={`update-post/q444444`} className={``}>
          <img src="/assets/icons/edit.svg" width={20} height={20} />
        </Link>
      </div>

      <div className="small-medium lg:base-medium py-5 text-light-1">
        <p className="text-wrap break-words"> {post.desc}</p>
      </div>

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt="post image"
          className="post-card_img mb-3"
        />
      )}

      <div className="w-full h-px bg-gray-900 my-2 mb-3" />
      <PostStats post={post} />
      <div className="w-full h-px bg-gray-900 my-3 " />
      <WrittenComments postId={post.id} currentUser={currentUser} />
      <AddComment postId={post.id} currentUser={currentUser} />
    </div>
  );
}
