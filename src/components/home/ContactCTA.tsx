import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, PhoneCall, CheckCircle2 } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0a0f1a]">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary font-semibold text-sm mb-8">
            <CheckCircle2 className="w-4 h-4" />
            Free Consultation & Custom Quotation
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to Upgrade Your <br />
            <span className="text-primary">Enterprise Systems?</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Talk to our engineering experts today. Get a free site survey, product demonstration, and a customized quotation — no commitment required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Button
              asChild
              size="lg"
              className="h-16 px-10 text-xl font-bold rounded-full bg-primary text-white hover:bg-primary/90 shadow-2xl shadow-primary/30 gap-3 transition-all hover:scale-105 w-full sm:w-auto"
            >
              <Link href="/contact">
                Request a Quote <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
            <a
              href="https://wa.me/919000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 px-10 text-xl font-bold rounded-full border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white gap-3 transition-all hover:scale-105 w-full sm:w-auto flex items-center justify-center"
            >
              <MessageSquare className="w-6 h-6" /> WhatsApp Us
            </a>
            <a
              href="tel:+919000000000"
              className="h-16 px-10 text-xl font-bold rounded-full border-2 border-white/20 text-white hover:bg-white/10 gap-3 transition-all hover:scale-105 w-full sm:w-auto flex items-center justify-center"
            >
              <PhoneCall className="w-6 h-6" /> Call Now
            </a>
          </div>

          {/* Trust Chips */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              "✅ 20+ Years Experience",
              "✅ Free Installation",
              "✅ 1-Year Warranty",
              "✅ Kerala-wide Service",
              "✅ Certified Engineers"
            ].map((chip) => (
              <div key={chip} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium backdrop-blur-sm">
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
