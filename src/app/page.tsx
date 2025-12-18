 import Header from "@/components/homepage/Header";
import Hero from "@/components/homepage/Hero";
import Stats from "@/components/homepage/Stats";
import Features from "@/components/homepage/Features";
import Courses from "@/components/homepage/Courses";
import Instructors from "@/components/homepage/Instructors";
import Testimonials from "@/components/homepage/Testimonials";
import Pricing from "@/components/homepage/Pricing";
import CTA from "@/components/homepage/CTA";
import Footer from "@/components/homepage/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Courses />
        <Instructors />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
