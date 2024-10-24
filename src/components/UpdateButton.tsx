"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import Spinner from "./Spinner";

const UpdateButton = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="shad-button_primary whitespace-nowrap"
      disabled={pending}
    >
      {pending ? <Spinner /> : children}
    </Button>
  );
};

export default UpdateButton;
