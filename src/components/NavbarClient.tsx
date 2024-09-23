"use client";

import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Spinner from "./Spinner";
import MobileNav from "./MobileNav";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { dark } from "@clerk/themes";
export default function NavbarClient() {
  const path = usePathname();
  console.log(path);
  if (path.includes("/sign-in") || path.includes("/sign-up")) return null;
  return (
    <nav className="sticky top-0 z-50 md:px-0 lg:px-4 bg-dark-2 w-full text-light-2 ">
      {" "}
      <div className=" flex-between py-4 px-5">
        {/* Left */}
        <div className="md:mr-[5%]">
          <Link href="/" className="flex gap-3 items-center ">
            <img
              src="/assets/images/logo.svg"
              className=" py-[5px] "
              width={158}
              height={360}
            />
          </Link>
        </div>
        {/* center */}
        <div className="hidden md:flex gap-4 lg:gap-6 lg:flex-1">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/assets/icons/home.svg"
              alt="home icon"
              width={19}
              height={19}
            />
            <span className="text-sm lg:text-md text-light-2">Home page</span>
          </Link>
          <Link href="/" className="flex gap-2">
            <Image
              src="/assets/icons/friends.svg"
              alt="friends icon"
              width={22}
              height={22}
            />
            <span className="text-sm text-light-2 lg:text-md">Friends</span>
          </Link>
          <Link href="/" className="flex gap-2">
            <Image src="/assets/icons/story.svg" alt="stories icon" width={22} height={22} />
            <span className="text-sm text-light-2 lg:text-md">Stories</span>
          </Link>
        </div>
        {/* //Right  */}
        <div className="flex gap-6 items-center">
          <ClerkLoaded>
            {/* <SignedIn>
              <Button variant="ghost" className="shad-button_ghost">
                <img src="/assets/icons/logout.svg" />
              </Button>
            </SignedIn> */}

            <SignedOut>
              <Link
                href="/sign-in"
                className="mr-[-10px] hidden md:block bg-[#554cd1] py-2 px-4 rounded-sm hover:bg-[#40399a]"
              >
                Sign In
              </Link>
              <span
                className="h-8 w-px hidden md:block mr-[-15px] bg-white"
                aria-hidden="true"
              ></span>
            </SignedOut>
          </ClerkLoaded>
          <ClerkLoading>
            <div className="mr-12">
              <Spinner />
            </div>
          </ClerkLoading>

          <ClerkLoaded>
            <SignedIn>
              <div className="cursor-pointer">
                <Image src="/assets/icons/people.svg" alt="" width={24} height={24} />
              </div>
              <div className="cursor-pointer">
                <Image src="/assets/icons/messages.svg" alt="" width={20} height={20} />
              </div>
              <div className="cursor-pointer">
                <Image src="/assets/icons/notification.svg" alt="" width={20} height={20} />
              </div>
              <UserButton
                appearance={{
                  baseTheme: dark,

                  elements: {
                    userButtonPopoverCard: " top-[80px]",
                    userButtonPopoverActionButton:
                      "text-white hover:bg-[#f1f1f1] hover:text-black",
                    userButtonPopoverMain: "bg-dark-3 text-white ",
                    userButtonPopoverFooter: "hidden",
                    footer: "hidden",
                    page: "bg-dark-3",
                    navbar: "bg-dark-3",
                    footerPagesLink: "hidden",
                    pageScrollBox: "bg-dark-3 !important",
                    scrollBox: "bg-dark-3",
                  },
                }}
              />

              {/* <Link href={`/profile/`} className="flex-center gap-3">
                <img
                  src={"assets/icons/profile-placeholder.svg"}
                  alt="profile"
                  className="h-8 w-8 rounded-full"
                />
              </Link> */}
            </SignedIn>
            <SignedOut>
              <Link
                href="/sign-up"
                className={`${buttonVariants({
                  variant: "ghost",
                })} hidden md:block`}
              >
                Create Account
              </Link>
            </SignedOut>
          </ClerkLoaded>

          <div className="md:hidden ">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
}
