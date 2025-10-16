import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";
import { Award, TrendingUp } from "lucide-react";

export const ProfileForm = () => {
//   const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    designation: "",
    education: "",
    experience: "",
    linkedinUrl: "",
    twitterUrl: "",
    skills: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.designation) {
    //   toast({
    //     title: "Missing Information",
    //     description: "Please fill in all required fields",
    //     variant: "destructive",
    //   });
      return;
    }

    // Show success message
    // toast({
    //   title: "Profile Created Successfully! 🎉",
    //   description: "Your thought leadership score is being calculated...",
    // });

    // Simulate score calculation
    setTimeout(() => {
    //   toast({
    //     title: "Your Thought Leadership Score",
    //     description: "Score: 78/100 - You're in the top 25% of professionals in your industry!",
    //   });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 px-4" id="profile-form">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-[var(--shadow-premium)] border-primary/10">
          <CardHeader className="space-y-4 text-center pb-8">
            <div className="flex justify-center gap-4 mb-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="p-3 rounded-full bg-accent/10">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
            </div>
            <CardTitle className="text-3xl md:text-4xl">Create Your Professional Profile</CardTitle>
            <CardDescription className="text-lg">
              Complete your profile to unlock your thought leadership score
            </CardDescription>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mx-auto">
              <span className="text-sm font-medium text-primary">✨ First 3 views completely free</span>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-base">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="designation" className="text-base">
                    Designation <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="designation"
                    name="designation"
                    placeholder="Senior Product Manager"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education" className="text-base">
                    Education
                  </Label>
                  <Input
                    id="education"
                    name="education"
                    placeholder="MBA, Harvard Business School"
                    value={formData.education}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-base">
                    Total Experience
                  </Label>
                  <Input
                    id="experience"
                    name="experience"
                    placeholder="8 years"
                    value={formData.experience}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedinUrl" className="text-base">
                    LinkedIn URL
                  </Label>
                  <Input
                    id="linkedinUrl"
                    name="linkedinUrl"
                    type="url"
                    placeholder="https://linkedin.com/in/johndoe"
                    value={formData.linkedinUrl}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitterUrl" className="text-base">
                    Twitter URL
                  </Label>
                  <Input
                    id="twitterUrl"
                    name="twitterUrl"
                    type="url"
                    placeholder="https://twitter.com/johndoe"
                    value={formData.twitterUrl}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills" className="text-base">
                    Skills
                  </Label>
                  <Input
                    id="skills"
                    name="skills"
                    placeholder="Product Strategy, Team Leadership, Analytics"
                    value={formData.skills}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full text-lg h-14 mt-8"
              >
                Calculate My Thought Leadership Score
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
