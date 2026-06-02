import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { ChevronRight, Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "How to Choose the Right Weighing Scale for Your Supermarket",
    excerpt: "From trade certification to capacity and accuracy – a complete buyer's guide to retail weighing scales.",
    category: "Buying Guides",
    author: "ATL Team",
    date: "May 20, 2026",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Understanding OIML and NABL Certification for Industrial Scales",
    excerpt: "What legal-for-trade certification means and why it matters for businesses in India.",
    category: "Product Guides",
    author: "ATL Team",
    date: "May 12, 2026",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1200",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Top 5 Barcode Scanner Brands for Retail Businesses in 2026",
    excerpt: "Zebra, Honeywell, and more – comparing the best enterprise barcode scanners for modern retail.",
    category: "Industry News",
    author: "ATL Team",
    date: "May 5, 2026",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Preventive Maintenance Tips for Your Billing and POS System",
    excerpt: "Simple maintenance steps to extend the life of your POS system and avoid costly repairs.",
    category: "Maintenance Tips",
    author: "ATL Team",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "ATL Completes 50-Point Supermarket Installation in Kochi",
    excerpt: "A behind-the-scenes look at our largest supermarket outfitting project – 50 billing counters in 72 hours.",
    category: "Case Studies",
    author: "ATL Team",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1200",
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "AI-Powered Scales: The Future of Retail Automation",
    excerpt: "Exploring how AI-powered pricing and recognition scales are revolutionizing modern grocery retail.",
    category: "Technology Updates",
    author: "ATL Team",
    date: "April 5, 2026",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
    readTime: "6 min read"
  }
];

const categories = ["All", "Product Guides", "Industry News", "Technology Updates", "Buying Guides", "Maintenance Tips", "Case Studies"];

const catColors: Record<string, string> = {
  "Product Guides": "bg-blue-100 text-blue-700",
  "Industry News": "bg-green-100 text-green-700",
  "Technology Updates": "bg-purple-100 text-purple-700",
  "Buying Guides": "bg-amber-100 text-amber-700",
  "Maintenance Tips": "bg-teal-100 text-teal-700",
  "Case Studies": "bg-primary/10 text-primary"
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-secondary text-white pt-20 pb-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
              <Link href="/" className="hover:text-white">Home</Link><ChevronRight className="w-4 h-4" /><span className="text-white font-semibold">Blog</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">Resources & Insights</h1>
            <p className="text-zinc-300 text-lg font-light max-w-3xl">Product guides, industry news, maintenance tips, and technology updates from the ATL team.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-16">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(c => (
              <button key={c} className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${c === "All" ? "bg-primary text-white border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}>
                {c}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-10 group rounded-3xl overflow-hidden bg-white border border-border shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4"><span className={`px-3 py-1 rounded-full text-xs font-bold ${catColors[posts[0].category]}`}>{posts[0].category}</span></div>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{posts[0].date}</span>
                  <span className="flex items-center gap-1"><User className="w-4 h-4" />{posts[0].author}</span>
                  <span>{posts[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors">{posts[0].title}</h2>
                <p className="text-muted-foreground font-light mb-6">{posts[0].excerpt}</p>
                <Link href={`/blog/${posts[0].id}`} className="flex items-center gap-2 text-primary font-bold hover:underline underline-offset-4">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {posts.slice(1).map(post => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 left-3"><span className={`px-2.5 py-1 rounded-full text-xs font-bold ${catColors[post.category]}`}>{post.category}</span></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-extrabold text-foreground text-lg mb-2 group-hover:text-primary transition-colors flex-1">{post.title}</h3>
                  <p className="text-sm text-muted-foreground font-light line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </main>
  );
}




