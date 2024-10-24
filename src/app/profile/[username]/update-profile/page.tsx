import UpdateProfileClient from "@/components/UpdateProfileClient";
import prisma from "@/lib/client";
import React from "react";

export default async function page({
  params,
}: {
  params: { username: string };
}) {
  const username = params.username;

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  return <UpdateProfileClient user={user}/>;
}
