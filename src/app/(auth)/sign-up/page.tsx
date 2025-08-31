"use client";

import EmailVerification from "@/components/EmailVerification";
import RoleRadio from "@/components/RoleRadio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignUp() {
  const router = useRouter();
  const [showVerification, setShowVerification] = React.useState(false);

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    setShowVerification(true);
  };

  const handleVerify = (otp: string) => {
    alert(`OTP entered: ${otp}`);
    router.push("/sign-in");
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
          {/* Logo and title */}
          <div className="flex flex-col space-y-2 justify-center items-center">
            <Image
              src="/login/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="object-cover border"
            />

            <div className="space-y-1 flex flex-col justify-center items-center">
              <h1 className="text-2xl font-semibold font-poppins">Get Started Now</h1>
              <p className="text-sm font-open-sans">Create an account to explore our app</p>
            </div>

          </div>

          {/* Form */}
          <form
            action="#"
            className="w-2/3 space-y-4 py-5"
            onSubmit={handleSignUp}
          >

            <Input type="email" placeholder="Email" label="Email" labelClassName="text-sm" />
            <Input type="password" placeholder="Password" label="Password" labelClassName="text-sm" togglePassword />
            <Input type="password" placeholder="Confirm Password" label="Confirm Password" labelClassName="text-sm" togglePassword />
            
             <RoleRadio/>
            <div className="flex items-center space-x-2 py-2">
              <input type="checkbox" name="remember" id="remember" className="size-4 " />
              <label htmlFor="remember" className="text-sm">
                I agree to&nbsp;
                <Link href="/terms-and-condition" className="">Terms and Conditions</Link>
              </label>
            </div>

            <Button
              className="w-full rounded-full mt-1 py-5"
              variant="default"
              size="sm"
              type="submit"
            >
              Sign Up
            </Button>
          </form>

          {/* Divider */}
          <div className="flex space-x-2 justify-center items-center w-full">
            <div className="bg-black dark:bg-white" />
            <h1 className="text-sm bg-transparent z-1 px-2">or continue with</h1>
            <div className="bg-black dark:bg-white/50" />

          </div>

          {/* OAuth Buttons */}
          <div className="flex space-x-3">
            <Image src="/logo/google.svg" alt="google" width={50} height={50} />
            <Image src="/logo/unknown.svg" alt="apple" width={50} height={50} />
            <Image src="/logo/apple.svg" alt="apple" width={50} height={50} />
          </div>

          {/* Footer */}
          <div className="flex flex-col space-y-2 justify-center items-center">
            <p className="text-sm font-open-sans">Already have an account? <Link href="/sign-in" className="">Sign In</Link></p>
          </div>
        </>
      )}
    </div>
  )
}