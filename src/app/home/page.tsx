import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <Container className="text-black min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl font-semibold">Welcome to Ed3Hub</h1>
        <p>A person will land here who is authenticated</p>
      </div>
    </Container>
  )
}
