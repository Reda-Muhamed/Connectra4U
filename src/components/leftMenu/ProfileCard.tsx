import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProfileCard() {
  // const user = currentUser();
  // if (!user) return null;
  const { userId } = auth();
  if (!userId) return;
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });
  const {
    username,
    avatar,
    cover,
    name,
    surname,
    bio,
    city,
    school,
    faculty,
    work,
    linkedin,
    github,
    createdAt,
    _count,
  } = user || {};
  return (
    <div className="p-4  bg-dark-3 rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={cover ? cover : "/no-cover.webp"}
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={avatar ? avatar : "/assets/icons/profile-placeholder.svg"}
          alt=""
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold text-light-1 mt-1">
          {name && surname ? name + " " + surname : username}
        </span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
          </div>
          <span className="text-xs text-gray-500">
            {_count?.followers} Followers
          </span>
        </div>
        <Link href={`/profile/${username}`}>
          <button className="bg-primary-600 hover:bg-primary-500 duration-200 transition-all  text-white text-xs font-medium p-2 rounded-md">
            My Profile
          </button>
        </Link>
      </div>
    </div>
  );
}
