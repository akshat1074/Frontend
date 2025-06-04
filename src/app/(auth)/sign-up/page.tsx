import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Carousel from "@/components/ui/image-carousel";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  const images = [
    { src: "/login/1.svg", alt: "logo 1", title: "Learn, Earn, and Grow with Ed3Hub", description: "Join a blockchain-powered learning platform where education meets innovation" },
    { src: "/login/2.svg", alt: "logo 2", title: "Your Journey Comes with Reward", description: "Join a global network of learners, and earn tokens for completing lessons, challenges, and quizzes." },
    { src: "/login/3.svg", alt: "logo 3", title: "Turn Knowledge into Reward", description: "Complete lessons, earn tokens, and unlock exclusive perks." },
  ];
  return (
    <Container className="grid grid-cols-2 text-dark">

      <div className="border-r border-r-gray-300 justify-center items-center flex flex-col space-y-5">
        <Carousel images={images} interval={1500} />
      </div>

      <div className="flex flex-col justify-center items-center px-10 space-y-4">

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
            <h1 className="text-2xl font-poppins font-semibold">Get Started Now</h1>
            <p className="text-sm font-open-sans">Create an account to explore our app</p>
          </div>

        </div>

        {/* Form */}
        <form action="#" className="w-2/3 space-y-4 py-5">

          <Input type="email" placeholder="Email" label="Email" labelClassName="text-sm" />
          <Input type="password" placeholder="Password" label="Password" labelClassName="text-sm" togglePassword />

          <div className="flex items-center space-x-2 py-2">
            <input type="checkbox" name="remember" id="remember" className="size-4 " />
            <label htmlFor="remember" className="text-sm">
              I agree to&nbsp;
              <Link href="/terms-and-condition" className="text-primary">Terms and Conditions</Link>
            </label>
          </div>

          <Button className="w-full rounded-full mt-1" variant="normal" size="xs">Sign Up</Button>
        </form>

        {/* Divider */}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="top-3 relative w-4/5 h-[1px] bg-black" />
          <h1 className="text-sm bg-secondary z-1 font-open-sans px-2">or continue with</h1>
        </div>

        {/* OAuth Buttons */}
        <div className="flex space-x-3">
          <Image src="/logo/google.svg" alt="google" width={50} height={50} />
          <Image src="/logo/unknown.svg" alt="apple" width={50} height={50} />
          <Image src="/logo/apple.svg" alt="apple" width={50} height={50} />
        </div>

        {/* Footer */}
        <div className="absolute bottom-10 flex flex-col space-y-2 justify-center items-center">
          <p className="text-sm font-open-sans">Already have an account? <Link href="/sign-in" className="text-primary">Sign In</Link></p>
        </div>

      </div>
    </Container>
  )
}