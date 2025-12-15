import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";

const Hero = () => {
  const avatars = [
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
  ];

  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Join 50,000+ Active Learners
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Learn Skills for the{" "}
                <span className="gradient-text">Digital Future</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Master in-demand skills with expert-led courses. From coding to
                design, business to marketing - your journey to success starts
                here.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Explore Courses
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="lg">
                <Play className="h-5 w-5 fill-current" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt="User"
                    className="h-10 w-10 rounded-full border-2 border-card object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  4.9/5 from 12k+ reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-float" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7c39301b23-77d83098ceaceff09151.png"
                alt="Modern learning platform dashboard with student studying online courses"
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />
    </section>
  );
};

export default Hero;
