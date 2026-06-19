"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F6F4EF]">
      {/* Architectural Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#264653_1px,transparent_0)] bg-[size:28px_28px]" />
      </div>

      {/* Curved Divider */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 120"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path fill="#ffffff" d="M0,0 C300,120 1140,0 1440,80 L1440,0 Z" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* CTA Section */}

        {/* Stats */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 border-y border-[#D9D4CB] py-14 md:grid-cols-4">
            {[
              ["500+", "Projects Completed"],
              ["10+", "Years Durability"],
              ["50+", "Dealer Partners"],
              ["100%", "Installation Support"],
            ].map(([value, label]) => (
              <div key={label}>
                <h3 className="text-4xl font-bold text-[#264653]">{value}</h3>

                <p className="mt-2 text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#264653] text-2xl font-bold text-white">
                  <Image
                    src={"/logovastro.png"}
                    className="rounded-2xl"
                    width={70}
                    height={70}
                    alt="Vastro Logo"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-[#264653]">VASTRO</h2>

                  <p className="text-slate-500">Premium Wall Solutions</p>
                </div>
              </div>

              <p className="mt-6 max-w-md leading-relaxed text-slate-600">
                Transforming homes, offices, hotels and commercial spaces
                through innovative wall systems designed for durability,
                aesthetics and performance in Indian conditions.
              </p>

              {/* Product Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "PVC Panels",
                  "WPC Panels",
                  "Acoustic Solutions",
                  "Exterior Cladding",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#D9D4CB] bg-white px-4 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8 flex gap-3">
                <a
                  href="mailto:Vastro136@gmail.com "
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#264653] shadow-sm transition hover:-translate-y-1"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-[#264653]">
                Company
              </h3>

              <ul className="space-y-4 text-slate-600">
                <li>
                  <Link href="/about" className="hover:text-[#2A9D8F]">
                    About Us
                  </Link>
                </li>

               

                <li>
                  <Link href="/industries" className="hover:text-[#2A9D8F]">
                    Industries
                  </Link>
                </li>


                <li>
                  <Link href="/contact" className="hover:text-[#2A9D8F]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-[#264653]">
                Products
              </h3>

              <ul className="space-y-4 text-slate-600">
                <li>
                  <Link href="/industries">PVC Wall Panels</Link>
                </li>

                <li>
                  <Link href="/industries">WPC Wall Panels</Link>
                </li>

                <li>
                  <Link href="/industries">Acoustic Panels</Link>
                </li>

                <li>
                  <Link href="/industries">
                    Marble Finish Panels
                  </Link>
                </li>

                <li>
                  <Link href="/industries">
                    Exterior Cladding
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-[#264653]">
                Contact
              </h3>

              <div className="space-y-5">
                <div className="flex gap-3">
                  <Phone size={18} className="mt-1 text-[#2A9D8F]" />

                  <a href={"tel:+918076942798"} className="text-slate-600">+91 80769 42798</a>
                </div>

                <div className="flex gap-3">
                  <Mail size={18} className="mt-1 text-[#2A9D8F]" />

                  <a href={"mailto:contact@vastro.in"} className="text-slate-600">Vastro136@gmail.com</a>
                </div>

                <div className="flex gap-3">
                  <MapPin size={18} className="mt-1 text-[#2A9D8F]" />

                  <p className="text-slate-600">
                    Shahjahanpur, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#264653] px-5 py-3 font-semibold text-white transition hover:bg-[#1F3A56]"
              >
                Request Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#D9D4CB]">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
            <p>
              © {new Date().getFullYear()} Vastro Private Limited. All Rights
              Reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
