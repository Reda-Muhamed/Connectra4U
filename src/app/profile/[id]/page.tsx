import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="w-full text-white bg-[#17171770]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-72 relative">
            <Image
              src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              fill
              className="rounded-md object-cover"
            />
            <Image
              src={"/assets/icons/profile-placeholder.svg"}
              alt=""
              width={128}
              height={128}
              className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-primary-600 object-cover"
            />
          </div>
          <h1 className="mt-20 mb-4 text-2xl font-medium">{"REDA Mohamed"}</h1>
          <div className="flex items-center justify-center gap-12 mb-4">
            <div className="flex flex-col items-center">
              <span className="font-medium">{52}</span>
              <span className="text-sm">Posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">{10}</span>
              <span className="text-sm">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">{2}</span>
              <span className="text-sm">Following</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mx-auto ">
          <button className="bg-primary-500 rounded-md px-3  hover:bg-primary-600 text-white py-2">
            Add Story
          </button>
          <button className="bg-primary-500 rounded-md px-3   hover:bg-primary-600 text-white py-2">
            Edit Profile
          </button>
          <button className="bg-primary-500 rounded-md px-3   hover:bg-primary-600 text-white py-2">
            <Image
              src="/assets/icons/downarrow.svg"
              alt="down"
              width={23}
              height={23}
              className=""
            />
          </button>
          {/* <button className="bg-primary-500 rounded-md px-3   hover:bg-primary-600 text-white py-2">
            Friend | unFriend
          </button>
          <button className="bg-primary-500 rounded-md px-3   hover:bg-primary-600 text-white py-2">
            message
          </button> */}
        </div>
        <div>
          {/* // give the name for the user to write on it is page  */}
          <AddPost />
         
        </div>
        <Feed />
      </div>
    </div>
  );
}
