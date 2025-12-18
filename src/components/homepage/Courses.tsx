import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/b93c3b4ba7-e6d262df4d849c43430f.png",
      category: "Development",
      rating: "4.9",
      reviews: "2.4k",
      title: "Complete Web Development Bootcamp",
      description:
        "Master HTML, CSS, JavaScript, React and build real-world projects.",
      instructor: {
        name: "John Smith",
        avatar:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      },
      price: "$89",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/620af3fda3-4171be31550b79881e0e.png",
      category: "Design",
      rating: "4.8",
      reviews: "1.8k",
      title: "UI/UX Design Masterclass",
      description:
        "Learn design thinking, Figma, prototyping and create stunning interfaces.",
      instructor: {
        name: "Sarah Johnson",
        avatar:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      },
      price: "$79",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/6998e592dd-4ccd9b81f3ed80256d86.png",
      category: "Data Science",
      rating: "4.9",
      reviews: "3.2k",
      title: "Python for Data Science & ML",
      description:
        "Master Python, NumPy, Pandas and build ML models from scratch.",
      instructor: {
        name: "Mike Chen",
        avatar:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
      },
      price: "$99",
    },
  ];

  return (
    <section id="courses" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Popular Courses
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Trending Courses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our most popular courses and start learning today.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-card/90 backdrop-blur-sm">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold">
                    {course.rating}({course.reviews})
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {course.description}
                </p>

                {/* Instructor & Price */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-muted-foreground">
                      {course.instructor.name}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-primary">
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Courses
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
