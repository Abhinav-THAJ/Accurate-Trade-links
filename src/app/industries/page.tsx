import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { ChevronRight, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    slug: "retail",
    name: "Retail Stores",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600",
    desc: "Complete solutions for modern retail: from weighing and billing to labelling and packaging.",
    challenges: ["Manual billing errors", "Inventory inaccuracies", "Slow checkout processes"],
    solutions: ["Android POS Billing Terminals", "Barcode Scanners & Printers", "Retail Scales with Price Display"]
  },
  {
    slug: "healthcare",
    name: "Healthcare & Labs",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600",
    desc: "Precision instruments for hospitals, clinics, and diagnostic laboratories.",
    challenges: ["Dosage accuracy", "Equipment compliance", "Regulatory requirements"],
    solutions: ["Hospital & Personnel Scales", "Analytical Laboratory Balances", "OIML-Certified Instruments"]
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600",
    desc: "Industrial automation, packaging, and quality control solutions for manufacturing plants.",
    challenges: ["Production accuracy", "Packaging efficiency", "Quality audits"],
    solutions: ["Industrial Platform Scales", "Automatic Packing Machines", "Inkjet Batch Coders"]
  },
  {
    slug: "logistics",
    name: "Logistics & Warehousing",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600",
    desc: "Speed up operations with integrated weighing, barcode, and label printing systems.",
    challenges: ["Shipping weight accuracy", "Inventory management", "Label compliance"],
    solutions: ["Platform & Crane Scales", "Zebra Label Printers", "Honeywell Barcode Scanners"]
  },
  {
    slug: "food-processing",
    name: "Food Processing",
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=1600",
    desc: "Hygienic, stainless-steel weighing and packaging machinery for food-grade environments.",
    challenges: ["Contamination risks", "Portion accuracy", "Regulatory compliance"],
    solutions: ["Stainless Steel Platform Scales", "Vacuum & Band Sealers", "Automatic Filling Machines"]
  },
  {
    slug: "jewellery",
    name: "Jewellery Industry",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600",
    desc: "Precision micro-weighing, gold purity analysis, and secure locker solutions.",
    challenges: ["Carat accuracy", "Metal purity verification", "Asset security"],
    solutions: ["Jewellery & Carat Scales", "Gold Purity Analyzer", "Security Locker Systems"]
  }
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-secondary text-white pt-20 pb-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
              <Link href="/" className="hover:text-white">Home</Link><ChevronRight className="w-4 h-4" /><span className="text-white font-semibold">Industries</span>
            </div>
            <h1 className="text-5xl font-black text-white mb-4">Industry Solutions</h1>
            <p className="text-zinc-300 text-lg font-light max-w-3xl">
              ATL delivers tailored industrial automation, weighing, and billing solutions across 11 major industry verticals in Kerala and beyond.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-16 space-y-24">
          {industries.map((ind, i) => (
            <div key={ind.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={`relative rounded-3xl overflow-hidden shadow-2xl h-96 ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <img src={ind.image} alt={ind.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-3xl font-black text-white">{ind.name}</div>
              </div>
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <h2 className="text-3xl font-black text-foreground mb-4">{ind.name}</h2>
                <p className="text-muted-foreground text-lg mb-6 font-light">{ind.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Key Challenges</h4>
                    <ul className="space-y-2">
                      {ind.challenges.map(c => <li key={c} className="text-sm text-muted-foreground flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />{c}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">ATL Solutions</h4>
                    <ul className="space-y-2">
                      {ind.solutions.map(s => <li key={s} className="text-sm text-muted-foreground flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{s}</li>)}
                    </ul>
                  </div>
                </div>
                <Button asChild className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold gap-2">
                  <Link href={`/industries/${ind.slug}`}>Explore {ind.name} Solutions <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
    </main>
  );
}



