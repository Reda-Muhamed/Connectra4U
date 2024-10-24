
"use client";
import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { convertFileToUrl } from "@/lib/utils"; // Make sure this function is defined correctly
import Image from "next/image";

type ProfileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
  desc: string;
};

const ProfileUploader = ({
  fieldChange,
  mediaUrl,
  desc,
}: ProfileUploaderProps) => {
  const [fileUrl, setFileUrl] = useState<string>(mediaUrl);

  // Handle file drop
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      if (acceptedFiles.length > 0) {
        const firstFile = acceptedFiles[0]; // Use only the first file for URL
        setFileUrl(convertFileToUrl(firstFile)); // Assuming this function converts a file to a URL
        fieldChange(acceptedFiles); // Pass all files for any further processing
      }
    },
    [fieldChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"], // Accepted image formats
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} className="cursor-pointer" />

      <div className="cursor-pointer flex-center gap-4">
        <Image
          src={
            fileUrl ||
            `${
              desc === "profile"
                ? "/assets/icons/profile.svg"
                : "/assets/icons/cover.svg"
            }`
          }
          alt="image"
          width={96}
          height={96}
          className={`h-24 w-24 object-cover object-top ${
            desc === "cover" ? "rounded-md " : "rounded-full "
          }`}
        />
        <p className="text-primary-500 small-regular md:base-semibold">
          {desc === "profile" ? "Change profile photo" : "Change cover photo"}
        </p>
      </div>
    </div>
  );
};

export default ProfileUploader;
