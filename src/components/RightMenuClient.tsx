import React from "react";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import FriendsCard from "./FriendsCard";
import Ad from "./Ad";
import FriendRequest from "./FriendRequest";
import Birthdays from "./Birthdays";

export default function RightMenuClient({ pathname }: { pathname?: string }) {
  if (pathname?.includes("profile"))
    return (
      <div className="min-h-max flex  flex-col gap-6  mx-4">
        <UserInfoCard />
        <UserMediaCard />
        <FriendsCard />
      </div>
    );
  return (
    <div className="min-h-max flex flex-col gap-6  mx-4">
      <Ad />
      <FriendRequest />

      <Birthdays />
    </div>
  );
}
