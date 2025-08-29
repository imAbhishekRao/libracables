"use client";
export default function About() {
  return (
    <div className="container mx-auto py-12">
      <header className="mb-8">
        <h1 className="font-display text-3xl">About Libra Cables</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Libra Cables is a trusted name in the Indian cable industry, known for delivering reliable, high-performance electrical cables.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <article>
          <h2 className="font-medium text-xl mb-2">Mission</h2>
          <p className="text-muted-foreground">To deliver safe, sustainable, and superior-quality cable solutions for India’s growing infrastructure needs.</p>
        </article>
        <article>
          <h2 className="font-medium text-xl mb-2">Vision</h2>
          <p className="text-muted-foreground">To become India’s most respected copper cable brand known for quality, innovation, and service.</p>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="font-medium text-xl mb-4">Core Values</h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          {["Integrity", "Innovation", "Sustainability", "Customer First", "Excellence"].map((v) => (
            <li key={v} className="bg-secondary rounded-md px-3 py-2">{v}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-medium text-xl mb-3">Why Us</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-sm">
          {[ "20+ Years of Manufacturing Expertise", "Modern Production Facilities", "Skilled Workforce & R&D Backing", "Compliance with Indian and Global Standards" ].map((i) => (
            <li key={i} className="bg-secondary rounded-md px-3 py-2">{i}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}








