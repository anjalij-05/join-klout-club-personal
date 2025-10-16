import { Users, BarChart3, Target, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: BarChart3,
    title: "Thought Leadership Score",
    description: "Get a comprehensive score based on your professional influence, content quality, and industry engagement.",
  },
  {
    icon: Users,
    title: "Industry Comparison",
    description: "Compare your performance with other business professionals from your industry and city.",
  },
  {
    icon: Target,
    title: "Track Your Growth",
    description: "Monitor your professional development and identify areas to strengthen your thought leadership.",
  },
  {
    icon: Download,
    title: "Mobile App Access",
    description: "Download the Klout Club app to access advanced features, real-time updates, and networking opportunities.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Join <span className="text-primary">Klout Club?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elevate your professional presence and unlock insights into your industry influence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-primary/10 hover:shadow-[var(--shadow-premium)] transition-all duration-300 hover:scale-[1.02]"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
