import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for beginners",
      price: "$29",
      period: "/month",
      features: [
        "Access to 100+ courses",
        "HD video quality",
        "Mobile app access",
        "Community support",
      ],
      popular: false,
      buttonVariant: "outline" as const,
    },
    {
      name: "Pro",
      description: "For serious learners",
      price: "$79",
      period: "/month",
      features: [
        "Access to all 1,200+ courses",
        "4K video quality",
        "Offline downloads",
        "Priority support",
        "Certificates included",
      ],
      popular: true,
      buttonVariant: "hero" as const,
    },
    {
      name: "Enterprise",
      description: "For teams & organizations",
      price: "$299",
      period: "/month",
      features: [
        "Unlimited team members",
        "Custom learning paths",
        "Analytics dashboard",
        "Dedicated account manager",
        "API access",
      ],
      popular: false,
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Flexible pricing options to fit your learning goals and budget.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 lg:p-8 rounded-2xl border transition-all duration-300 animate-fade-up ${
                plan.popular
                  ? "bg-card border-primary shadow-hover scale-105 lg:scale-110"
                  : "bg-card border-border shadow-card hover:shadow-hover hover:-translate-y-1"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6 mb-8">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 text-left mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={plan.buttonVariant}
                  size="lg"
                  className="w-full"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
