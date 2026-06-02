import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IndustriesServed() {
  const industries = [
    { name: "Supermarkets & Retail", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800" },
    { name: "Healthcare & Labs", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800" },
    { name: "Manufacturing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" },
    { name: "Logistics & Warehousing", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800" },
    { name: "Food Processing", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=800" },
    { name: "Jewellery", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Industries We Serve</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-foreground">Tailored Solutions for Every Sector</h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map((ind, i) => (
            <Link key={i} href="/industries" className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
              <img 
                src={ind.image} 
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <h4 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{ind.name}</h4>
                <div className="flex items-center text-primary font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  View Solutions <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
