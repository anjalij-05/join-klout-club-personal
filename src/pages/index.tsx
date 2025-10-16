import { Hero } from "@/components/hero";
import { ProfileForm } from "@/components/profileForm";
import { Features } from "@/components/features";
import { AppDownload } from "@/components/appDownload";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className=" min-h-screen bg-white">
      <Hero />
      <Features />
      <ProfileForm />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Index;
