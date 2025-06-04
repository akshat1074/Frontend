"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full space-y-4 items-center justify-center font-open-sans">
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
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/sign-in");
        }}
      >

        <Input type="email" placeholder="Email" label="Email" labelClassName="text-sm" />
        <Input type="password" placeholder="Password" label="Password" labelClassName="text-sm" togglePassword />
        <Input type="password" placeholder="Confirm Password" label="Confirm Password" labelClassName="text-sm" togglePassword />

        <div className="flex items-center space-x-2 py-2">
          <input type="checkbox" name="remember" id="remember" className="size-4 " />
          <label htmlFor="remember" className="text-sm">
            I agree to&nbsp;
            <Link href="/terms-and-condition" className="text-primary">Terms and Conditions</Link>
          </label>
        </div>

        <Button
          className="w-full rounded-full mt-1"
          variant="normal"
          size="xs"
          type="submit"
        >
          Sign Up
        </Button>
      </form>

      {/* Divider */}
      <div className="flex flex-col justify-center items-center w-full">
        <div className="top-3 relative w-4/5 h-[1px] bg-black" />
        <h1 className="text-sm bg-secondary z-1 px-2">or continue with</h1>
      </div>

      {/* OAuth Buttons */}
      <div className="flex space-x-3">
        <Image src="/logo/google.svg" alt="google" width={50} height={50} />
        <Image src="/logo/unknown.svg" alt="apple" width={50} height={50} />
        <Image src="/logo/apple.svg" alt="apple" width={50} height={50} />
      </div>

      {/* Footer */}
      <div className="flex flex-col space-y-2 justify-center items-center">
        <p className="text-sm font-open-sans">Already have an account? <Link href="/sign-in" className="text-primary">Sign In</Link></p>
      </div>
    </div>
  )
}