"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luxury Residential Interior",
    location: "Shahjahanpur, UP",
    category: "PVC Wall Panels",
    image: "/projectsImages/project-1.jpg",
    featured: true,
  },
  {
    title: "Corporate Office Renovation",
    location: "Lucknow, UP",
    category: "Acoustic Panels",
    image: "/projectsImages/corporate.jpg",
  },
  {
    title: "Modern Hotel Lobby",
    location: "Delhi NCR",
    category: "Decorative Panels",
    image: "/projectsImages/hotel.jpg",
  },
  {
    title: "Retail Showroom Upgrade",
    location: "Bareilly, UP",
    category: "WPC Panels",
    image: "/projectsImages/retail1.jpg",
  },
];

export default function ProjectsShowcase() {
  const featuredProject = projects.find((p) => p.featured);
  const remainingProjects = projects.filter((p) => !p.featured);

  return (
    <section className="bg-[#FAF8F3] py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-[#D9D4CB] px-4 py-2 text-sm font-medium text-[#264653]">
              Featured Projects
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#264653] md:text-6xl">
              Spaces We've
              <br />
              Transformed
            </h2>
          </div>

          <p className="max-w-xl text-lg text-slate-600">
            Explore how Vastro helps homeowners,
            businesses and institutions create
            beautiful, durable and modern spaces.
          </p>
        </div>

        {/* Featured Project */}
        <Link
          href="/industries"
          className="group block overflow-hidden rounded-[40px]"
        >
          <div className="relative h-[650px]">
            <Image
              src={featuredProject.image}
              alt={featuredProject.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
                  {featuredProject.category}
                </span>

                <h3 className="mt-5 text-3xl font-bold text-white md:text-5xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-3 text-white/80">
                  {featuredProject.location}
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#264653] transition group-hover:rotate-45">
                <ArrowUpRight size={28} />
              </div>
            </div>
          </div>
        </Link>

        {/* Secondary Projects */}
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {remainingProjects.map((project) => (
            <Link
              href="/industries"
              key={project.title}
              className="group overflow-hidden rounded-[30px] border border-[#E5DED2] bg-white"
            >
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="p-7">
                <span className="text-sm font-medium text-[#2A9D8F]">
                  {project.category}
                </span>

                <h3 className="mt-3 text-xl font-bold text-[#264653]">
                  {project.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-3 rounded-full bg-[#264653] px-8 py-4 text-white transition hover:bg-[#1F3B55]"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}