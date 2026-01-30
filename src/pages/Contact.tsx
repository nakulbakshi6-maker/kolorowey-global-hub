import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Mail, MapPin, Phone, Users, Zap, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company name is required").max(100, "Company name must be less than 100 characters"),
  jobTitle: z.string().trim().max(100, "Job title must be less than 100 characters").optional(),
  companyType: z.enum(["publisher", "advertiser", "agency", "other"], { required_error: "Please select your company type" }),
  monthlyTraffic: z.string().optional(),
  message: z.string().trim().min(10, "Please provide more details (at least 10 characters)").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const companyTypes = [
  { value: "publisher", label: "Publisher", icon: Building2, description: "I want to monetize my inventory" },
  { value: "advertiser", label: "Advertiser", icon: Zap, description: "I want to run ad campaigns" },
  { value: "agency", label: "Agency", icon: Users, description: "I represent multiple clients" },
  { value: "other", label: "Other", icon: Mail, description: "Partnership or general inquiry" },
];

const trafficOptions = [
  "Under 1M impressions/month",
  "1M - 10M impressions/month",
  "10M - 100M impressions/month",
  "100M - 1B impressions/month",
  "Over 1B impressions/month",
];

const benefits = [
  "Personal onboarding specialist assigned within 24 hours",
  "Custom integration plan tailored to your stack",
  "Transparent pricing with no hidden fees",
  "Dedicated support throughout your journey",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    companyType: undefined,
    monthlyTraffic: "",
    message: "",
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent successfully!",
      description: "Our team will get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'var(--gradient-brand)' }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border-2 border-accent/30 text-accent bg-accent/5 mb-6">
              Get Started
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight mb-6">
              Let's Build Your
              <span className="block gradient-text">AdTech Future</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Whether you're a publisher looking to maximize revenue, an advertiser seeking premium inventory, 
              or an agency managing multiple clients—we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isSubmitted ? (
                <motion.div 
                  className="bg-card rounded-2xl border border-border p-12 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{ background: 'var(--gradient-brand)' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Thank You!</h2>
                  <p className="text-muted-foreground mb-6">
                    Your message has been received. Our team will review your inquiry and 
                    get back to you within 24 hours with next steps.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    In the meantime, feel free to explore our{" "}
                    <a href="/technology" className="text-accent hover:underline">technology</a> or{" "}
                    <a href="/resources" className="text-accent hover:underline">resources</a>.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 md:p-10 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-2">Tell us about yourself</h2>
                    <p className="text-sm text-muted-foreground">All fields marked with * are required</p>
                  </div>

                  {/* Company Type Selection */}
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold">I am a... *</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {companyTypes.map((type) => {
                        const Icon = type.icon;
                        const isSelected = formData.companyType === type.value;
                        return (
                          <motion.button
                            key={type.value}
                            type="button"
                            onClick={() => handleInputChange("companyType", type.value)}
                            className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                              isSelected 
                                ? "border-accent bg-accent/5" 
                                : "border-border hover:border-accent/30 bg-background"
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Icon className={`w-5 h-5 mb-2 ${isSelected ? "text-accent" : "text-muted-foreground"}`} />
                            <p className={`font-semibold text-sm ${isSelected ? "text-primary" : "text-foreground"}`}>
                              {type.label}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">{type.description}</p>
                          </motion.button>
                        );
                      })}
                    </div>
                    {errors.companyType && (
                      <p className="text-sm text-destructive">{errors.companyType}</p>
                    )}
                  </div>

                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="John"
                        className={errors.firstName ? "border-destructive" : ""}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive">{errors.firstName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Doe"
                        className={errors.lastName ? "border-destructive" : ""}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@company.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  {/* Company & Job Title */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Acme Inc."
                        className={errors.company ? "border-destructive" : ""}
                      />
                      {errors.company && (
                        <p className="text-sm text-destructive">{errors.company}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        value={formData.jobTitle}
                        onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                        placeholder="Head of Monetization"
                      />
                    </div>
                  </div>

                  {/* Monthly Traffic (for Publishers) */}
                  {(formData.companyType === "publisher" || formData.companyType === "agency") && (
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <Label htmlFor="monthlyTraffic">Monthly Ad Impressions</Label>
                      <select
                        id="monthlyTraffic"
                        value={formData.monthlyTraffic}
                        onChange={(e) => handleInputChange("monthlyTraffic", e.target.value)}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select range</option>
                        {trafficOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </motion.div>
                  )}

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help? *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your goals, current setup, and any specific requirements..."
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 text-base font-semibold rounded-xl text-white shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300"
                      style={{ background: 'var(--gradient-brand)' }}
                    >
                      {isSubmitting ? (
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          Sending...
                        </motion.span>
                      ) : (
                        <>
                          Submit Inquiry
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-accent hover:underline">Privacy Policy</a> and{" "}
                    <a href="#" className="text-accent hover:underline">Terms of Service</a>.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div 
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* What to Expect */}
              <div className="rounded-2xl p-8" style={{ background: 'var(--gradient-navy)' }}>
                <h3 className="text-xl font-bold text-white mb-6">What to Expect</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/80">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-card rounded-2xl border border-border p-8 space-y-6">
                <h3 className="text-lg font-bold text-primary">Direct Contact</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:hello@kolorowey.com" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium text-foreground">hello@kolorowey.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Headquarters</p>
                      <p className="text-sm text-foreground">
                        World Trade Centre,<br />
                        Nauroji Nagar, Safdarjung Enclave,<br />
                        New Delhi, Delhi 110029
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Trusted by</p>
                <p className="text-2xl font-bold gradient-text">500+</p>
                <p className="text-sm text-muted-foreground">Publishers & Advertisers Worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
