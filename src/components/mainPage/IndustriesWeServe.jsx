"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    title: "Residential",
    description:
      "Homes, villas, apartments and renovation projects.",
    image: "/projectsImages/project-1.jpg",
  },
  {
    title: "Commercial",
    description:
      "Corporate offices, showrooms and business spaces.",
    image: "/projectsImages/commercial.jpg",
  },
  {
    title: "Hospitality",
    description:
      "Hotels, resorts, restaurants and banquet halls.",
    image: "/projectsImages/Hospitality1.jpg",
  },
  {
    title: "Education",
    description:
      "Schools, colleges and training institutions.",
    image: "/projectsImages/education.jpg",
  },
  {
    title: "Healthcare",
    description:
      "Hospitals, clinics and healthcare facilities.",
    image: "/projectsImages/hospitality.jpg",
  },
  {
    title: "Retail",
    description:
      "Retail stores, malls and customer-facing spaces.",
    image: "/projectsImages/retail.jpg",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-[#D9D4CB] px-4 py-2 text-sm font-medium text-[#264653]">
              Industries We Serve
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#264653] md:text-6xl">
              Solutions For
              <br />
              Every Industry
            </h2>
          </div>

          <p className="max-w-xl text-lg text-slate-600">
            From residential interiors to commercial
            developments and institutional projects,
            Vastro delivers wall solutions tailored
            to every environment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <Link
              href="/industries"
              key={industry.title}
              className="group overflow-hidden rounded-[32px] border border-[#E5DED2] bg-[#F8F6F1]"
            >
              <div className="relative h-[340px] overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#264653] transition duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={22} />
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-white/80">
                    {industry.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Highlight Strip */}
        <div className="mt-20 rounded-[32px] bg-[#264653] p-10 lg:p-14">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-5xl font-bold text-white">
                500+
              </h3>

              <p className="mt-2 text-white/70">
                Spaces Transformed
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-white">
                50+
              </h3>

              <p className="mt-2 text-white/70">
                Dealer & Partner Network
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-white">
                100%
              </h3>

              <p className="mt-2 text-white/70">
                End-To-End Installation Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}