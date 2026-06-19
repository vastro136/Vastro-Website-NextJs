"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Users,
} from "lucide-react";

export default function AboutPage() {
  const advantages = [
    "End-to-end product + installation service",
    "Affordable premium wall solutions",
    "3x faster renovation timelines",
    "Moisture-resistant & durable materials",
    "Customized solutions for every project",
    "Dedicated after-sales support",
  ];

  const team = [
    {
      name: "Mradul Anand",
      role: "Director",
   
    },
    {
      name: "Afsar Ali",
      role: "Director",

    },
    {
      name: "Harshul Anand",
      role: "Director",
 
    },
  ];

  return (
    <main className="bg-[#F8F6F1]">
      {/* HERO */}
      <section className="relative overflow-hidden py-28 lg:py-36">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#26465310_1px,transparent_1px),linear-gradient(to_bottom,#26465310_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <span className="inline-flex rounded-full border border-[#D9D4CB] px-4 py-2 text-sm font-medium text-[#264653]">
            About Vastro
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight text-[#264653] md:text-7xl">
            Building Better
            <br />
            Spaces For
            <br />
            Modern India
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">
            Vastro is an emerging building materials and
            interior solutions company delivering premium
            wall panel systems for residential, commercial
            and institutional spaces across India.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#2A9D8F]">
                Our Story
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#264653] md:text-5xl">
                Why Vastro Exists
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                Across India, homes and commercial properties
                continue to struggle with dampness, wall cracks,
                frequent repainting and expensive maintenance.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Vastro was founded to provide a smarter,
                more durable and aesthetically superior
                alternative through innovative wall panel
                solutions engineered for Indian conditions.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Our mission is simple: modernize Indian
                spaces with premium wall systems that
                combine beauty, performance and long-term
                value.
              </p>
            </div>

            <div className="relative h-[500px] overflow-hidden rounded-[40px]">
              <Image
                src="/logovastro.png"
                alt="Vastro Project"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="absolute bottom-8 left-8 rounded-3xl bg-white p-6 shadow-xl">
                <h3 className="text-4xl font-bold text-[#264653]">
                  10+
                </h3>
                <p className="text-slate-600">
                  Years Product Durability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[40px] bg-white p-10 border border-[#E5DED2]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#264653] text-white">
                <Target />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-[#264653]">
                Our Mission
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Transform Indian homes and commercial
                spaces through smart, durable and
                affordable wall solutions that improve
                aesthetics and reduce long-term
                maintenance costs.
              </p>
            </div>

            <div className="rounded-[40px] bg-[#264653] p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#264653]">
                <Eye />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                Our Vision
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-white/80">
                Become India's leading wall panel brand,
                contributing to Viksit Bharat 2047 by
                modernizing buildings sustainably across
                Tier-2, Tier-3 cities and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[40px] bg-white border border-[#E5DED2] p-10 lg:p-16">
            <h2 className="text-4xl font-bold text-[#264653] md:text-5xl">
              What Makes Vastro Different
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {advantages.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    className="mt-1 text-[#2A9D8F]"
                    size={24}
                  />

                  <span className="text-lg text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#264653] text-white">
              <Users size={30} />
            </div>

            <h2 className="mt-6 text-4xl font-bold text-[#264653] md:text-5xl">
              Leadership Team
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-[36px] border border-[#E5DED2] bg-white"
              >
            

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#264653]">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[48px] bg-[#264653] p-12 text-center lg:p-20">
            <h2 className="text-4xl font-bold text-white md:text-6xl">
              Let's Modernize
              <br />
              Indian Spaces Together
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Discover premium wall solutions designed
              for beauty, durability and performance.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-[#264653]"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/industries"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}