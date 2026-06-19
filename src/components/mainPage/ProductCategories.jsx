"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "PVC Wall Panels",
    description:
      "Elegant, waterproof and low-maintenance panels for modern interiors.",
    image: "/categories/pvc-panel.jpg",
    href: "/industries",
  },
  {
    title: "WPC Wall Panels",
    description:
      "Premium wood-plastic composite panels built for durability and aesthetics.",
    image: "/categories/wpc-panel.jpg",
    href: "/industries",
  },
  {
    title: "Acoustic Panels",
    description:
      "Enhance comfort and reduce noise in offices, hotels and institutions.",
    image: "/categories/acoustic-panel.jpg",
    href: "/industries",
  },
  {
    title: "Exterior Cladding",
    description:
      "Weather-resistant façade systems engineered for Indian climates.",
    image: "/categories/exterior-cladding.jpg",
    href: "/industries",
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="inline-flex rounded-full border border-[#D9D4CB] px-4 py-2 text-sm font-medium text-[#264653]">
              Product Portfolio
            </span>

            <h2 className="mt-6 max-w-3xl text-4xl font-bold text-[#264653] md:text-6xl">
              Solutions Designed
              <br />
              For Every Space
            </h2>
          </div>

          <p className="max-w-lg text-lg text-slate-600">
            Discover premium wall systems engineered
            to improve aesthetics, durability and
            long-term maintenance performance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group overflow-hidden rounded-[32px] border border-[#E7E2D8] bg-[#F8F6F1]"
            >
              {/* Image */}
              <div className="relative h-[320px] overflow-hidden">
                <Image
                priority
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#264653] transition group-hover:rotate-45">
                  <ArrowUpRight size={22} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#264653]">
                  {category.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {category.description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-semibold text-[#2A9D8F]">
                  Explore Category
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid gap-8 border-t border-[#E5DED2] pt-12 md:grid-cols-4">
          {[
            ["100+", "Panel Designs"],
            ["10+", "Years Durability"],
            ["3x", "Faster Installation"],
            ["100%", "After-Sales Support"],
          ].map(([value, label]) => (
            <div key={label}>
              <h3 className="text-4xl font-bold text-[#264653]">
                {value}
              </h3>

              <p className="mt-2 text-slate-600">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}