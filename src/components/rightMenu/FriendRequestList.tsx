"use client";

import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { useOptimistic, useState } from "react";
type RequestWithUser = FollowRequest & { sender: User };

export default function FriendRequestList({
  requests,
}: {
  requests: RequestWithUser[];
}) {
  // console.log(requests);
  const [requestState, setRequestState] = useState(requests);

  const accept = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (err) {
      console.error(err);
    }
  };
  const decline = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await declineFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (err) {
      console.error(err);
    }
  };

  const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => req.id !== value)
  );
  return (
    <div>
      {optimisticRequests.map((req) => (
        <div className="flex-between" key={req.id}>
          <Link href={`/profile/${req.sender.username}`}>
            <div className="flex items-center gap-1">
              <Image
                width={36}
                height={36}
                src={req.sender.avatar!}
                alt="User icon"
                className=" w-9 h-9 object-cover rounded-full  "
              />
              <span className=" ml-2 text-light-2 font-semibold">
                {req.sender.name && req.sender.surname
                  ? req.sender.name + req.sender.surname
                  : req.sender.username}
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Image
              onClick={() => accept(req.id, req.senderId)}
              width={28}
              height={28}
              src="/assets/icons/true.svg"
              alt="yes"
              className=" w-7 h-7 object-cover rounded-full  hover:w-8 hover:h-8 cursor-pointer transition-all duration-200 "
            />
            <Image
              onClick={() => decline(req.id, req.senderId)}
              width={28}
              height={28}
              src="/assets/icons/false.svg"
              alt="yes"
              className=" w-7 h-7  object-cover rounded-full hover:w-8 hover:h-8 cursor-pointer transition-all duration-200 "
            />
          </div>
        </div>
      ))}
    </div>
  );
}
