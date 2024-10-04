"use client";

import { switchBlock, switchFollow } from "@/lib/actions";
import React, { useOptimistic, useState } from "react";

export default function UserInfoCardInteraction({
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent,
  });

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...state,
            following: state.followingRequestSent ? false : state.following,
            followingRequestSent:
              !state.following && !state.followingRequestSent ? true : false,
          }
        : { ...state, blocked: !state.blocked }
  );

  const block = async () => {
    switchOptimisticState("block");

    try {
      await switchBlock(userId);
      // Optimistically update UI before request
      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (err) {
      console.log(err);
      // Optionally: handle error and revert optimistic state
    }
  };
  const follow = async () => {
    switchOptimisticState("follow");

    try {
      await switchFollow(userId);
      // Optimistically update UI before request
      setUserState((prev) => ({
        ...prev,
        followingRequestSent:
          !prev.following && !prev.followingRequestSent ? true : false,
        following: prev.followingRequestSent ? false : prev.following,
      }));
    } catch (err) {
      console.log(err);
      // Optionally: handle error and revert optimistic state
    }
  };

  return (
    <>
      <form action={follow}>
        <button className="w-full py-2 px-3 bg-[#4f4dcb] hover:bg-[#363596] text-light-1 font-medium text-[17px] rounded-xl hover:scale-105 transition-all duration-200">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingRequestSent
            ? "Follow Request Sent"
            : "Follow"}
        </button>
      </form>

      <form action={block} className="flex-between">
        <button className="text-rose-600 ml-auto py-2 px-3 hover:bg-[#e50606] rounded-lg w-fit hover:text-light-1 font-medium">
          {optimisticState.blocked ? "Unblock" : "Block"}
        </button>
      </form>
    </>
  );
}
