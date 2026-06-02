import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { ChevronRight, Wrench, Settings, Calendar, LifeBuoy, GraduationCap, ClipboardCheck, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Installation Services",
    desc: "Professional on-site installation by certified engineers ensuring your equipment is set up correctly and calibrated from day one.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800",
    features: ["Same-day installation available", "Certified engineers", "Post-installation testing", "User orientation"]
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Calibration Services",
    desc: "NABL-traceable calibration services for all weighing instruments to ensure legal compliance and measurement accuracy.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800",
    features: ["Government certified", "Calibration certificates", "Legal-for-trade compliance", "On-site and lab calibration"]
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "AMC (Annual Maintenance)",
    desc: "Comprehensive Annual Maintenance Contracts with scheduled preventive maintenance, priority support, and cost-effective repairs.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
    features: ["Scheduled PM visits", "Priority response time", "Spare parts coverage", "24/7 helpline"]
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Repair Services",
    desc: "Fast and reliable repair services for all brands and models. Most repairs completed within 24-48 hours.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800",
    features: ["All brands serviced", "Genuine spare parts", "48-hr turnaround", "90-day repair warranty"]
  },
  {
    icon: <LifeBuoy className="w-8 h-8" />,
    title: "Onsite Support",
    desc: "Rapid onsite technical support dispatched to your location. Our Kerala-wide engineer network ensures fast response times.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
    features: ["4-hour response SLA", "Field engineers across Kerala", "Emergency breakdown support", "Weekend availability"]
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Training and Consultation",
    desc: "Product training sessions and technical consultations to help your team get maximum value from your equipment investment.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
    features: ["Operator training", "Admin system training", "Group sessions", "Video training library"]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-secondary text-white pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Services</span>
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-zinc-300 text-lg font-light max-w-3xl">
            End-to-end service support from installation and calibration to annual maintenance and emergency repairs across Kerala.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 space-y-8">
        {services.map((service, i) => (
          <div key={i} className="group bg-white border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={`relative h-72 lg:h-auto overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-transparent" />
              </div>
              <div className={`p-10 flex flex-col justify-center ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-extrabold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6 font-light leading-relaxed">{service.desc}</p>
                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {service.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm font-medium text-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Button asChild className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold gap-2">
                    <Link href="/contact">Request Service <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                  <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white font-bold gap-2">
                    <Phone className="w-4 h-4" /> Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
