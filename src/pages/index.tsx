import { Hero } from "@/components/hero";
import { ProfileForm } from "@/components/profileForm";
import { Features } from "@/components/features";
import { AppDownload } from "@/components/appDownload";
import { Footer } from "@/components/footer";

const App = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("profile-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Hero onGetStarted={scrollToForm} />
      <Features />
      <ProfileForm />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default App;
