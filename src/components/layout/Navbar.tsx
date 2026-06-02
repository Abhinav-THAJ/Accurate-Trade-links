"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search, ChevronDown, Menu, X,
  Scale, Receipt, Printer, Package, Hash, Tag, Droplets, ShoppingCart
} from "lucide-react";

import { useCartStore } from "@/lib/cartStore";
import CartDrawer from "./CartDrawer";

const megaMenuData = [
  {
    label: "Weighing",
    icon: <Scale className="w-5 h-5" />,
    href: "/products?cat=weighing",
    items: [
      "Retail Scales", "Platform Scales", "Portable Scales",
      "Jewellery Scales", "Lab & Analytical", "Hospital Scales",
      "Industrial Scales", "Crane Scales"
    ]
  },
  {
    label: "Billing Solutions",
    icon: <Receipt className="w-5 h-5" />,
    href: "/products?cat=billing",
    items: [
      "Keypad Billing", "Android Touch Billing", "Windows Touch Billing",
      "POS Printers", "Label Printers", "Barcode Scanners", "Cash Drawers"
    ]
  },
  {
    label: "Printing Scales",
    icon: <Printer className="w-5 h-5" />,
    href: "/products?cat=printing-scales",
    items: ["Receipt Printing Keypad", "Receipt Printing Touch", "Label Printing", "AI Scale"]
  },
  {
    label: "Counting",
    icon: <Hash className="w-5 h-5" />,
    href: "/products?cat=counting",
    items: ["Currency Counting", "Value Counting", "Coin Counting", "Accessories"]
  },
  {
    label: "Sealing",
    icon: <Package className="w-5 h-5" />,
    href: "/products?cat=sealing",
    items: [
      "Hand Sealing", "Pedal Sealing", "Band Sealing",
      "Vacuum Sealing", "Cup Sealing", "Heat Shrinking", "Bag Closer"
    ]
  },
  {
    label: "Labelling",
    icon: <Tag className="w-5 h-5" />,
    href: "/products?cat=labelling",
    items: ["Batch Coders", "Inkjet Printers", "Bottle Labelling", "Label Printers"]
  },
  {
    label: "Filling",
    icon: <Droplets className="w-5 h-5" />,
    href: "/products?cat=filling",
    items: ["Weigh Fillers", "Liquid Fillers", "Paste Fillers", "Milk Fillers", "Automatic Packing"]
  },
];

