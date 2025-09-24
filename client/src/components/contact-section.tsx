import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaDribbble, FaBehance, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { fadeInVariants } from "@/lib/animations";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alex.chen.design@email.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA"
  }
];

const socialLinks = [
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaDribbble, href: "#", label: "Dribbble" },
  { icon: FaBehance, href: "#", label: "Behance" },
  { icon: FaGithub, href: "#", label: "GitHub" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="contact-title">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="contact-description">
              I'm always excited to collaborate on new projects and explore opportunities. 
              Whether you have a project in mind or just want to chat about design, feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6" data-testid="contact-info-title">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="flex items-center space-x-4" data-testid={`contact-info-${info.label.toLowerCase()}`}>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4" data-testid="social-links-title">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      data-testid={`social-${social.label.toLowerCase()}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ delay: 0.4 }}
            >
              <Form {...form}>
                <form 
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="bg-card p-8 rounded-xl border border-border shadow-lg space-y-6"
                  data-testid="contact-form"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your@email.com" 
                            {...field} 
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What's this about?" 
                            {...field} 
                            data-testid="input-subject"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="min-h-[120px] resize-none" 
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={contactMutation.isPending}
                    data-testid="submit-contact-form"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
