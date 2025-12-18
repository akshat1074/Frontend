import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Ready to Start Learning?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Join thousands of students already learning on ed3hub. Start your
            journey today!
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
