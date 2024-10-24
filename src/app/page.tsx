import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";
import Stories from "@/components/Stories";

export default async function Home() {
  return (
    <div className="flex flex-grow ">
      {/* Left Menu */}
      <div className="hidden xl:block xl:w-[260px] h-screen overflow-auto  thin ">
        <LeftMenu type="home" />
      </div>
      <div className="flex-1 overflow-auto custom-scrollbar h-[calc(100vh-20px)]">
        <div className=" flex flex-col items-center gap-4 py-2 px-2 md:px-8">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      {/* Right Menu */}
      <div className="hidden lg:block lg:w-[30%] h-screen overflow-auto custom-scrollbar mt-5">
        <RightMenu />
      </div>
    </div>
  );
}
