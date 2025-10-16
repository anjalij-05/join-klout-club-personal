import { Award } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
              <Award className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Klout Club</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Klout Club. All rights reserved. Empowering professional growth through thought leadership.
          </p>
        </div>
      </div>
    </footer>
  );
};
