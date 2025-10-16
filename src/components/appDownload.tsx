import { Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const AppDownload = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <Card className="overflow-hidden border-none shadow-[var(--shadow-premium)]">
          <div className="bg-gradient-to-br from-primary via-accent to-secondary p-12 md:p-16 text-center space-y-8">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                <Smartphone className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                Take Klout Club With You
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Download our mobile app to compare yourself with professionals in your industry, 
                track your growth in real-time, and unlock exclusive networking opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto group"
              >
                Download App
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-primary-foreground/80">
                Available on iOS & Android
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
