"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    name: "House Wiring Cables",
    description: "Ideal for residential and commercial buildings, engineered for safety and long service life.",
    applications: ["Homes & offices", "Lighting & fixtures", "Small appliances"],
  },
  {
    name: "Submersible Flat Cables",
    description: "Perfect for underwater pump systems with excellent insulation and moisture resistance.",
    applications: ["Borewell pumps", "Irrigation systems", "Water management"],
  },
  {
    name: "Flexible Industrial Cables",
    description: "Used in factories, machines, and automation where flexibility and durability are critical.",
    applications: ["Robotics & automation", "Machinery wiring", "Control panels"],
  },
  {
    name: "Control Cables",
    description: "For precise signal and power control in various industrial applications.",
    applications: ["Instrumentation", "Signal control", "PLC systems"],
  },
  {
    name: "FR/FRLS/FRZH Cables",
    description: "Flame-retardant cable range designed for enhanced fire safety and low smoke emission.",
    applications: ["Public infrastructure", "Commercial buildings", "Critical facilities"],
  },
];

export default function Products() {
  return (
    <div className="container mx-auto py-12">
      <header className="mb-8">
        <h1 className="font-display text-3xl">Products</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Engineered for performance and safety across applications—from homes to heavy industry.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((p) => (
          <Card key={p.name}>
            <CardHeader>
              <CardTitle className="text-xl">{p.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </CardHeader>
            <CardContent>
              <h3 className="font-medium mb-2">Applications</h3>
              <ul className="list-disc ml-6 text-sm text-muted-foreground">
                {p.applications.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <div className="mt-4">
                <Button asChild variant="outline">
                  <a href="#" aria-label={`Download PDF brochure for ${p.name}`}>Download PDF Brochure</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}








