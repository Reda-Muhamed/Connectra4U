import React from "react";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex gap-1 flex-grow">{children}</div>;
}
