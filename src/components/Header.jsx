"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Phone, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1E3A5F] text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center text-center">
          Premium Interior & Exterior Wall Panels • Fast Installation • Pan
          India Service
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-[#0F766E] flex items-center justify-center text-white font-bold text-xl">
                <Image
                  src={"/logovastro.png"}
                  width={60}
                  height={60}
                  alt="Vastro Logo"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">VASTRO</h2>
                <p className="text-xs text-slate-500">Premium Wall Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-slate-700 hover:text-[#0F766E] font-medium transition"
              >
                Home
              </Link>

            

              {/* Products */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-slate-700 hover:text-[#0F766E] font-medium">
                  Products
                  <ChevronDown size={16} />
                </button>

                <div className="absolute left-0 top-full mt-3 w-80 rounded-2xl border border-slate-200 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="grid gap-1 p-3 text-black">
                    <Link
                      href="/industries"
                      className="rounded-xl px-4 py-3 hover:bg-slate-50"
                    >
                      PVC Wall Panels
                    </Link>

                    <Link
                      href="/industries"
                      className="rounded-xl px-4 py-3 hover:bg-slate-50"
                    >
                      WPC Panels
                    </Link>

                    <Link
                      href="/industries"
                      className="rounded-xl px-4 py-3 hover:bg-slate-50"
                    >
                      Acoustic Panels
                    </Link>

                    <Link
                      href="/industries"
                      className="rounded-xl px-4 py-3 hover:bg-slate-50"
                    >
                      Marble Finish Panels
                    </Link>

                    <Link
                      href="/industries"
                      className="rounded-xl px-4 py-3 hover:bg-slate-50"
                    >
                      Exterior Cladding
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/industries"
                className="text-slate-700 hover:text-[#0F766E] font-medium transition"
              >
                Industries
              </Link>

              

              <Link
                href="/contact"
                className="text-slate-700 hover:text-[#0F766E] font-medium transition"
              >
                Contact
              </Link>

              <Link
                href="/about"
                className="text-slate-700 hover:text-[#0F766E] font-medium transition"  
              >
                About
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* <Link
                href="/shop"
                className="flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 font-medium text-slate-700 hover:bg-slate-100 transition"
              >
                <ShoppingBag size={18} />
                Shop Panels
              </Link> */}

              <Link
                href="/contact"
                className="rounded-xl bg-[#0F766E] px-5 py-2.5 font-semibold text-white hover:bg-[#0d645d] transition"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
            >
              {mobileOpen ? <X size={28} className="text-black" /> : <Menu size={28}  className="text-black" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white text-black">
            <div className="px-4 py-5 space-y-4">
              <a href="/" className="block">Home</a>
              <Link href="/about" className="block">
                About
              </Link>

              
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full flex items-center justify-between"
              >
                Products
                <ChevronDown size={18} />
              </button>

              {productsOpen && (
                <div className="pl-4 space-y-2 text-sm text-slate-600">
                  <Link href="/industries" className="block">
                    PVC Panels
                  </Link>

                  <Link href="/industries" className="block">
                    WPC Panels
                  </Link>

                  <Link href="/industries" className="block">
                    Acoustic Panels
                  </Link>

                  <Link href="/industries" className="block">
                    Marble Finish
                  </Link>
                </div>
              )}

              <Link href="/industries" className="block">
                Industries
              </Link>

             

              <Link href="/contact" className="block">
                Contact
              </Link>

              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-[#0F766E] text-center py-3 font-semibold text-white"
                >
                  Get Quote
                </Link>

            
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 rounded-xl border py-3"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
