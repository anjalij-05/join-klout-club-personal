import { useState } from "react";
import { Award, TrendingUp } from "lucide-react";

export const ProfileForm = () => {
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

    if (!formData.fullName || !formData.email || !formData.designation) {
      alert("Please fill in all required fields");
      return;
    }

    alert("Profile Created Successfully! 🎉");

    setTimeout(() => {
      alert(
        "Your Thought Leadership Score: 78/100 - You're in the top 25% of professionals in your industry!"
      );
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const FormField = ({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
  }: {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    required?: boolean;
  }) => (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-base font-medium text-gray-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={formData[name as keyof typeof formData]}
        onChange={handleChange}
        required={required}
        className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
      />
    </div>
  );

  return (
    <section
      className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white"
      id="profile-form"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden">
          <div className="space-y-4 text-center pb-8 pt-12 px-6">
            <div className="flex justify-center gap-4 mb-2">
              <div className="p-3 rounded-full bg-purple-100">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="p-3 rounded-full bg-indigo-100">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Create Your Professional Profile
            </h2>
            <p className="text-lg text-gray-600">
              Complete your profile to unlock your thought leadership score
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200">
              <span className="text-sm font-medium text-purple-600">
                ✨ First 3 views completely free
              </span>
            </div>
          </div>

          <div className="px-6 pb-12">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Full Name"
                  name="fullName"
                  placeholder="John Doe"
                  required
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                />
                <FormField
                  label="Designation"
                  name="designation"
                  placeholder="Senior Product Manager"
                  required
                />
                <FormField
                  label="Education"
                  name="education"
                  placeholder="MBA, Harvard Business School"
                />
                <FormField
                  label="Total Experience"
                  name="experience"
                  placeholder="8 years"
                />
                <FormField
                  label="LinkedIn URL"
                  name="linkedinUrl"
                  type="url"
                  placeholder="https://linkedin.com/in/johndoe"
                />
                <FormField
                  label="Twitter URL"
                  name="twitterUrl"
                  type="url"
                  placeholder="https://twitter.com/johndoe"
                />
                <FormField
                  label="Skills"
                  name="skills"
                  placeholder="Product Strategy, Team Leadership, Analytics"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-lg font-semibold h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] mt-8"
              >
                Calculate My Thought Leadership Score
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

