"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Building2,
  Home,
  Hotel,
  Stethoscope,
} from "lucide-react";

const industries = [
  {
    title: "Residential Spaces",
    icon: Home,
    image: "/posterImages/acoustic.jpg",
    description:
      "Premium wall solutions designed for villas, apartments, luxury residences and renovation projects.",
    points: [
      "Luxury Homes",
      "Apartments",
      "Villas",
      "Renovation Projects",
    ],
  },
  {
    title: "Commercial Developments",
    icon: Building2,
    image: "/projectsImages/commercial.jpg",
    description:
      "Modern wall systems helping offices, showrooms and business spaces achieve a premium appearance.",
    points: [
      "Corporate Offices",
      "Retail Spaces",
      "Showrooms",
      "Business Centers",
    ],
  },
  {
    title: "Hotels & Hospitality",
    icon: Hotel,
    image: "/projectsImages/hospitality.jpg",
    description:
      "Create memorable guest experiences through elegant interior and exterior wall solutions.",
    points: [
      "Hotels",
      "Resorts",
      "Restaurants",
      "Banquet Halls",
    ],
  },
  {
    title: "Healthcare & Education",
    icon: Stethoscope,
    image: "/projectsImages/healthcare.jpg",
    description:
      "Durable, hygienic and low-maintenance wall systems ideal for institutions and healthcare facilities.",
    points: [
      "Hospitals",
      "Clinics",
      "Schools",
      "Universities",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-[#F4F1EA]">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <Image
          src="/posterImages/interior-1.jpg"
          alt="Industries"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
          <div className="max-w-4xl">
            <span className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white">
              Industries We Serve
            </span>

            <h1 className="mt-8 text-6xl font-bold leading-[0.95] text-white md:text-8xl">
              Designed For
              <br />
              Every Space
              <br />
              That Matters.
            </h1>

            <p className="mt-8 max-w-2xl text-xl text-white/80">
              From luxury residences to commercial
              developments, Vastro delivers premium wall
              systems engineered for aesthetics,
              durability and long-term performance.
            </p>

            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <h3 className="text-5xl font-bold text-white">
                  500+
                </h3>
                <p className="text-white/70">
                  Spaces Improved
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-white">
                  10+
                </h3>
                <p className="text-white/70">
                  Years Durability
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-white">
                  100%
                </h3>
                <p className="text-white/70">
                  Installation Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C6A46C]">
            Who We Serve
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#1F3B4D]">
            Tailored Solutions For Every Industry
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            Every sector has unique requirements.
            That's why Vastro provides customized wall
            systems designed for performance, aesthetics
            and long-term value.
          </p>
        </div>
      </section>

      {/* INDUSTRIES */}
      {industries.map((industry, index) => {
        const Icon = industry.icon;

        return (
          <section
            key={industry.title}
            className="py-20"
          >
            <div className="mx-auto max-w-7xl px-6">
              <div
                className={`grid gap-14 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-[550px] overflow-hidden rounded-[40px]">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1F3B4D] text-white">
                    <Icon size={30} />
                  </div>

                  <h2 className="mt-8 text-5xl font-bold text-[#1F3B4D]">
                    {industry.title}
                  </h2>

                  <p className="mt-8 text-lg leading-relaxed text-slate-600">
                    {industry.description}
                  </p>

                  <div className="mt-10 space-y-4">
                    {industry.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-4"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2A9D8F] text-white">
                          <Check size={16} />
                        </div>

                        <span className="font-medium text-slate-700">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* COMPARISON */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[48px] bg-[#1F3B4D] p-10 lg:p-16">
            <h2 className="text-center text-5xl font-bold text-white">
              Why Professionals Choose Vastro
            </h2>

            <div className="mt-16 overflow-hidden rounded-3xl bg-white">
              <div className="grid grid-cols-2 border-b">
                <div className="p-6 text-center font-bold text-slate-500">
                  Traditional Suppliers
                </div>

                <div className="bg-[#2A9D8F] p-6 text-center font-bold text-white">
                  Vastro
                </div>
              </div>

              {[
                [
                  "Material Only",
                  "End-to-End Product + Installation",
                ],
                [
                  "Limited Support",
                  "Dedicated Project Assistance",
                ],
                [
                  "Slow Renovation Process",
                  "3x Faster Installation",
                ],
                [
                  "Frequent Maintenance",
                  "Long-Term Durability",
                ],
                [
                  "Generic Designs",
                  "Custom Solutions",
                ],
              ].map((row) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-2 border-b last:border-b-0"
                >
                  <div className="p-6 text-center text-slate-600">
                    {row[0]}
                  </div>

                  <div className="p-6 text-center font-semibold text-[#1F3B4D]">
                    ✓ {row[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[48px] border border-[#E7DED0] bg-white p-12 text-center lg:p-20">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C6A46C]">
              Let's Build Together
            </span>

            <h2 className="mt-6 text-5xl font-bold text-[#1F3B4D] md:text-7xl">
              Let's Create
              <br />
              Exceptional Spaces
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-600">
              Whether you're planning a home, office,
              hotel, hospital or institutional project,
              Vastro provides premium wall solutions
              designed for lasting impact.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1F3B4D] px-8 py-4 font-semibold text-white"
              >
                Request Consultation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}