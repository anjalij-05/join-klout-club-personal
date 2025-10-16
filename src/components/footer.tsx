import { Award } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-200 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600">
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Klout Club</span>
          </div>

          <p className="text-sm text-gray-600 text-center">
            © 2025 Klout Club. All rights reserved. Empowering professional
            growth through thought leadership.
          </p>
        </div>
      </div>
    </footer>
  );
};
