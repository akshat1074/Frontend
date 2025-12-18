const Stats = () => {
    const stats = [
      { value: "50K+", label: "Active Students" },
      { value: "500+", label: "Expert Instructors" },
      { value: "1,200+", label: "Online Courses" },
      { value: "95%", label: "Success Rate" },
    ];
  
    return (
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm sm:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Stats;
  