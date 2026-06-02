import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Menon",
    company: "FreshMart Supermarket, Kochi",
    text: "ATL installed our complete billing and weighing setup across 12 counters. The team was professional, fast, and the after-sales support is exceptional. Highly recommended.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
  },
  {
    name: "Dr. Priya Nair",
    company: "Kerala Institute of Medical Sciences",
    text: "We procured 20 hospital scales and 5 laboratory analytical balances from ATL. The calibration certificates and NABL traceability provided were exactly what we needed for compliance.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200"
  },
  {
    name: "Sunil Thomas",
    company: "Thomas Gold & Jewellery, Thrissur",
    text: "The jewellery scales from ATL are precise to 0.001g. The gold purity analyzer has also been invaluable. Excellent products backed by prompt technical support.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
  },
  {
    name: "Abdul Hameed",
    company: "Hameed Distributors, Kozhikode",
    text: "ATL has been our service partner for 8 years. Their AMC team is always on time and their technicians know every product inside out. Best in Kerala.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">What Our Clients Say</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-foreground">Trusted Across Kerala</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mb-6 text-lg">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-muted">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground font-medium">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
