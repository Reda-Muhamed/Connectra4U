import React, { Suspense, use } from "react";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import FriendsCard from "./FriendsCard";
import Ad from "../Ad";
import FriendRequest from "./FriendRequest";
import Birthdays from "./Birthdays";
import { User } from "@prisma/client";
import Spinner from "../Spinner";
import { auth } from "@clerk/nextjs/server";

export default function RightMenu({ user }: { user?: User }) {
  if (user)
    return (
      <div className="min-h-max flex  flex-col gap-6  mx-4">
        <Suspense fallback={<Spinner />}>
          <UserInfoCard user={user} />
        </Suspense>
        <FriendRequest />
        <Suspense fallback={<Spinner />}>
          <UserMediaCard user={user} />
        </Suspense>
        <FriendsCard user={user} />
      </div>
    );
  return (
    <div className="min-h-max flex flex-col gap-6  mx-4">
      <Ad />
      <FriendRequest  />
      <Birthdays />
    </div>
  );
}
