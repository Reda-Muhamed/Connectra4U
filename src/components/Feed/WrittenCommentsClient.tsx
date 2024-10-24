// "use client";

// import { timeSpentSince } from "@/lib/utils";
// import { Comment as CommentType, User } from "@prisma/client";
// import Image from "next/image";
// import { useRef, useState } from "react";
// import Comment from "./Comment";
// import AddComment from "./AddComment";
// import UseRefComponent from "../useRefComponent";
// import { useOnClickOutside } from "@/lib/useClickOutSide";
// import Post from "./Post";

// type WrittenCommentsClientProps = CommentType & { user: User };
// export default function WrittenCommentsClient({
//   comments,
// }: {
//   comments: WrittenCommentsClientProps[];
// }) {
//   const [open, setOpen] = useState(false);
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const commentRef = useRef<HTMLDivElement | null>(null);
//   useOnClickOutside(commentRef, () => {
//     setOpen(false);
//   });
//   return (
//     <>
//       {open && (
//         // <UseRefComponent onClose={() => setOpen(false)}>
//         <>
//           <div
//             ref={commentRef}
//             className="fixed w-[35%] h-[calc(100vh-200px)] overflow-auto thin top-[15%] -translate-x-[50%]  left-[43%] bg-dark-1 rounded-lg  z-50 p-4 pt-6"
//           >
//             {" "}
//             <div className="flex flex-col  mx-3 gap-6">
//               {comments.map((comment) => (
//                 <>
//                   <Comment comment={comment} />
//                   <Comment comment={comment} />
//                   <Comment comment={comment} />
//                   <Comment comment={comment} />
//                   <Comment comment={comment} />
//                   <Comment comment={comment} />
//                   <Comment comment={comment} />
//                   <Comment comment={comment} />
//                   <Comment comment={comment} />
//                   <Comment comment={comment} />
//                   <Comment comment={comment} />
//                   <Comment comment={comment} />
//                   <Comment comment={comment} />
//                   <Comment comment={comment} />
//                   <Comment comment={comment} />
//                 </>
//               ))}
//             </div>
//             <div
//               className="fixed text-xl right-2 top-3 bg-dark-4 hover:bg-red hover:scale-110 transition-all duration-300 flex flex-center rounded-full w-8 h-8 cursor-pointer"
//               onClick={handleClose}
//             >
//               X
//             </div>
//             <div className="sticky h-max top-[100px]  w-full  mb-3">
//               <AddComment />
//             </div>
//           </div>
//           {/* </UseRefComponent> */}
//         </>
//       )}
//       <div onClick={() => setOpen(!open)} className="cursor-pointer">
//         <h2 className=" mt-1 mb-3 ml-[5%] hover:underline  hover:cursor-pointer text-light-3 font-semibold">
//           View more Comments
//         </h2>
//         <Comment comment={comments[0]} />
//       </div>
//     </>
//   );
// }

"use client";

import { Comment as CommentType, User } from "@prisma/client";
import { useRef, useState } from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { useOnClickOutside } from "@/lib/useClickOutSide";

type WrittenCommentsClientProps = CommentType & { user: User };

export default function WrittenCommentsClient({
  comments,
  currentUser,
  postId,
}: {
  comments: WrittenCommentsClientProps[];
  currentUser: User;
  postId: number;
}) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const commentRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(commentRef, () => {
    setOpen(false);
  });

  return (
    <>
      {open && (
        <div
          ref={commentRef}
          className="fixed w-[35%] h-fit min-h-60 max-h-[500px] overflow-auto top-[50%] -translate-y-[50%] -translate-x-[50%] left-[43%] bg-dark-1 rounded-lg z-50 p-4 pt-6 thin"
        >
          <div
            className="flex flex-col mx-3 gap-6"
            style={{ paddingBottom: "60px" }}
          >
            {comments.map((comment) => (
              <>
                <Comment key={comment.id} comment={comment} />
                {/* <Comment key={comment.id} comment={comment} /> 
                <Comment key={comment.id} comment={comment} />
                <Comment key={comment.id} comment={comment} />
                 <Comment key={comment.id} comment={comment} />
               <Comment key={comment.id} comment={comment} />
               <Comment key={comment.id} comment={comment} />
               <Comment key={comment.id} comment={comment} />
               <Comment key={comment.id} comment={comment} />
               <Comment key={comment.id} comment={comment} />
               <Comment key={comment.id} comment={comment} />
               <Comment key={comment.id} comment={comment} /> */}
              </>
            ))}
          </div>

          {/* Sticky button */}
          {/* <div className="sticky  bottom-4 left-4 right-4"> */}
          <div ref={commentRef} className="sticky top-[80%] max-w-full mx-3">
            <AddComment currentUser={currentUser} postId={postId} />
          </div>

          {/* Close button */}
          <div
            className="fixed text-xl right-2 top-3 bg-dark-4 hover:bg-red hover:scale-110 transition-all duration-300 flex flex-center rounded-full w-8 h-8 cursor-pointer"
            onClick={handleClose}
          >
            X
          </div>
        </div>
      )}

      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <h2 className="mt-1 mb-3 ml-[5%] hover:underline hover:cursor-pointer text-light-3 font-semibold">
          View more Comments
        </h2>
        {comments.length > 0 && <Comment comment={comments[0]} />}
      </div>
    </>
  );
}