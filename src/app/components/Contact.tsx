import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ca7842bf-e5e5-4dc8-b5b4-2b94e2b23f22", // IMPORTANT: Replace this with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/6 to-background"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl text-transparent">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Contact Information</h3>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="mb-1">Email</h4>
                  <p className="text-muted-foreground">ravishkaprasajan2000@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="mb-1">Phone</h4>
                  <p className="text-muted-foreground">077 818 9106</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="mb-1">Location</h4>
                  <p className="text-muted-foreground">Veyangoda, Gampaha, Sri Lanka</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-foreground">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/15 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-foreground">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/15 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-foreground">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/15 transition-all resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-2xl hover:shadow-primary/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
            </motion.button>
            {status === "success" && (
              <p className="text-green-500 text-center mt-2">Your message has been sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center mt-2">Something went wrong. Please try again later.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
