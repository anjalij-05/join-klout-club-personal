import { Users, BarChart3, Target, Download } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Thought Leadership Score",
    description:
      "Get a comprehensive score based on your professional influence, content quality, and industry engagement.",
  },
  {
    icon: Users,
    title: "Industry Comparison",
    description:
      "Compare your performance with other business professionals from your industry and city.",
  },
  {
    icon: Target,
    title: "Track Your Growth",
    description:
      "Monitor your professional development and identify areas to strengthen your thought leadership.",
  },
  {
    icon: Download,
    title: "Mobile App Access",
    description:
      "Download the Klout Club app to access advanced features, real-time updates, and networking opportunities.",
  },
];

export const Features = () => {
  return (
    <section className="py-15 px-4 bg-gray-50">
      <div className=" mx-auto max-w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Join <span className="text-purple-600">Klout Club?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elevate your professional presence and unlock insights into your
            industry influence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-purple-100 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-purple-200"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
