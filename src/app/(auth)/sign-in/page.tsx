"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import EmailVerification from "@/components/EmailVerification";
import React from "react";
import { useRouter } from "next/navigation";


export default function SignIn() {
  const router = useRouter();
  const [showVerification, setShowVerification] = React.useState(false);

  const handleForgotPassword = () => {
    setShowVerification(true);
  };

  const handleVerify = (otp: string) => {
    alert(`OTP entered: ${otp}`);
    router.push("/reset-password");
    setTimeout(() => {
      setShowVerification(false);
    }, 0);
  };

  const handleResend = () => {
    alert("Resend code clicked");
  };

  return (
    <div className="flex flex-col w-full space-y-4 items-center justify-center font-open-sans">
      {showVerification ? (
        <EmailVerification onVerify={handleVerify} onResend={handleResend} />
      ) : (
        <>
          {/* Logo and Title */}
          <div className="flex flex-col space-y-2 justify-center items-center">
            <Image
              src="/login/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="object-cover border"
            />
            <div className="space-y-1 flex flex-col justify-center items-center">
              <h1 className="text-2xl font-semibold font-poppins">Welcome Back!</h1>
              <p className="text-sm font-open-sans">Sign in to your account to continue</p>
            </div>
          </div>

          {/* Sign-In Form */}
          <form
            action="#"
            className="w-2/3 space-y-4 py-5"
            onSubmit={(event) => {
              event.preventDefault();
              router.push("/"); // Navigate to home page after successful sign-in
            }}
          >
            <Input
              type="email"
              placeholder="Email"
              label="Email"
              labelClassName="text-sm"
            />
            <Input
              type="password"
              placeholder="Password"
              label="Password"
              labelClassName="text-sm"
              togglePassword
            />
            

            <div className="fle x items-center space-x-2 py-2">
              <Input
                type="checkbox"
                name="remember"
                id="remember"
                className="size-4"
              />
              <label htmlFor="remember" className="text-sm">
                I agree to&nbsp;
                <Link href="/terms-and-condition" className="text-primary">
                  Terms and Conditions
                </Link>
              </label>
            </div>
            <Button
              className="w-full rounded-full mt-1 py-5"
              variant="default"
              size="sm"
              type="submit"
            >
              Sign In
            </Button>
            <Button
              className="w-full rounded-full hover:bg-transparent active:bg-transparent active:border-0 p-0 bg-transparent text-primary"
              size="sm"
              type="button"
              onClick={handleForgotPassword} // Trigger email verification
            >
              Forget Password?
            </Button>
          </form>

          {/* Divider and OAuth */}
          <div className="flex flex-col justify-center items-center w-full">
            <div className="bg-black dark:bg-white" />
            <h1 className="text-sm bg-transparent px-2 relative top-[-10px]">or continue with</h1>
            <div className="bg-black dark:bg-white" />
          </div>
          <div className="flex space-x-3">
            <Image src="/logo/google.svg" alt="google" width={50} height={50} />
            <Image src="/logo/unknown.svg" alt="unknown" width={50} height={50} />
            <Image src="/logo/apple.svg" alt="apple" width={50} height={50} />
          </div>

          {/* Sign-Up Link */}
          <div className="flex flex-col space-y-2 justify-center items-center">
            <p className="text-sm font-open-sans">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
