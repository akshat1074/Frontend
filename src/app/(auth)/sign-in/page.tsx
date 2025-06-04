"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import EmailVerification from "@/components/EmailVerification";
import React from "react";
import { useRouter } from "next/navigation";
import NewPassword from "@/components/NewPassword";

export default function SignIn() {
  const router = useRouter();
  const [flow, setFlow] = React.useState<"signin" | "forgot" | "signup" | "verify" | "newpassword">("signin");

  // Sign In handler
  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();
    // Redirect to dashboard after sign in
    router.push("/dashboard");
  };

  // Forget Password handler
  const handleForgotPassword = () => {
    setFlow("forgot");
  };

  // Sign Up handler (from link)
  const handleSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    setFlow("signup");
  };

  // OTP Verification handler
  const handleVerify = (otp: string) => {
    if (flow === "forgot") {
      setFlow("newpassword");
    } else if (flow === "signup") {
      // You can add further logic for sign up verification here
      alert("Email verified! You can now sign up.");
      setFlow("signin");
    }
  };

  const handleResend = () => {
    alert("Resend code clicked");
  };

  // New Password handler
  const handleConfirmPassword = (password: string) => {
    alert(`Password set: ${password}`);
    setFlow("signin");
  };

  return (
    <div className="flex flex-col w-full space-y-4 items-center justify-center font-open-sans">
      {flow === "forgot" || flow === "signup" ? (
        <EmailVerification onVerify={handleVerify} onResend={handleResend} />
      ) : flow === "newpassword" ? (
        <NewPassword onConfirm={handleConfirmPassword} />
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
            onSubmit={handleSignIn}
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
            <div className="flex items-center space-x-2 py-2">
              <input
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
              className="w-full rounded-full mt-1"
              variant="normal"
              size="xs"
              type="submit"
            >
              Sign In
            </Button>
            <Button
              className="w-full rounded-full hover:bg-transparent active:bg-transparent active:border-0 p-0 bg-transparent text-primary"
              size="xs"
              type="button"
              onClick={handleForgotPassword}
            >
              Forget Password?
            </Button>
          </form>
          {/* Divider and OAuth */}
          <div className="flex flex-col justify-center items-center w-full">
            <div className="relative w-4/5 h-[1px] bg-black" />
            <h1 className="text-sm bg-secondary px-2 relative top-[-10px]">or continue with</h1>
          </div>
          <div className="flex space-x-3">
            <Image src="/logo/google.svg" alt="google" width={50} height={50} />
            <Image src="/logo/unknown.svg" alt="unknown" width={50} height={50} />
            <Image src="/logo/apple.svg" alt="apple" width={50} height={50} />
          </div>
          {/* Sign-Up Link */}
          <div className="flex flex-col space-y-2 justify-center items-center">
            <p className="text-sm font-open-sans">
              Don't have an account?{" "}
              <a href="#" className="text-primary" onClick={handleSignUp}>
                Sign Up
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
