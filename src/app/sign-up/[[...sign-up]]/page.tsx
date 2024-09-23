import Spinner from "@/components/Spinner";
import { ClerkLoaded, ClerkLoading, SignIn, SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Link from "next/link";

export default function Page() {
  const Styles = {
    optInput: {
      border: "1px solid white",
      backgroundColor: "#eaeaea",
      opacity: "0.8",
      color: "black",
      zIndex: "10",
    },
    resendButton: {
      color: "#ffffff",
      zIndex: "10",
    },
  };
  return (
    <div className="flex h-screen items-center justify-between w-full ">
      <ClerkLoaded>
        <div className="text-center flex justify-center flex-col items-center flex-1 ">
          <img src="/assets/images/logo.svg" alt="logo" className="" />

          <SignUp
            appearance={{
              layout: {
                socialButtonsPlacement: "bottom",
                socialButtonsVariant: "iconButton",
              },
              elements: {
                // Card/container styling
                card: "h-[calc(100vh-200px)] text-white w-full p-10 bg-dark-1",
                // Input field and labels
                formFieldInput: "inputStyle",
                formFieldLabel: "labelStyle",
                // OAuth buttons (Google, GitHub, Facebook)
                socialButtons: "flex mb-16",
                socialButtonsIconButton: "w-16",
                socialButtonsProviderIcon: "w-8 h-8",
                socialButtonsBlockButton__google: "googleButtonStyle",
                socialButtonsBlockButton__github: "githubButtonStyle",
                socialButtonsBlockButton__facebook: "facebookButtonStyle",
                dividerLine: "bg-white",
                otpCodeFieldInput: Styles.optInput,
                formResendCodeLink: Styles.resendButton,
                footerActionLink: Styles.resendButton,
                // formFieldErrorText: "mt-4",
                formFieldSuccessText: "mt-4",

                // Submit button
                formButtonPrimary: "submitButtonStyle",

                // Error message styling
                formFieldErrorText: "errorMessageStyle",

                // Header title
                headerTitle: "headerTitleStyle",
                headerSubtitle: "mt-[50px] ",
                formContainer: "",
                // Footer (e.g., Copyright section)
                footer: "hidden",
              },
            }}
          />
          <div className="text-white mt-[-5px]">
            <span className="text-light-2 text-md">
              Already have an Account ?{" "}
            </span>
            <Link
              href="/sign-in"
              className="text-light-2 text-sm hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </ClerkLoaded>
      <ClerkLoading>
        <div className="flex items-center justify-center mx-auto">
          <Spinner />
        </div>
      </ClerkLoading>
      <img
        src="/assets/images/newside1.jpg"
        alt="logo"
        className="hidden lg:block object-cover w-1/2 bg-no-repeat h-screen"
      />
    </div>
  );
}
