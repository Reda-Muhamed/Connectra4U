"use client";
import { ProfileValidation } from "@/lib/validation";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import ProfileUploader from "@/components/ProfileUploader";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";

import { updateProfile } from "@/lib/actions";
import Spinner from "./Spinner";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import UpdateButton from "./UpdateButton";

export default function UpdateProfileClient({ user }: { user?: User }) {
  const [cover, setCover] = useState<any>(user?.cover);
  const [avatar, setAvatar] = useState<any>(user?.avatar);
  const [isLoading, setIsLoading] = useState<any>(false);
  const router = useRouter();
  const { toast } = useToast();

  const {
    name,
    surname,
    username,
    school,
    work,
    faculty,
    bio,
    city,
    linkedin,
    github,
  } = user || {};

  async function handleUpdate(value: z.infer<typeof ProfileValidation>) {
    try {
      // console.log("avatar url", avatar.url);
      // console.log("cover url", cover.url);
      setIsLoading(true);
      const { success, error } = await updateProfile(value, cover, avatar);
      setIsLoading(false);
      if (success) {
        toast({
          title: "Profile Updated Successfully",
        });
        router.push(`/profile/${username}`);
        router.refresh();
      }
      if (error) {
        toast({
          title: "Error Updating Profile",
          description: error,
        });
      }
    } catch (err) {
      console.error("Failed to update profile", err);
    }
  }
  const form = useForm<z.infer<typeof ProfileValidation>>({
    resolver: zodResolver(ProfileValidation),
    defaultValues: {
      cover: [],
      avatar: [],
      username: username || "",
      name: name || "",
      surname: surname || "",
      city: city || "",
      school: school || "",
      faculty: faculty || "",
      work: work || "",
      github: github || "",
      linkedin: linkedin || "",
      bio: bio || "",
    },
  });
  if (!user) return;
  if (isLoading)
    return (
      <div className="flex flex-1 overflow-auto  custom-scrollbar">
        <div className=" relative h-fit common-container top-[30%]">
          <Spinner />
        </div>
      </div>
    );
  return (
    <div className="flex flex-1 overflow-auto h-[calc(100vh-60px)] custom-scrollbar">
      <div className="common-container">
        <div className="flex-start gap-3 justify-start w-full max-w-5xl">
          <Image
            src="/assets/icons/edit.svg"
            width={36}
            height={36}
            alt="edit"
            className="invert-white"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full text-light-1">
            Edit Profile
          </h2>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleUpdate)}
            className="flex flex-col gap-7 w-full mt-4 max-w-5xl"
          >
            <div className="flex justify-around gap-8">
              {/* // used cloudinary to store pics :)) */}
              <FormField
                control={form.control}
                name="cover"
                render={({ field }) => (
                  <FormItem className="flex">
                    <FormControl>
                      <CldUploadWidget
                        uploadPreset="social"
                        onSuccess={(result) => {
                          setCover(result.info?.url);
                          // console.log(result);
                        }}
                      >
                        {({ open }) => {
                          return (
                            <div
                              onClick={() => open()}
                              className=" cursor-pointer flex-center gap-4"
                            >
                              <Image
                                src={cover || "/assets/icons/cover.svg"}
                                alt="image"
                                width={96}
                                height={96}
                                className={`h-24 w-24 object-cover object-top 
                              
                                    "rounded-full `}
                              />
                              <p className="text-primary-500 small-regular md:base-semibold">
                                Change Cover photo
                              </p>
                            </div>
                          );
                        }}
                      </CldUploadWidget>
                    </FormControl>
                    <FormMessage className="shad-form_message" />
                  </FormItem>
                )}
              />
              {/* // used cloudinary to store pics :)) */}
              <FormField
                control={form.control}
                name="avatar"
                render={({ field }) => (
                  <FormItem className="flex">
                    <FormControl>
                      <CldUploadWidget
                        uploadPreset="social"
                        onSuccess={(result) => setAvatar(result.info?.url)}
                      >
                        {({ open }) => {
                          return (
                            <div
                              onClick={() => open()}
                              className=" cursor-pointer flex-center gap-4"
                            >
                              <Image
                                src={avatar || "/assets/icons/profile.svg"}
                                alt="image"
                                width={96}
                                height={96}
                                className={`h-24 w-24 object-cover object-top 
                              
                                    "rounded-full `}
                              />
                              <p className="text-primary-500 small-regular md:base-semibold">
                                Change profile photo
                              </p>
                            </div>
                          );
                        }}
                      </CldUploadWidget>
                    </FormControl>
                    <FormMessage className="shad-form_message" />
                  </FormItem>
                )}
              />
            </div>

            {/* Other form fields */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="shad-input text-white"
                      {...field}
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Name</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Surname</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">City</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="school"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">School</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="faculty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Faculty</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="work"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Work</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">LinkedIn</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="github"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Github</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      className="shad-textarea custom-scrollbar text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="shad-form_message" />
                </FormItem>
              )}
            />

            <div className="flex gap-4 items-center justify-end">
              <Button
                type="button"
                className="shad-button_dark_4"
                onClick={() => {
                  router.back();
                }}
              >
                Cancel
              </Button>
              <UpdateButton>Update</UpdateButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
