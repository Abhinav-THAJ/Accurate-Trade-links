"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Filter, SlidersHorizontal, Scale, ChevronRight, Heart, BarChart2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { useCartStore } from "@/lib/cartStore";

const allProducts = [
  // Weighing
  { id: 1, name: "CAS PR-II", category: "Weighing", sub: "Retail Scales", brand: "CAS", price: 15400, image: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?q=80&w=600", capacity: "30kg", accuracy: "5g" },
  { id: 2, name: "CAS ER Plus", category: "Weighing", sub: "Retail Scales", brand: "CAS", price: 18900, image: "https://images.unsplash.com/photo-1608220179579-399ca506a59b?q=80&w=600", capacity: "15kg", accuracy: "2g" },
  { id: 3, name: "CAS SW-II", category: "Weighing", sub: "Retail Scales", brand: "CAS", price: 12200, image: "https://images.unsplash.com/photo-1590233649036-ecd12c8b827e?q=80&w=600", capacity: "30kg", accuracy: "5g" },
  { id: 4, name: "Platform Scale HD-150", category: "Weighing", sub: "Platform Scales", brand: "Essae", price: 24500, image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=600", capacity: "150kg", accuracy: "50g" },
  { id: 5, name: "Analytical Balance", category: "Weighing", sub: "Lab Scales", brand: "Citizen", price: 48900, image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=600", capacity: "200g", accuracy: "0.1mg" },
  // Billing
  { id: 6, name: "Touch Billing System Pro", category: "Billing", sub: "Android Touch Billing", brand: "Epson", price: 34800, image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600", capacity: "-", accuracy: "-" },
  { id: 7, name: "Barcode Scanner HS-500", category: "Billing", sub: "Barcode Scanners", brand: "Honeywell", price: 7600, image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600", capacity: "-", accuracy: "-" },
  { id: 8, name: "Thermal Receipt Printer", category: "Billing", sub: "POS Printers", brand: "Epson", price: 8200, image: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=600", capacity: "-", accuracy: "-" },
  // Sealing
  { id: 9, name: "Vacuum Sealer VS-300", category: "Sealing", sub: "Vacuum Sealing", brand: "ATL", price: 14900, image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=600", capacity: "-", accuracy: "-" },
  { id: 10, name: "Band Sealer BS-600", category: "Sealing", sub: "Band Sealing", brand: "ATL", price: 28500, image: "https://images.unsplash.com/photo-1621415494297-c87a552bfdbb?q=80&w=600", capacity: "-", accuracy: "-" },
];

const categories = ["All", "Weighing", "Billing", "Sealing", "Printing", "Filling", "Labelling", "Counting"];
const brands = ["All", "CAS", "Citizen", "Epson", "Zebra", "TSC", "Honeywell", "Essae", "ATL"];

export default function ProductsPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [compare, setCompare] = useState<number[]>([]);

  const addItem = useCartStore(state => state.addItem);

  const filtered = allProducts.filter(p => {
    const catMatch = selectedCat === "All" || p.category === selectedCat;
    const brandMatch = selectedBrand === "All" || p.brand === selectedBrand;
    const searchMatch = p.name.toLowerCase().includes(search.toLowerCase());
    return catMatch && brandMatch && searchMatch;
  });

  const toggleWishlist = (id: number) => setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const toggleCompare = (id: number) => setCompare(prev => prev.includes(id) ? prev.filter(x => x !== id) : prev.length < 4 ? [...prev, id] : prev);

  return (
    <main className="min-h-screen bg-muted/30">
      <Navbar />

      {/* Page Header */}
      <div className="bg-secondary text-white pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Products</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">All Products</h1>
          <p className="text-zinc-300 text-lg font-light max-w-2xl">
            Browse our complete range of precision weighing, billing, packaging & automation solutions from world-leading brands.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-primary" /> Filters
                </h3>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map(c => (
                      <button
                        key={c}
                        onClick={() => setSelectedCat(c)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCat === c ? "bg-primary text-white" : "text-foreground hover:bg-muted"}`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">Brand</h4>
                  <div className="space-y-2">
                    {brands.map(b => (
                      <button
                        key={b}
                        onClick={() => setSelectedBrand(b)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedBrand === b ? "bg-primary text-white" : "text-foreground hover:bg-muted"}`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/30 text-sm font-medium"
                />
              </div>
              <div className="text-sm text-muted-foreground font-semibold">
                {filtered.length} products found
              </div>
            </div>

            {/* Compare Bar */}
            {compare.length > 0 && (
              <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-between">
                <span className="font-semibold text-primary">{compare.length} products selected for comparison</span>
                <Button size="sm" className="bg-primary text-white rounded-full hover:bg-primary/90">
                  Compare Now <BarChart2 className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map(product => (
                <div key={product.id} className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-52 bg-muted overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className={`w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center transition-colors ${wishlist.includes(product.id) ? "bg-primary border-primary text-white" : "bg-white/80 border-white/50 text-foreground hover:bg-primary hover:text-white"}`}
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleCompare(product.id)}
                        className={`w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center transition-colors ${compare.includes(product.id) ? "bg-primary border-primary text-white" : "bg-white/80 border-white/50 text-foreground hover:bg-primary hover:text-white"}`}
                      >
                        <BarChart2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 text-xs font-bold bg-primary text-white rounded-full">{product.brand}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">{product.sub}</p>
                    <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    {product.capacity !== "-" && (
                      <div className="flex gap-4 text-xs text-muted-foreground mb-3">
                        <span>Capacity: <strong className="text-foreground">{product.capacity}</strong></span>
                        <span>Accuracy: <strong className="text-foreground">{product.accuracy}</strong></span>
                      </div>
                    )}
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-xl font-black text-primary">₹{product.price.toLocaleString("en-IN")}</span>
                      <span className="text-xs text-muted-foreground font-semibold">Excl. GST</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <div className="flex gap-2">
                        <Button asChild size="sm" variant="outline" className="flex-1 rounded-full border-border hover:bg-muted text-foreground font-semibold text-xs py-2">
                          <Link href={`/products/${product.id}`}>Details</Link>
                        </Button>
                        <Button
                          onClick={() => addItem(product)}
                          size="sm"
                          variant="outline"
                          className="flex-1 rounded-full border-primary text-primary hover:bg-primary hover:text-white font-semibold text-xs py-2 gap-1 cursor-pointer"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" /> Cart
                        </Button>
                      </div>
                      <Button
                        asChild
                        size="sm"
                        className="w-full rounded-full bg-primary text-white hover:bg-primary/90 font-bold text-xs py-2"
                      >
                        <Link href={`/checkout?buyNow=${product.id}`}>Buy Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



