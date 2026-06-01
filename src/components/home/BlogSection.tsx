import Link from "next/link";
import { ArrowRight } from "lucide-react";

const latestPosts = [
  {
    title: "How to Choose the Right Weighing Scale for Your Supermarket",
    category: "Buying Guides",
    date: "May 20, 2026",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    link: "/blog/1"
  },
  {
    title: "Top 5 Barcode Scanner Brands for Retail Businesses in 2026",
    category: "Industry News",
    date: "May 5, 2026",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800",
    link: "/blog/3"
  },
  {
    title: "AI-Powered Scales: The Future of Retail Automation",
    category: "Technology Updates",
    date: "April 5, 2026",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    link: "/blog/6"
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Resources & Insights</h2>
            <h3 className="text-4xl md:text-5xl font-black text-foreground">Latest Articles</h3>
          </div>
          <Link href="/blog" className="mt-6 md:mt-0 text-primary font-bold flex items-center gap-2 hover:underline underline-offset-4 decoration-2">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post, i) => (
            <Link key={i} href={post.link} className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-52 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-primary text-white">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground mb-3 font-semibold">{post.date}</p>
                <h3 className="font-black text-foreground text-lg group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                <div className="mt-4 flex items-center text-primary font-bold text-sm">
                  Read More <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
