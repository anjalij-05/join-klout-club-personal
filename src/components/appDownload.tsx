import { Smartphone, ArrowRight } from "lucide-react";

export const AppDownload = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-12 md:p-16 text-center space-y-8">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white">
                Take Klout Club With You
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Download our mobile app to compare yourself with professionals
                in your industry, track your growth in real-time, and unlock
                exclusive networking opportunities.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="bg-white text-purple-600 hover:bg-gray-50 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group">
                Download App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-white/80">
                Available on iOS & Android
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

