import { Button } from "@/components/ui/button"
import { CheckCircle, CheckSquare, EyeIcon } from "lucide-react"
import Image from "next/image"
import { CourseCard } from "@/components/card/CourseCard"
import Link from "next/link"

interface HomeProps {
  userName: string
}

const ongoingCourses = [
  { imageSrc: "/home/ongoing-courses/1.svg", title: "Intro to Web3 & Blockchain Basics", instructor: "Sandra Jones", status: "Finished", views: "12k" },
  { imageSrc: "/home/ongoing-courses/2.svg", title: "Tokenomics: Designing Crypto Assets", instructor: "Tori Simone", status: "40%", views: "19.5k" },
  { imageSrc: "/home/ongoing-courses/3.svg", title: "Smart Contract Development", instructor: "Scott Daniel", status: "Finished", views: "18.9k" },
]

const recommendedCourses = [
  { imageSrc: "/home/recommended-courses/1.svg", title: "Advanced Smart Contract Development", instructor: "John Doe", status: "In Progress", views: "8k" },
  { imageSrc: "/home/recommended-courses/2.svg", title: "Web3 Identity & Decentralized Authentication", instructor: "Sandra Jones", views: "12k" },
  { imageSrc: "/home/recommended-courses/3.svg", title: "Building dApps with Solidity", instructor: "Tori Simone", views: "19.5k" },
]

export default function Home() {
  return (
    <div className="flex flex-col mt-28 space-y-10">

      {/* User Welcome Section */}
      <div className="space-y-1 font-poppins">
        <h1 className="text-2xl">Welcome, <span className="font-bold">Jonas May</span> 👋</h1>
        <p className="text-lg">Start your journey into blockchain, NFTs, DAOs, and more.</p>
      </div>

      {/* Banner Section */}
      <div className="h-[456px]  bg-primary-tint rounded-xl grid grid-cols-[2fr_1fr] overflow-hidden">
        <div className=" flex flex-col px-20 justify-around font-poppins">
          <div className="h-[218] w-[582] flex flex-col justify-between items-start">
            <div className="space-y-2 items-start">
              <h1 className="text-5xl font-semibold">Your Future Starts Here</h1>
              <p className="text-2xl">Find courses tailored to your skill level and goals.</p>
            </div>
            <button className="bg-primary-tint font-poppins text-xl border px-6 py-2 rounded-sm border-primary">Get Started</button>
          </div>
        </div>

        <Image
          src="/home/banner.svg"
          alt="Logo"
          width={1400}
          height={1400}
          className="w-full h-full "
        />
      </div>

      {/* Ongoing Courses Section */}
      <div className="flex flex-col space-y-10">
        <div className="flex justify-between items-center font-poppins">
          <h1 className="text-[40px] font-semibold">Ongoing Courses</h1>
          <Link href="#" className="text-xl font-extralight" >See All</Link>
        </div>
        <div className="grid grid-cols-3 gap-15">
          {ongoingCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      {/* Recommended Courses Section */}
      <div className="flex flex-col space-y-10">
        <div className="flex justify-between items-center font-poppins">
          <h1 className="text-[40px] font-semibold">Recommended Courses</h1>
          <Link href="#" className="text-xl font-extralight" >See All</Link>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {recommendedCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

    </div>
  )
}
