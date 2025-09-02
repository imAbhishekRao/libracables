"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Building2, Zap, Car, Signal, Train, Home } from "lucide-react";

const industries = [
  { title: "Construction", desc: "Electrical cabling for homes, buildings, and offices.", Icon: Building2 },
  { title: "Energy", desc: "Transmission-grade cables for power systems.", Icon: Zap },
  { title: "Automobile", desc: "Flexible cables used in vehicles and EVs.", Icon: Car },
  { title: "Telecom", desc: "Signal and power cabling for telecom towers.", Icon: Signal },
  { title: "Railways", desc: "High-durability cables for transportation networks.", Icon: Train },
  { title: "Real Estate", desc: "Used in residential and commercial developments.", Icon: Home },
];

export default function Industries() {
  return (
    <div className="container mx-auto py-12">
      <header className="mb-8">
        <h1 className="font-display text-3xl">Industries Served</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Trusted by diverse sectors for reliability, safety, and consistent performance.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {industries.map(({ title, desc, Icon }) => (
          <Card key={title}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon className="text-primary" />
                <CardTitle className="text-base">{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

















