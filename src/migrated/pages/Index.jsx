"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Factory, ShieldCheck, Truck, Building2, Zap, Train, Signal, Car, Home } from "lucide-react";
import Link from "next/link";

import heroImage from "@/../public/hero-copper-cables.jpg";
import p1 from "@/../public/product-house-wiring.jpg";
import p2 from "@/../public/product-submersible.jpg";
import p3 from "@/../public/product-flexible-industrial.jpg";
import Image from "next/image";

export default function Index() {
  return (
    <div>
      <section
        className="relative min-h-[60vh] flex items-center"
        aria-label="Hero section"
      >
        <Image src={heroImage} alt="Copper cables hero" fill style={{ objectFit: "cover" }} priority />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background"></div>
        <div className="container mx-auto relative z-10 py-20">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl max-w-3xl">
            Powering Progress with Precision
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Libra Cables – High-Performance Copper Cables for Modern Infrastructure
          </p>
          <div className="mt-6">
            <Button asChild variant="hero" size="lg">
              <Link href="/products">Explore Our Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <h2 className="font-display text-3xl mb-6">Why Choose Libra Cables</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, text: "ISO-Certified Manufacturing" },
            { icon: CheckCircle2, text: "Long-Life Copper Conductors" },
            { icon: Truck, text: "Nationwide Delivery Network" },
            { icon: Factory, text: "Rigorously Tested for Safety and Performance" },
          ].map((item) => (
            <Card key={item.text}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <item.icon className="text-primary" />
                  <CardTitle className="text-base">{item.text}</CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl mb-6">Product Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: p1, title: "House Wiring Cables", desc: "Reliable, safe, and efficient copper cables for homes and offices." },
              { img: p2, title: "Submersible Flat Cables", desc: "Durable performance for underwater pump systems." },
              { img: p3, title: "Flexible Industrial Cables", desc: "High flexibility and strength for industrial automation." },
            ].map((p) => (
              <Card key={p.title}>
                <CardContent className="p-0">
                  <Image src={p.img} alt={`${p.title} product image`} className="w-full h-48 object-cover" />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <h2 className="font-display text-3xl mb-6">Industries We Serve</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { Icon: Building2, text: "Construction – Homes, buildings, and offices." },
            { Icon: Zap, text: "Energy – Transmission-grade power systems." },
            { Icon: Train, text: "Railways – High-durability transport networks." },
            { Icon: Signal, text: "Telecom – Signal and power cabling." },
            { Icon: Car, text: "Automobile – Flexible vehicle and EV cables." },
            { Icon: Home, text: "Real Estate – Residential and commercial developments." },
          ].map(({ Icon, text }) => (
            <Card key={text}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon className="text-primary" />
                  <CardTitle className="text-base">{text}</CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto text-center">
          <h3 className="font-display text-2xl">Need Custom Cable Solutions?</h3>
          <p className="mt-2 text-primary-foreground/80">Talk to our team for tailored specifications and quotes.</p>
          <div className="mt-6">
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

























