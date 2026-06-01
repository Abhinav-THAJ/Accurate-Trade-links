import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { ChevronRight, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const brands = [
  {
    name: "CAS",
    category: "Weighing Systems",
    origin: "South Korea",
    desc: "CAS Corporation is a global leader in weighing technology, manufacturing precision retail, industrial, and laboratory scales used in over 100 countries.",
    products: ["Retail Scales", "Platform Scales", "Jewellery Scales", "Lab Scales"],
    color: "#E30613",
    image: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?q=80&w=800"
  },
  {
    name: "Citizen",
    category: "Precision Instruments",
    origin: "Japan",
    desc: "Citizen Systems produces enterprise-grade precision measuring instruments trusted by laboratories and industries worldwide since 1918.",
    products: ["Precision Scales", "Balances", "Analytical Instruments"],
    color: "#1F2937",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800"
  },
  {
    name: "Epson",
    category: "Printing Solutions",
    origin: "Japan",
    desc: "Epson is the world's #1 POS printer brand, delivering high-speed, reliable thermal printing solutions for retail, hospitality, and banking sectors.",
    products: ["POS Printers", "Label Printers", "Barcode Printers"],
    color: "#003399",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800"
  },
  {
    name: "Zebra Technologies",
    category: "Enterprise Mobility",
    origin: "USA",
    desc: "Zebra Technologies is the world leader in barcode printing and enterprise mobility solutions, powering logistics, retail, and healthcare operations globally.",
    products: ["Label Printers", "Barcode Scanners", "Mobile Computers"],
    color: "#333333",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800"
  },
  {
    name: "Honeywell",
    category: "Industrial Automation",
    origin: "USA",
    desc: "Honeywell is a Fortune 100 technology and manufacturing company offering state-of-the-art barcode scanning and industrial automation solutions.",
    products: ["Barcode Scanners", "Mobile Computers", "Industrial Sensors"],
    color: "#E30613",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800"
  },
  {
    name: "TSC",
    category: "Label Printing",
    origin: "Taiwan",
    desc: "TSC Auto ID Technology produces durable, high-performance thermal label printers for industrial and commercial labelling applications.",
    products: ["Industrial Label Printers", "Desktop Printers", "Mobile Printers"],
    color: "#0066CC",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800"
  }
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-secondary text-white pt-20 pb-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
              <Link href="/" className="hover:text-white">Home</Link><ChevronRight className="w-4 h-4" /><span className="text-white font-semibold">Brands</span>
            </div>
            <h1 className="text-5xl font-black text-white mb-4">Our Brand Partners</h1>
            <p className="text-zinc-300 text-lg font-light max-w-3xl">
              ATL is an authorized distributor and service partner for the world's leading industrial technology brands.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <div key={brand.name} className="group bg-white border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img src={brand.image} alt={brand.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-3xl font-black text-white">{brand.name}</div>
                    <div className="text-white/70 text-sm font-medium">{brand.origin} · {brand.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{brand.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {brand.products.map(p => (
                      <span key={p} className="px-2.5 py-1 text-xs font-semibold bg-muted rounded-full text-muted-foreground">{p}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 rounded-full bg-primary text-white hover:bg-primary/90 font-bold">
                      View Products <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full border-border font-semibold gap-1">
                      <ExternalLink className="w-3 h-3" /> Website
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </main>
  );
}




