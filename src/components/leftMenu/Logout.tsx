"use client";
import React from "react";
import { Button } from "../ui/button";
import Spinner from "../Spinner";

export default function Logout() {
  return (
    <Button
      variant="ghost"
      onClick={() => {}}
      className="shad-button_ghost mt-5 text-light-2"
    >
      {true ? <img src="/assets/icons/logout.svg" /> : <Spinner />}
      <p className="small-medium lg:base-medium ">Logout</p>
    </Button>
  );
}
