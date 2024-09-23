"use client";
import { sidebarLinks } from "@/lib/constants";
import { INavLink } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Spinner from "./Spinner";
import { Button } from "./ui/button";
import ProfileCard from "./ProfileCard";
import Ad from "./Ad";

export default function LeftMenu() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-6 ">
      <nav className="px-3 py-4 bg-dark-2  rounded-md  mr-px">
        <div className="flex flex-col gap-6">
          {!pathname.includes("profile") && <ProfileCard />}{" "}
          <ul className="flex flex-col gap-6 ">
            {sidebarLinks.map((item: INavLink) => {
              const isActive = pathname === item.route;
              return (
                <li
                  className={`leftsidebar-link group ${
                    isActive && "bg-primary-500 "
                  }`}
                  key={item.label}
                >
                  <Link
                    href={item.route}
                    className="flex gap-4 items-center p-4"
                  >
                    <img
                      src={item.imgURL}
                      alt="icon"
                      className={`group-hover:invert-white ${
                        isActive && "invert-white"
                      }`}
                    />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Button
          variant="ghost"
          className="shad-button_ghost mt-5 text-light-2"
          onClick={() => {}}
        >
          {true ? <img src="/assets/icons/logout.svg" /> : <Spinner />}
          <p className="small-medium lg:base-medium ">Logout</p>
        </Button>
      </nav>
      <div className="mr-px mb-24">
        <Ad />
      </div>
    </div>
  );
}
