import Image from "next/image"

interface CourseCardProps {
  imageSrc: string
  title: string
  instructor: string
  status?: string
  views?: string
}

export function CourseCard({
  imageSrc,
  title,
  instructor,
  status,
  views
}: CourseCardProps) {
  return (
    <div className="h-[640px] w-full rounded-2xl justify-between flex flex-col overflow-hidden shadow-custom">
      <Image
        src={imageSrc}
        alt={title}
        width={1500}
        height={1500}
        className="w-full h-[420px] object-cover"
      />
      <div className="flex flex-col space-y-2 font-poppins h-full p-5">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="flex items-center gap-2">
          <Image src="/icons/profile-circle.svg" alt="Profile" height="100" width="100" className="size-5 dark:invert-100" />
          <p className="text-base">{instructor}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/icons/check.svg" alt="Profile" height="100" width="100" className="size-5" />
          <p className="text-base">{status}</p>
        </div>
        <div className="text-sm flex items-center gap-2">
          <Image src="/icons/eye.svg" alt="Profile" height="100" width="100" className="size-5 dark:invert-100" />
          <p>{views}</p>
        </div>
      </div>
    </div>
  )
} 