"use client";
import { usePathname } from "next/navigation";
import RightMenuClient from "./RightMenuClient";

export default function RightMenu() {
  const pathname = usePathname();
  return <RightMenuClient pathname={pathname} />;
}
