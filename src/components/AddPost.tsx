import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function AddPost() {
  const { userId } = auth();
  if (!userId) return;
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  const { avatar, username } = user || {};
  // console.log(user);
  return (
    <div className="p-4 w-full flex flex-col shadow-md  text-sm bg-dark-2 rounded-xl  ">
      <div className="flex-between gap-6">
        <Link href={`/profile/${username}`}>
          <Image
            width={60}
            height={60}
            src={avatar ? avatar : "assets/icons/profile-placeholder.svg"}
            alt="profile
            "
            className="min-[150px]:w-12 min-[150px]:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full  "
          />
        </Link>
        <div className="flex flex-1 gap-4 items-center ">
          {/* text input */}
          <form className="flex flex-1">
            <textarea
              className="text-white cursor-pointer hover:bg-dark-4 bg-dark-3 outline-none flex-1 border-none focus:ring-2 focus:ring-blue-400 p-3 resize-none  rounded-3xl flex-center overflow-scroll scrollbar-hide h-12"
              placeholder={`What's on your mind, ${"Reda"}?`}
              name="desc"
            />
          </form>
        </div>
      </div>
      {/* Post Options */}
      <div className="flex items-center gap-4 md:gap-9 lg:mt-5 mt-4 ml-auto lg:mr-16 sm:mr-10 text-gray-200">
        <div className="flex gap-2 cursor-pointer items-center">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjJlbSIgaGVpZ2h0PSIxLjJlbSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxwYXRoIGZpbGw9IiM0ZjRkY2IiIGQ9Ik04LjgxMyAxMS42MTJjLjQ1Ny0uMzguOTE4LS4zOCAxLjM4Ni4wMTFsLjEwOC4wOThsNC45ODYgNC45ODZsLjA5NC4wODNhMSAxIDAgMCAwIDEuNDAzLTEuNDAzbC0uMDgzLS4wOTRMMTUuNDE1IDE0bC4yOTItLjI5M2wuMTA2LS4wOTVjLjQ1Ny0uMzguOTE4LS4zOCAxLjM4Ni4wMTFsLjEwOC4wOThsNC42NzQgNC42NzVhNCA0IDAgMCAxLTMuNzc1IDMuNTk5TDE4IDIySDZhNCA0IDAgMCAxLTMuOTgtMy42MDNsNi42ODctNi42OXpNMTggMmE0IDQgMCAwIDEgMy45OTUgMy44TDIyIDZ2OS41ODVsLTMuMjkzLTMuMjkybC0uMTUtLjEzN2MtMS4yNTYtMS4wOTUtMi44NS0xLjA5Ny00LjA5Ni0uMDE3bC0uMTU0LjE0bC0uMzA3LjMwNmwtMi4yOTMtMi4yOTJsLS4xNS0uMTM3Yy0xLjI1Ni0xLjA5NS0yLjg1LTEuMDk3LTQuMDk2LS4wMTdsLS4xNTQuMTRMMiAxNS41ODVWNmE0IDQgMCAwIDEgMy44LTMuOTk1TDYgMnptLTIuOTkgNWwtLjEyNy4wMDdhMSAxIDAgMCAwIDAgMS45ODZMMTUgOWwuMTI3LS4wMDdhMSAxIDAgMCAwIDAtMS45ODZ6IiAvPgo8L3N2Zz4="
            width={20}
            height={20}
            alt="add img"
          />
          <span>Photo</span>
        </div>
        <div className="flex gap-2 cursor-pointer items-center">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjJlbSIgaGVpZ2h0PSIxLjJlbSIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KCTxkZWZzPgoJCTxtYXNrIGlkPSJpcFRWaWRlb1R3bzAiPgoJCQk8ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI0Ij4KCQkJCTxwYXRoIGQ9Ik0zOSA2SDlhMyAzIDAgMCAwLTMgM3YzMGEzIDMgMCAwIDAgMyAzaDMwYTMgMyAwIDAgMCAzLTNWOWEzIDMgMCAwIDAtMy0zIiAvPgoJCQkJPHBhdGggZmlsbD0iIzU1NSIgZD0iTTIwLjUgMjh2LTYuMDYybDUuMjUgMy4wM0wzMSAyOGwtNS4yNSAzLjAzMWwtNS4yNSAzLjAzMXoiIC8+CgkJCQk8cGF0aCBkPSJNNiAxNWgzNm0tOS05bC02IDltLTYtOWwtNiA5IiAvPgoJCQk8L2c+CgkJPC9tYXNrPgoJPC9kZWZzPgoJPHBhdGggZmlsbD0iIzRmNGRjYiIgZD0iTTAgMGg0OHY0OEgweiIgbWFzaz0idXJsKCNpcFRWaWRlb1R3bzApIiAvPgo8L3N2Zz4="
            width={20}
            height={20}
            alt="add Video"
          />
          <span>Video</span>
        </div>
        <div className="flex gap-2 cursor-pointer items-center">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjJlbSIgaGVpZ2h0PSIxLjJlbSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxwYXRoIGZpbGw9IiM0ZjRkY2IiIGQ9Ik0yMSA3LjE1YTEuNyAxLjcgMCAwIDAtMS44NS4zbC0yLjE1IDJWOGEzIDMgMCAwIDAtMy0zSDVhMyAzIDAgMCAwLTMgM3Y4YTMgMyAwIDAgMCAzIDNoOWEzIDMgMCAwIDAgMy0zdi0xLjQ1bDIuMTYgMmExLjc0IDEuNzQgMCAwIDAgMS4xNi40NWExLjcgMS43IDAgMCAwIC42OS0uMTVhMS42IDEuNiAwIDAgMCAxLTEuNDhWOC42M0ExLjYgMS42IDAgMCAwIDIxIDcuMTUiIC8+Cjwvc3ZnPg=="
            width={20}
            height={20}
            alt="Live"
          />
          <span>Live</span>
        </div>
        <div className="flex gap-2 cursor-pointer items-center">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjJlbSIgaGVpZ2h0PSIxLjJlbSIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxwYXRoIGZpbGw9IiM0ZjRkY2IiIGQ9Ik0xOCAxMGE4IDggMCAxIDAtMTYgMGE4IDggMCAwIDAgMTYgMG0tNi41LTEuNWExIDEgMCAxIDEgMiAwYTEgMSAwIDAgMS0yIDBtLTUgMGExIDEgMCAxIDEgMiAwYTEgMSAwIDAgMS0yIDBtLjM4OSA0LjAxNUE0IDQgMCAwIDAgMTAgMTRhNCA0IDAgMCAwIDMuMTExLTEuNDg1YS41LjUgMCAxIDEgLjc3OC42MjlBNSA1IDAgMCAxIDEwIDE1YTUgNSAwIDAgMS0zLjg4OS0xLjg1NmEuNS41IDAgMSAxIC43NzgtLjYzIiAvPgo8L3N2Zz4="
            width={20}
            height={20}
            alt="feelings"
          />
          <span>Feelings</span>
        </div>
      </div>

      {/* //////// */}
    </div>
  );
}
