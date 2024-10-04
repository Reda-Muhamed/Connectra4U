import React from "react";

export default function PostStats() {
  return (
    <div className={`flex justify-between mx-3 items-center z-20 `}>
      <div className="flex gap-2 mr-5">
        <img
          src={`${"/assets/icons/liked.svg"}`}
          alt="like"
          width={25}
          height={25}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium text-light-2">{2}</p>
      </div>
      <div className="flex items-center mr-5 justify-center gap-2 w-[55px] h-[30px] rounded-lg hover:bg-dark-4 ">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjJlbSIgaGVpZ2h0PSIxLjJlbSIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxwYXRoIGZpbGw9IiM0ZjRkY2IiIGQ9Ik0xMC40OCAxMy44NDJoNC45MmMuODk2IDAgMS42LS43MTMgMS42LTEuNTY2di02LjcxQzE3IDQuNzEzIDE2LjI5NiA0IDE1LjQgNEg0LjZDMy43MDQgNCAzIDQuNzEzIDMgNS41NjZ2Ni43MWMwIC44NTMuNzA0IDEuNTY2IDEuNiAxLjU2NmgxLjZWMTdoLjAwM2wuMDAyLS4wMDF6TTYuOCAxNy44MDNhMS4wMSAxLjAxIDAgMCAxLTEuNC0uMTk5YS45OC45OCAwIDAgMS0uMTk5LS41OXYtMi4xNzJoLS42Yy0xLjQzNiAwLTIuNi0xLjE0OS0yLjYtMi41NjZ2LTYuNzFDMiA0LjE0OSAzLjE2NCAzIDQuNiAzaDEwLjhDMTYuODM2IDMgMTggNC4xNDkgMTggNS41NjZ2Ni43MWMwIDEuNDE4LTEuMTY0IDIuNTY2LTIuNiAyLjU2NmgtNC41OXoiIC8+Cjwvc3ZnPg=="
          alt="comment"
          width={25}
          height={25}
          className="cursor-pointer"
        />
        <p className="small-medium text-light-2 lg:base-medium">{2}</p>
      </div>

      <div className="flex items-center justify-center gap-2 w-[55px] h-[30px] rounded-lg hover:bg-dark-4 ">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjJlbSIgaGVpZ2h0PSIxLjJlbSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxwYXRoIGZpbGw9IiM0ZjRkY2IiIGQ9Im0yMS43MDcgMTEuMjkzbC04LThBMSAxIDAgMCAwIDEyIDR2My41NDVBMTEuMDE1IDExLjAxNSAwIDAgMCAyIDE4LjVWMjBhMSAxIDAgMCAwIDEuNzg0LjYyYTExLjQ2IDExLjQ2IDAgMCAxIDcuODg3LTQuMDQ5Yy4wNS0uMDA2LjE3NS0uMDE2LjMyOS0uMDI2VjIwYTEgMSAwIDAgMCAxLjcwNy43MDdsOC04YTEgMSAwIDAgMCAwLTEuNDE0TTE0IDE3LjU4NlYxNS41YTEgMSAwIDAgMC0xLTFjLS4yNTUgMC0xLjI5Ni4wNS0xLjU2Mi4wODVhMTQgMTQgMCAwIDAtNy4zODYgMi45NDhBOS4wMTMgOS4wMTMgMCAwIDEgMTMgOS41YTEgMSAwIDAgMCAxLTFWNi40MTRMMTkuNTg2IDEyWiIgLz4KPC9zdmc+"
          alt="share"
          width={23}
          height={23}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium text-light-2">{2}</p>
      </div>
    </div>
  );
}