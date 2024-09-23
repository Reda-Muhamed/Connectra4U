import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <div className="flex-1 ">
      <div className="flex flex-col items-center gap-4 py-2 px-2 md:px-8 ">
        <Stories />
        <AddPost />
        <Feed />
      </div>
    </div>
    
  );
}
