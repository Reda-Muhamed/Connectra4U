import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import FriendRequest from "@/components/rightMenu/FriendRequest";
import RightMenu from "@/components/rightMenu/RightMenu";
import UserInfoCard from "@/components/rightMenu/UserInfoCard";
import UserMediaCard from "@/components/rightMenu/UserMediaCard";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function page({
  params,
}: {
  params: { username: string };
}) {
  const username = params.username;

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          following: true,
          posts: true,
        },
      },
    },
  });

  if (!user) return notFound();

  // const { userId: currentUserId } = auth();
  const { userId: currentUserId } = auth();
  let isBlocked;
  if (currentUserId) {
    const res = await prisma.blockedUser.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });
    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();
  const {
    avatar,
    cover,
    name,
    surname,

    _count,
  } = user || {};

  // console.log(user);
  return (
    <>
      <div className="hidden xl:block xl:w-[260px] h-screen overflow-auto  thin ">
        <LeftMenu type="profile" />
      </div>
      <div className="flex-1 relative overflow-auto thin  h-[calc(100vh-0px)]">
        <div className="w-full text-white bg-[#17171770]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:items-start xs:items-center lg:items-center justify-center ">
              <div className="w-full h-72 relative">
                <Image
                  src={cover ? cover : "/no-cover.webp"}
                  alt=""
                  fill
                  className="rounded-md object-cover"
                />
                <Image
                  src={
                    avatar ? avatar : "/assets/icons/profile-placeholder.svg"
                  }
                  alt=""
                  width={128}
                  height={128}
                  quality={100}
                  className="w-32  h-32 rounded-full absolute lg:right-0 lg:left-0 right-0  m-auto left-0  lg:m-auto -bottom-16 ring-4 ring-primary-600 object-cover
                    
                    
                    "
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-12 mb-4 mx-auto ">
                <h1 className=" lg:ml-0  mt-20 -mb-10 text-2xl font-medium">
                  {name && surname ? name + " " + surname : username}
                </h1>
                <div className="flex gap-6 ">
                  <div className="flex flex-col items-center">
                    <span className="font-medium">{_count.posts}</span>
                    <span className="text-sm">Posts</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-medium">{_count.followers}</span>
                    <span className="text-sm">Followers</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-medium">{_count.following}</span>
                    <span className="text-sm">Following</span>
                  </div>
                </div>
              </div>
            </div>
            {/* buttons */}
            <div className="flex items-center gap-2 lg:mx-auto    mx-auto">
              {currentUserId === user.id ? (
                <>
                  <button className="bg-primary-500 rounded-md px-3  hover:bg-primary-600 text-white py-2">
                    Add Story
                  </button>
                  <Link
                    href={`/profile/${username}/update-profile`}
                    className="bg-primary-500 rounded-md px-3   hover:bg-primary-600 text-white py-2"
                  >
                    Edit Profile
                  </Link>
                  <button className="bg-primary-500 rounded-md px-3   hover:bg-primary-600 text-white py-2">
                    <Image
                      src="/assets/icons/downarrow.svg"
                      alt="down"
                      width={23}
                      height={23}
                      className=""
                    />
                  </button>
                </>
              ) : (
                <>
                  <button className="bg-primary-500 rounded-md px-3   hover:bg-primary-600 text-white py-2">
                    Friend | unFriend
                  </button>
                  <button className="bg-primary-500 rounded-md px-3   hover:bg-primary-600 text-white py-2">
                    message
                  </button>
                </>
              )}
            </div>
            <div className=" flex flex-col-reverse md:flex-row lg:hidden md:flex mx-4 gap-4">
              <div className="flex-1 flex flex-col gap-6">
                <div>
                  <UserMediaCard user={user} />
                </div>
                {user.id === currentUserId && (
                  <div className="md:-mt-32">
                    <FriendRequest />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <UserInfoCard user={user} />
              </div>
            </div>
            <div>
              {/* // give the name for the user to write on it is page  */}
              <AddPost />
            </div>
            <Feed username={username} />
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-[30%] h-screen overflow-scroll custom-scrollbar mt-5">
        <RightMenu user={user} />
      </div>
    </>
  );
}
