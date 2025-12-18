import {
    Video,
    Award,
    Users,
    Smartphone,
    MessageCircle,
    Infinity,
  } from "lucide-react";
  
  const Features = () => {
    const features = [
      {
        icon: Video,
        title: "HD Video Lessons",
        description:
          "Learn from crystal-clear HD video content with lifetime access to all course materials.",
      },
      {
        icon: Award,
        title: "Verified Certificates",
        description:
          "Earn industry-recognized certificates upon course completion to boost your career.",
      },
      {
        icon: Users,
        title: "Expert Instructors",
        description:
          "Learn directly from industry experts with years of real-world experience.",
      },
      {
        icon: Smartphone,
        title: "Mobile Learning",
        description:
          "Access courses on any device, anytime, anywhere with our mobile-friendly platform.",
      },
      {
        icon: MessageCircle,
        title: "Community Support",
        description:
          "Join a vibrant community of learners and get help whenever you need it.",
      },
      {
        icon: Infinity,
        title: "Lifetime Access",
        description:
          "Pay once and get unlimited lifetime access to all course updates and materials.",
      },
    ];
  
    return (
      <section id="features" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful features designed to accelerate your learning journey and
              help you achieve your goals faster.
            </p>
          </div>
  
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  