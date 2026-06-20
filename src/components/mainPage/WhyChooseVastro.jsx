"use client";

import {
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Clock3,
  Droplets,
  PaintBucket,
  Building2,
  Wrench,
  CreditCard,
} from "lucide-react";

const comparisons = [
  {
    traditional: "Wall Cracks & Repairs",
    vastro: "Durable Panel Systems",
  },
  {
    traditional: "Frequent Repainting",
    vastro: "Long-Lasting Finishes",
  },
  {
    traditional: "Messy Renovation Process",
    vastro: "Clean Installation",
  },
  {
    traditional: "High Maintenance Costs",
    vastro: "Low Maintenance Solutions",
  },
  {
    traditional: "Long Project Timelines",
    vastro: "3x Faster Installation",
  },
];

const features = [
  {
    icon: Droplets,
    title: "Moisture Resistant",
    description:
      "Advanced protection against dampness, seepage and fungal growth.",
  },
  {
    icon: ShieldCheck,
    title: "Built To Last",
    description:
      "Engineered materials designed for long-term durability.",
  },
  {
    icon: Clock3,
    title: "Faster Installation",
    description:
      "Quick renovation timelines without disrupting daily life.",
  },
  {
    icon: PaintBucket,
    title: "Premium Finishes",
    description:
      "Luxury wood, marble and decorative textures.",
  },
  {
    icon: Building2,
    title: "Commercial Ready",
    description:
      "Ideal for offices, hotels, schools and retail spaces.",
  },
  {
    icon: Wrench,
    title: "Complete Service",
    description:
      "Consultation, supply, installation and support under one roof.",
  },
];

export default function WhyChooseVastro() {
  return (
    <section className="bg-[#FAF8F3] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-[#D9D4CB] px-4 py-2 text-sm font-medium text-[#264653]">
            Why Choose Vastro
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#264653] md:text-6xl">
            A Smarter Alternative
            <br />
            To Traditional Walls
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We combine innovative wall systems, premium aesthetics
            and professional installation to create beautiful
            spaces that last longer and require less maintenance.
          </p>
        </div>

        {/* Comparison */}
        <div className="mt-20 overflow-hidden rounded-[32px] border border-[#E7E2D8] bg-white">
          <div className="grid grid-cols-2 border-b border-[#E7E2D8]">
            <div className="bg-[#F8F6F1] p-6">
              <h3 className="text-xl font-bold text-slate-700">
                Traditional Renovation
              </h3>
            </div>

            <div className="bg-[#264653] p-6">
              <h3 className="text-xl font-bold text-white">
                Vastro Solutions
              </h3>
            </div>
          </div>

          {comparisons.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 border-b border-[#E7E2D8] last:border-none"
            >
              <div className="flex items-center gap-3 p-6">
                <XCircle className="text-red-500" size={20} />
                <span className="text-slate-700">
                  {item.traditional}
                </span>
              </div>

              <div className="flex items-center gap-3 p-6">
                <CheckCircle2
                  className="text-[#2A9D8F]"
                  size={20}
                />

                <span className="font-medium text-[#264653]">
                  {item.vastro}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-[28px] border border-[#E7E2D8] bg-white p-8 transition duration-300 hover:-translate-y-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F6F3]">
                  <Icon
                    size={28}
                    className="text-[#2A9D8F]"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#264653]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 rounded-[32px] bg-[#264653] p-10 text-center lg:p-14">
          <h3 className="text-3xl font-bold text-white md:text-4xl">
            Designed For Indian Conditions
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">
            Our wall systems are built to withstand moisture,
            temperature changes and daily wear while maintaining
            their appearance for years.
          </p>

          {/* EMI Option Heading */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xl font-semibold text-white/90">
            <CreditCard size={24} className="text-[#2A9D8F]" />
            <h4>EMI option also available</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
