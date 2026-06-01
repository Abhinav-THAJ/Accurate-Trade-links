"use client";

import Link from "next/link";
import { ChevronRight, Download, MessageSquare, Phone, FileText, Star, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";

const specs = [
  { label: "Capacity", value: "30 kg" },
  { label: "Accuracy / Division", value: "5 g" },
  { label: "Display Type", value: "LCD Backlit" },
  { label: "Platform Size", value: "250 × 190 mm" },
  { label: "Power Supply", value: "AC 230V / Internal Battery" },
  { label: "Warranty", value: "1 Year" },
  { label: "Brand", value: "CAS" },
  { label: "Model", value: "PR-II" },
  { label: "Classification", value: "OIML Class III" },
];

const faqs = [
  { q: "Is this scale legal for trade?", a: "Yes, the CAS PR-II is OIML Class III certified and approved for legal-for-trade use in India." },
  { q: "Does it come with a warranty?", a: "Yes, it comes with a 1-year manufacturer warranty. ATL also offers extended AMC plans." },
  { q: "What is the battery backup?", a: "The built-in rechargeable battery provides up to 8 hours of operation on a full charge." },
  { q: "Can I get a bulk discount?", a: "Yes, ATL offers special pricing for bulk orders. Contact our sales team for a customized quote." },
];

export default function ProductDetailPage() {
  const [mainImg, setMainImg] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?q=80&w=800",
    "https://images.unsplash.com/photo-1608220179579-399ca506a59b?q=80&w=800",
    "https://images.unsplash.com/photo-1590233649036-ecd12c8b827e?q=80&w=800",
  ];

  return (
    <main className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link><ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-primary">Products</Link><ChevronRight className="w-3 h-3" />
            <Link href="/products/weighing" className="hover:text-primary">Weighing</Link><ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-semibold">CAS PR-II</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20">
            {/* Image Gallery */}
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-border shadow-sm mb-4">
                <img src={images[mainImg]} alt="Product" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">CAS</div>
              </div>
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setMainImg(i)}
                    className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-colors ${mainImg === i ? "border-primary" : "border-transparent"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                Retail Weighing Scale
              </div>
              <h1 className="text-4xl font-black text-foreground mb-3">CAS PR-II Digital Scale</h1>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <span className="text-sm text-muted-foreground font-medium">(48 reviews)</span>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg font-light">
                The CAS PR-II is a premium legal-for-trade retail scale ideal for grocery stores, supermarkets, and retail counters. Features a bright LCD backlit display and a robust stainless-steel platform.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <Button size="lg" className="h-14 w-full rounded-full bg-primary text-white text-lg font-bold hover:bg-primary/90 gap-3 shadow-lg shadow-primary/20">
                  <FileText className="w-5 h-5" /> Request Quotation
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button size="lg" variant="outline" className="h-12 rounded-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white gap-2 font-bold">
                    <MessageSquare className="w-4 h-4" /> WhatsApp
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white gap-2 font-bold">
                    <Phone className="w-4 h-4" /> Call Now
                  </Button>
                </div>
                <Button size="lg" variant="outline" className="h-12 w-full rounded-full border-border gap-2 font-semibold">
                  <Download className="w-4 h-4" /> Download Brochure
                </Button>
              </div>

              <div className="p-4 bg-muted/60 rounded-xl border border-border">
                <p className="text-sm text-muted-foreground">✅ Free Installation &nbsp;|&nbsp; ✅ 1-Year Warranty &nbsp;|&nbsp; ✅ Kerala-wide Service</p>
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-foreground mb-6">Technical Specifications</h2>
              <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                {specs.map((spec, i) => (
                  <div key={i} className={`flex items-center px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-muted/40"}`}>
                    <span className="w-48 text-sm font-bold text-muted-foreground">{spec.label}</span>
                    <span className="text-foreground font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar – Applications & Downloads */}
            <div className="space-y-6">
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-foreground text-lg mb-4">Applications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["Grocery Stores", "Supermarkets", "Bakeries", "Meat & Fish Counters", "Pharmacies", "Agricultural Markets"].map(a => (
                    <li key={a} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />{a}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">Need Expert Advice?</h3>
                <p className="text-zinc-300 text-sm mb-4 font-light">Our engineers help you choose the right solution for your business.</p>
                <Button className="w-full rounded-full bg-primary text-white hover:bg-primary/90 font-bold">Get Free Consultation</Button>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-20 max-w-3xl">
            <h2 className="text-2xl font-black text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-border rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-bold text-foreground">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-muted-foreground font-light">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
