import { Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple-50 border border-purple-200">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-purple-600">
            Measure Your Professional Impact
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
          Discover Your{" "}
          <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Thought Leadership
          </span>{" "}
          <span className="text-gray-900">Score</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Join Klout Club and unlock insights into your professional influence.
          Compare yourself with industry leaders and business professionals from
          your city.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            Get Your Score Now
          </button>
          
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <span className="text-xl">🎁</span>
            <span>
              <span className="font-semibold text-gray-900">Free access</span> to
              your first 3 score views
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

