import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The web development course completely changed my career. I went from zero coding knowledge to landing my dream job as a frontend developer in just 6 months!",
      name: "David Wilson",
      role: "Frontend Developer",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    },
    {
      quote:
        "Amazing UI/UX course! The instructor explained complex concepts in such a simple way. Now I'm confidently designing products for major clients.",
      name: "Lisa Anderson",
      role: "UX Designer",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    },
    {
      quote:
        "Best investment I've made! The data science course gave me the skills to transition into AI. The projects were incredibly practical and relevant.",
      name: "James Martinez",
      role: "Data Analyst",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of successful learners who transformed their careers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-100" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-foreground leading-relaxed italic">
                "{"testimonial.quote"}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
