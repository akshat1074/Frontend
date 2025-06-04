import { Container } from "@/components/ui/container";
import Carousel from "@/components/ui/image-carousel";
import Image from "next/image";

const images = [
    { src: "/login/1.svg", alt: "logo 1", title: "Learn, Earn, and Grow with Ed3Hub", description: "Join a blockchain-powered learning platform where education meets innovation" },
    { src: "/login/2.svg", alt: "logo 2", title: "Your Journey Comes with Reward", description: "Join a global network of learners, and earn tokens for completing lessons, challenges, and quizzes." },
    { src: "/login/3.svg", alt: "logo 3", title: "Turn Knowledge into Reward", description: "Complete lessons, earn tokens, and unlock exclusive perks." },
  ];

export default function AuthLayout({ children }: { children: React.ReactNode }) {

return (
  <Container className="grid grid-cols-2 text-dark">

    <div className="border-r border-r-gray-300 justify-center items-center flex flex-col space-y-5">
      <Carousel images={images} interval={1500} />
    </div>

    <div className="flex flex-col justify-center items-center px-10 space-y-4">
        {children}
    </div>
  </Container>
)
}