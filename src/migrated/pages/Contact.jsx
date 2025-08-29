"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");

    toast({
      title: "Message sent",
      description: `Thanks${name ? `, ${name}` : ""}! Our team will contact you shortly.`,
    });

    form.reset();
  };

  return (
    <div className="container mx-auto py-12">
      <header className="mb-8">
        <h1 className="font-display text-3xl">Contact Us</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Our team is here to help you with product queries, quotes, and custom requirements.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="block text-sm mb-1">Name</label>
            <Input id="name" name="name" required placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <Input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm mb-1">Phone</label>
            <Input id="phone" name="phone" type="tel" required placeholder="+91-XXXXXXXXXX" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <Textarea id="message" name="message" required placeholder="How can we help?" rows={5} />
          </div>
          <Button type="submit" variant="hero">Send Message</Button>
        </form>

        <aside>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h2 className="font-medium text-xl mb-3">Manufacturing Address</h2>
            <div className="space-y-2 text-sm">
              <p className="font-semibold">Mfg. by : LIBRA CABLE INDIA</p>
              <p>M-215, Sector-5, DSIIDC Banana Industrial Area</p>
              <p>Delhi-39</p>
              <p>📧 <a href="mailto:libracable@gmail.com" className="hover:text-primary">libracable@gmail.com</a></p>
              <p>🌐 <a href="https://www.libracables.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">www.libracables.com</a></p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}



