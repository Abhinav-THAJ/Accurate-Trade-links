"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useCartStore } from "@/lib/cartStore";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { ChevronRight, ShieldCheck, CreditCard, Landmark, Truck, ShoppingBag, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// Helper static database for Buy Now lookup
const allProducts = [
  { id: 1, name: "CAS PR-II", category: "Weighing", sub: "Retail Scales", brand: "CAS", price: 15400, image: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?q=80&w=600" },
  { id: 2, name: "CAS ER Plus", category: "Weighing", sub: "Retail Scales", brand: "CAS", price: 18900, image: "https://images.unsplash.com/photo-1608220179579-399ca506a59b?q=80&w=600" },
  { id: 3, name: "CAS SW-II", category: "Weighing", sub: "Retail Scales", brand: "CAS", price: 12200, image: "https://images.unsplash.com/photo-1590233649036-ecd12c8b827e?q=80&w=600" },
  { id: 4, name: "Platform Scale HD-150", category: "Weighing", sub: "Platform Scales", brand: "Essae", price: 24500, image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=600" },
  { id: 5, name: "Analytical Balance", category: "Weighing", sub: "Lab Scales", brand: "Citizen", price: 48900, image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=600" },
  { id: 6, name: "Touch Billing System Pro", category: "Billing", sub: "Android Touch Billing", brand: "Epson", price: 34800, image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600" },
  { id: 7, name: "Barcode Scanner HS-500", category: "Billing", sub: "Barcode Scanners", brand: "Honeywell", price: 7600, image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600" },
  { id: 8, name: "Thermal Receipt Printer", category: "Billing", sub: "POS Printers", brand: "Epson", price: 8200, image: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=600" },
  { id: 9, name: "Vacuum Sealer VS-300", category: "Sealing", sub: "Vacuum Sealing", brand: "ATL", price: 14900, image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=600" },
  { id: 10, name: "Band Sealer BS-600", category: "Sealing", sub: "Band Sealing", brand: "ATL", price: 28500, image: "https://images.unsplash.com/photo-1621415494297-c87a552bfdbb?q=80&w=600" },
];

function CheckoutContent() {
  const searchParams = useSearchParams();

  const { items: cartItems, getTotalPrice, clearCart } = useCartStore();

  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    gstin: "",
    address: "",
    city: "",
    state: "Kerala",
    pincode: "",
    payment: "cod",
  });

  const [buyNowItem, setBuyNowItem] = useState<(typeof allProducts)[0] & { quantity: number } | null>(null);

  useEffect(() => {
    setMounted(true);
    const buyNowId = searchParams.get("buyNow");
    if (buyNowId) {
      const product = allProducts.find((p) => p.id === parseInt(buyNowId));
      if (product) {
        setBuyNowItem({ ...product, quantity: 1 });
      }
    }
  }, [searchParams]);

  if (!mounted) return null;

  // Decide checkout list and sums
  const checkoutItems = buyNowItem ? [buyNowItem] : cartItems;
  
  if (checkoutItems.length === 0 && !success) {
    return (
      <main className="min-h-screen bg-muted/30">
        <Navbar />
        <div className="container mx-auto px-6 py-32 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground mb-4">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold text-foreground mb-2">No items to checkout</h2>
          <p className="text-muted-foreground font-light max-w-sm mb-6">
            Please add items to your cart first or select a product to buy.
          </p>
          <Button asChild className="rounded-full bg-primary text-white font-bold px-8">
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </main>
    );
  }

  const subtotal = buyNowItem ? buyNowItem.price : getTotalPrice();
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.city || !formData.pincode) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    // Simulate enterprise order processing
    setTimeout(() => {
      setOrderId("ATL-2026-" + Math.floor(100000 + Math.random() * 900000));
      setLoading(false);
      setSuccess(true);
      if (!buyNowItem) {
        clearCart();
      }
    }, 1500);
  };

  if (success) {
    return (
      <main className="min-h-screen bg-muted/30 flex flex-col justify-between">
        <Navbar />
        <div className="container mx-auto px-6 py-32 flex justify-center items-center flex-1">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-2xl bg-white border border-border rounded-3xl p-8 lg:p-12 shadow-2xl text-center"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-3">Order Confirmed!</h1>
            <p className="text-muted-foreground font-light text-lg mb-6 leading-relaxed">
              Thank you for choosing Accurate Trade Links. Your order has been placed successfully and is being processed by our commercial sales division.
            </p>

            <div className="bg-muted/50 border border-border rounded-2xl p-6 mb-8 text-left space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Order ID</span>
                <span className="font-mono font-extrabold text-foreground text-sm">{orderId}</span>
              </div>
              <div className="space-y-3">
                {checkoutItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-foreground">
                      {item.name} <span className="text-muted-foreground font-normal">× {item.quantity}</span>
                    </span>
                    <span className="font-extrabold text-foreground">₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-3 space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>GST (18%)</span>
                  <span>₹{gst.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-primary pt-2 border-t border-dashed border-border">
                  <span>Grand Total</span>
                  <span>₹{total.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-8 text-left flex gap-4">
              <Truck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-foreground text-sm mb-1">Commercial Shipping SLA</h4>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  ATL guarantees dispatch within 24-48 business hours with certified expert on-site installation across all districts of Kerala. A sales representative will contact you shortly to confirm the scheduled delivery slot.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-primary text-white font-bold px-8">
                <Link href="/">Return to Homepage</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-border font-semibold px-8 bg-transparent">
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/30">
      <Navbar />

      {/* Header */}
      <div className="bg-secondary text-white pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-white">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Checkout</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Checkout</h1>
          <p className="text-zinc-300 text-lg font-light max-w-2xl">
            Provide your commercial delivery, billing, and tax details to finalize your equipment order.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-12">
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-10">
          
          {/* Form Side */}
          <div className="flex-1 space-y-6">
            <div className="bg-white rounded-3xl border border-border p-8 shadow-sm">
              <h2 className="text-xl font-extrabold text-foreground mb-6 pb-3 border-b border-border">1. Commercial Shipping Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 font-medium"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter corporate or personal email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Company Name (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter company/store name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">GSTIN (Optional)</label>
                  <input
                    type="text"
                    name="gstin"
                    value={formData.gstin}
                    onChange={handleInputChange}
                    placeholder="22AAAAA0000A1Z5"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 font-medium font-mono uppercase"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-border p-8 shadow-sm">
              <h2 className="text-xl font-extrabold text-foreground mb-6 pb-3 border-b border-border">2. Delivery Address</h2>
              
              <div className="mb-5">
                <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Complete Address *</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Flat/House no, building, street, area name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">City/Town *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Kochi, Trivandrum"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">State *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 font-semibold"
                  >
                    <option value="Kerala">Kerala</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Karnataka">Karnataka</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="695001"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-border p-8 shadow-sm">
              <h2 className="text-xl font-extrabold text-foreground mb-6 pb-3 border-b border-border">3. Payment Method</h2>
              
              <div className="space-y-4">
                {[
                  { id: "cod", title: "Cash on Delivery / Pay on Install", desc: "Pay with Cash or UPI upon expert delivery and NABL calibration.", icon: <Truck className="w-5 h-5" /> },
                  { id: "bank", title: "Corporate Bank Transfer (RTGS / NEFT / IMPS)", desc: "Transfer directly to ATL commercial bank account. Invoice sent immediately.", icon: <Landmark className="w-5 h-5" /> },
                  { id: "online", title: "Online Payment (Card, NetBanking, UPI)", desc: "Pay securely via global credit cards, domestic netbanking, and UPI gateways.", icon: <CreditCard className="w-5 h-5" /> }
                ].map((p) => (
                  <label
                    key={p.id}
                    className={`flex items-start gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${formData.payment === p.id ? "border-primary bg-primary/5" : "border-border hover:border-zinc-300"}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={p.id}
                      checked={formData.payment === p.id}
                      onChange={handleInputChange}
                      className="mt-1 accent-primary"
                    />
                    <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-zinc-700 flex-shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{p.title}</h4>
                      <p className="text-xs text-muted-foreground font-light mt-1">{p.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Details Sidebar */}
          <div className="w-full lg:w-96 flex-shrink-0 space-y-6">
            <div className="bg-white rounded-3xl border border-border p-6 shadow-sm sticky top-24">
              <h3 className="font-extrabold text-foreground text-lg mb-5 pb-3 border-b border-border flex items-center justify-between">
                <span>Order Summary</span>
                {buyNowItem && (
                  <span className="text-xs bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Buy Now</span>
                )}
              </h3>

              <div className="space-y-4 max-h-[300px] overflow-y-auto mb-6 pr-2">
                {checkoutItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-14 h-14 rounded-lg bg-muted border border-border overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-0.5">
                      <div>
                        <h4 className="font-bold text-foreground text-xs line-clamp-1">{item.name}</h4>
                        <p className="text-[10px] text-muted-foreground font-semibold uppercase">{item.brand} • Qty {item.quantity}</p>
                      </div>
                      <span className="font-extrabold text-foreground text-xs">₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-border mb-6">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-semibold text-foreground">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Commercial GST (18%)</span>
                  <span className="font-semibold text-foreground">₹{gst.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>On-site Installation & SLA</span>
                  <span className="font-bold text-green-600">FREE</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between text-base font-extrabold text-foreground">
                  <span>Total Amount</span>
                  <span className="text-primary text-xl">₹{total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-full bg-primary text-white hover:bg-primary/90 font-bold gap-2 shadow-lg shadow-primary/20 flex items-center justify-center cursor-pointer"
              >
                {loading ? "Processing..." : "Place Commercial Order"}
              </Button>

              <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-muted-foreground font-semibold uppercase">
                <ShieldCheck className="w-4 h-4 text-green-600" /> SECURE SSL ENCRYPTION
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="font-bold text-lg">Loading checkout information...</div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
