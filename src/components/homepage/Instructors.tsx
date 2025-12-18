import { Users, BookOpen } from "lucide-react";

const Instructors = () => {
  const instructors = [
    {
      name: "John Smith",
      role: "Web Developer",
      company: "15+ years experience at Google & Meta",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      students: "45K",
      courses: 28,
    },
    {
      name: "Sarah Johnson",
      role: "UX Designer",
      company: "Lead Designer at Apple & Airbnb",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      students: "38K",
      courses: 22,
    },
    {
      name: "Mike Chen",
      role: "Data Scientist",
      company: "ML Engineer at Amazon & Tesla",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
      students: "52K",
      courses: 35,
    },
    {
      name: "Emma Davis",
      role: "Marketing Expert",
      company: "CMO at Spotify & Netflix",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
      students: "41K",
      courses: 19,
    },
  ];

  return (
    <section id="instructors" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Expert Instructors
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Learn From The Best
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our instructors are industry professionals with years of experience.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="group text-center p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={instructor.avatar}
                alt={instructor.name}
                className="h-24 w-24 rounded-full object-cover mx-auto border-4 border-blue-50 group-hover:border-primary/20 transition-colors duration-300"
              />
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {instructor.name}
              </h3>
              <p className="text-sm text-primary font-medium">{instructor.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {instructor.company}
              </p>

              {/* Stats */}
              <div className="mt-6 flex items-center justify-center gap-6 pt-4 border-t border-border">
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold">{instructor.students}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold">{instructor.courses}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
