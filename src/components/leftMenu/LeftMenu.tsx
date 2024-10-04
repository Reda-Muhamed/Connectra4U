import { sidebarLinks } from "@/lib/constants";
import { INavLink } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Spinner from "../Spinner";
import { Button } from "../ui/button";
import ProfileCard from "./ProfileCard";
import Ad from "../Ad";
import Logout from "./Logout";

export default function LeftMenu({ type }: { type: "home" | "profile" }) {
  return (
    <div className="flex flex-col gap-6 ">
      <nav className="px-3 py-4 bg-dark-2  rounded-md  mr-px">
        <div className="flex flex-col gap-6">
          {type !== "profile" && <ProfileCard />}{" "}
          <ul className="flex flex-col gap-6 ">
            {sidebarLinks.map((item: INavLink) => {
              const isActive = type === item.route;
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

        <Logout />
      </nav>
      <div className="mr-px mb-24">
        <Ad />
      </div>
    </div>
  );
}