// Pages that have a dark hero — navbar starts transparent on these
const HERO_PAGES = ["/"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const getItemsCount = useCartStore(state => state.getTotalItems);
  const cartCount = getItemsCount();

  useEffect(() => {
    setMounted(true);
  }, []);

  const pathname = usePathname();
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHeroPage = HERO_PAGES.includes(pathname);
  // On non-hero pages: always show solid white nav. On hero page: transparent until scroll.
  const solidNav = !isHeroPage || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu when route changes
  useEffect(() => { setProductsOpen(false); setMobileOpen(false); }, [pathname]);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 150);
  };

  const navTextClass = solidNav ? "text-foreground" : "text-white";
  const navBg = solidNav
    ? "bg-white shadow-md py-2 border-b border-border"
    : "bg-transparent py-4";

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
        <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="relative w-12 h-12 flex-shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Accurate Trade Links Logo"
                  className="w-full h-full object-contain rounded-xl bg-white p-1 shadow-md"
                />
              </div>
              <div className={`hidden sm:flex flex-col leading-none ${navTextClass} transition-colors`}>
                <span className="font-black text-sm tracking-widest">ACCURATE</span>
                <span className="font-black text-sm tracking-widest">TRADE LINKS</span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className={`hidden xl:flex items-center gap-6 font-semibold text-[14px] ${navTextClass} transition-colors`}>
              <Link href="/" className="hover:text-primary transition-colors py-2">Home</Link>
              <Link href="/about" className="hover:text-primary transition-colors py-2">About</Link>

              {/* Products Mega Menu */}
              <div
                className="relative"
                ref={megaRef}
                onMouseEnter={openMenu}
                onMouseLeave={closeMenu}
              >
                <button
                  onClick={() => setProductsOpen(p => !p)}
                  className="flex items-center gap-1 hover:text-primary transition-colors py-2 focus:outline-none"
                  aria-expanded={productsOpen}
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Mega Menu Panel */}
                {productsOpen && (
                  <div
                    onMouseEnter={openMenu}
                    onMouseLeave={closeMenu}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white text-foreground shadow-2xl rounded-2xl border border-border p-6 grid grid-cols-4 gap-6 z-50"
                    style={{ width: "min(800px, 80vw)" }}
                  >
                    {megaMenuData.map((cat) => (
                      <div key={cat.label} className="space-y-3">
                        <Link
                          href={cat.href}
                          className="flex items-center gap-2 text-primary font-bold text-sm hover:underline underline-offset-4"
                          onClick={() => setProductsOpen(false)}
                        >
                          <span className="p-1.5 bg-primary/10 rounded-md">{cat.icon}</span>
                          {cat.label}
                        </Link>
                        <ul className="space-y-1.5">
                          {cat.items.map(item => (
                            <li key={item}>
                              <Link
                                href={cat.href}
                                className="block text-xs text-muted-foreground hover:text-primary transition-colors font-medium py-0.5"
                                onClick={() => setProductsOpen(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/industries" className="hover:text-primary transition-colors py-2">Industries</Link>
              <Link href="/brands" className="hover:text-primary transition-colors py-2">Brands</Link>
              <Link href="/services" className="hover:text-primary transition-colors py-2">Services</Link>
              <Link href="/support" className="hover:text-primary transition-colors py-2">Support</Link>
              <Link href="/blog" className="hover:text-primary transition-colors py-2">Blog</Link>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              {/* Search toggle */}
              <button
                onClick={() => setSearchOpen(s => !s)}
                className={`p-2 rounded-full transition-colors ${solidNav ? "hover:bg-muted text-foreground" : "hover:bg-white/10 text-white"}`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart toggle */}
              <button
                onClick={() => setCartOpen(true)}
                className={`p-2 rounded-full transition-all relative ${solidNav ? "hover:bg-muted text-foreground" : "hover:bg-white/10 text-white"} cursor-pointer`}
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {mounted && cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-black rounded-full flex items-center justify-center animate-bounce shadow-md">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Actions (Cart + Menu Toggle) */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                onClick={() => setCartOpen(true)}
                className={`p-2 rounded-full transition-all relative ${solidNav ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"} cursor-pointer`}
                aria-label="Cart"
              >
                <ShoppingCart className="w-5.5 h-5.5" />
                {mounted && cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-primary text-white text-[9px] font-black rounded-full flex items-center justify-center shadow-md">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className={`p-2 rounded-lg transition-colors ${solidNav ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"}`}
                onClick={() => setMobileOpen(o => !o)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar (expanded) */}
        {searchOpen && (
          <div className="border-t border-border bg-white px-4 md:px-8 py-3">
            <div className="container mx-auto flex items-center gap-3">
              <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Search products, categories, brands..."
                className="flex-1 text-sm font-medium outline-none bg-transparent text-foreground placeholder:text-muted-foreground"
              />
              <button onClick={() => setSearchOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-b border-border shadow-xl absolute top-full left-0 w-full z-40 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Products", "/products"],
                ["Industries", "/industries"],
                ["Brands", "/brands"],
                ["Services", "/services"],
                ["Support", "/support"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="block px-4 py-3 rounded-xl text-foreground font-semibold hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}

            </div>
          </div>
        )}
      </nav>

      {/* Overlay to close mega menu */}
      {productsOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setProductsOpen(false)}
        />
      )}

      {/* Cart Drawer Panel */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
