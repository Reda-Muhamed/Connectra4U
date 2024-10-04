import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import UserInfoCardInteraction from "./UserInfoCardInteraction";
import EditUserInfo from "../EditUserInfo";

export default async function UserInfoCard({ user }: { user: User }) {
  const {
    bio,
    city,
    live,
    school,
    faculty,
    work,
    linkedin,
    github,
    createdAt,
  } = user || {};
  const formattedDate = createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const { userId: currentUserId } = auth();

  if (currentUserId) {
    const blockRes = await prisma.blockedUser.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id,
      },
    });

    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);
    const followRes = await prisma.follow.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });

    followRes ? (isFollowing = true) : (isFollowing = false);
    const followReqRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });

    followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
  }
  return (
    <div className=" flex flex-col gap-4 p-4  bg-dark-3 rounded-lg shadow-lg text-sm overflow-auto custom-scrollbar">
      {/* top */}

      <h3 className="text-gray-200 text-lg font-medium">User Info</h3>

   {  bio && <div className="flex items-center gap-6  ">
        {/* Bio */}
        <span className="text-gray-200 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#4f4dcb"
              d="M13.5 4A1.5 1.5 0 0 0 12 5.5A1.5 1.5 0 0 0 13.5 7A1.5 1.5 0 0 0 15 5.5A1.5 1.5 0 0 0 13.5 4m-.36 4.77c-1.19.1-4.44 2.69-4.44 2.69c-.2.15-.14.14.02.42c.16.27.14.29.33.16c.2-.13.53-.34 1.08-.68c2.12-1.36.34 1.78-.57 7.07c-.36 2.62 2 1.27 2.61.87c.6-.39 2.21-1.5 2.37-1.61c.22-.15.06-.27-.11-.52c-.12-.17-.24-.05-.24-.05c-.65.43-1.84 1.33-2 .76c-.19-.57 1.03-4.48 1.7-7.17c.11-.64.41-2.04-.75-1.94"
            />
          </svg>
        </span>

        <p className="text-light-2">{bio} </p>
      </div>}
      {school && (
        <div className="flex items-center gap-3">
          <Image
            src="/assets/icons/school.svg"
            alt="school"
            width={25}
            height={25}
            className="w-7 h-7"
          />
          <p className="text-gray-200">
            Studied at{" "}
            <a
              href="school.com"
              className="font-medium hover:underline hover:text-light-2"
              target="_blank"
            >
              {school}
            </a>
          </p>
        </div>
      )}
      {faculty && (
        <div className="flex items-center gap-3">
          <Image
            src="/assets/icons/graduate.svg"
            alt="school"
            width={25}
            height={25}
            className="w-7 h-7"
          />
          <p className="text-gray-200">
            Studied at{" "}
            <a
              href="school.com"
              className="font-medium hover:underline hover:text-light-2"
              target="_blank"
            >
              {faculty}{" "}
            </a>
          </p>
        </div>
      )}
      {live && (
        <div className="flex items-center gap-3">
          <Image
            src="/assets/icons/homeicon.svg"
            alt="school"
            width={25}
            height={25}
            className="w-7 h-6"
          />
          <p className="text-gray-200">
            Lives in{" "}
            <a
              href="school.com"
              className="font-medium hover:underline hover:text-light-2"
              target="_blank"
            >
              {live}
            </a>
          </p>
        </div>
      )}
      {city && (
        <div className="flex items-center gap-3">
          <Image
            src="/assets/icons/lives.svg"
            alt="school"
            width={25}
            height={25}
            className="w-7 h-6"
          />
          <p className="text-gray-200">
            From{" "}
            <a
              href="school.com"
              className="font-medium hover:underline hover:text-light-2"
              target="_blank"
            >
              {city}
            </a>
          </p>
        </div>
      )}

      <div className="  flex flex-col gap-4">
        {linkedin && (
          <div className="flex items-center gap-3">
            <Image
              src="/assets/icons/linkedin.svg"
              alt="link"
              width={22}
              height={22}
              className="w-6 h-6"
            />
            <a
              href={linkedin}
              className="hover:underline text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </div>
        )}
        {github && (
          <div className="flex items-center gap-3">
            <Image
              src="/assets/icons/github.svg"
              alt="link"
              width={22}
              height={22}
              className="w-6 h-6"
            />
            <a
              href={github}
              className="hover:underline text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </div>
        )}
        {work && (
          <div className="flex items-center gap-3">
            <Image
              src="/assets/icons/work.svg"
              alt="link"
              width={22}
              height={22}
              className="w-6 h-6"
            />
            <span className="text-light-2">{work}</span>
          </div>
        )}
      </div>
      <span className="font-medium text-light-2 ">
        joined at {formattedDate}
      </span>

      {currentUserId && currentUserId !== user.id ? (
        <UserInfoCardInteraction
          userId={user.id}
         
          isUserBlocked={isUserBlocked}
          isFollowing={isFollowing}
          isFollowingSent={isFollowingSent}
        />
      ):<EditUserInfo/>}
    </div>
  );
}
