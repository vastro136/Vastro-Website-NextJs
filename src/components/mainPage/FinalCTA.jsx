"use client";

import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#F6F4EF] py-32">
      {/* Decorative Shapes */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#2A9D8F]/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#264653]/10 blur-3xl" />

      {/* Architectural Lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#264653_1px,transparent_1px),linear-gradient(to_bottom,#264653_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[48px] border border-[#E5DED2] bg-white">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-10 lg:p-16">
              <span className="inline-flex rounded-full border border-[#D9D4CB] px-4 py-2 text-sm font-medium text-[#264653]">
                Let's Build Better Spaces
              </span>

              <h2 className="mt-8 text-5xl font-bold leading-tight text-[#264653] md:text-7xl">
                Transform
                <br />
                Your Walls.
                <br />
                Transform
                <br />
                Your Space.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600">
                Whether you're renovating a home, designing a commercial space
                or planning a large-scale project, Vastro delivers premium wall
                solutions built for beauty, durability and performance.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#264653] px-7 py-4 font-semibold text-white transition hover:bg-[#1F3A56]"
                >
                  Request Free Quote
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="tel:+918076942798"
                  className="inline-flex items-center gap-3 rounded-xl border border-[#D9D4CB] px-7 py-4 font-semibold text-[#264653] hover:bg-[#F8F6F1]"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative bg-[#264653] p-10 lg:p-16">
              {/* Decorative Blocks */}
              <div className="absolute right-10 top-10 h-32 w-32 rounded-3xl border border-white/10 bg-white/5" />

              <div className="absolute bottom-10 left-10 h-40 w-40 rounded-[40px] border border-white/10 bg-white/5" />

              <div className="relative flex h-full flex-col justify-center">
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-[28px] bg-white/10 p-6 backdrop-blur-sm">
                    <h3 className="text-5xl font-bold text-white">10+</h3>

                    <p className="mt-3 text-white/70">Years Product Life</p>
                  </div>

                  <div className="rounded-[28px] bg-white/10 p-6 backdrop-blur-sm">
                    <h3 className="text-5xl font-bold text-white">3x</h3>

                    <p className="mt-3 text-white/70">Faster Installation</p>
                  </div>

                  <div className="rounded-[28px] bg-white/10 p-6 backdrop-blur-sm">
                    <h3 className="text-5xl font-bold text-white">500+</h3>

                    <p className="mt-3 text-white/70">Spaces Improved</p>
                  </div>

                  <div className="rounded-[28px] bg-white/10 p-6 backdrop-blur-sm">
                    <h3 className="text-5xl font-bold text-white">100%</h3>

                    <p className="mt-3 text-white/70">Installation Support</p>
                  </div>
                </div>

                <div className="mt-8 rounded-[28px] bg-[#2A9D8F] p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#264653]">
                      <MessageCircle size={26} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        Free Consultation Available
                      </h4>

                      <p className="text-sm text-white/80">
                        Talk to our wall solution experts today.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
