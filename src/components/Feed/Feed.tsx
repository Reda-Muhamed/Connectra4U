import React from "react";
import Post from "./Post";

export default function Feed() {
  return (
    <div className="p-4 w-full flex flex-col shadow-md  bg-dark-2 rounded-xl ">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
