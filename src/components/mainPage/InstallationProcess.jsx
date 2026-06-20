"use client";
import {
  ClipboardCheck,
  MapPinned,
  Hammer,
  ShieldCheck,
  ArrowDown,
  CreditCard,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Discuss your project requirements, design preferences and budget with our experts.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Site Assessment",
    description:
      "Our team visits your site, takes measurements and recommends the best wall solutions.",
    icon: MapPinned,
  },
  {
    number: "03",
    title: "Professional Installation",
    description:
      "Fast, clean and precise installation by trained professionals with minimal disruption.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "After-Sales Support",
    description:
      "Ongoing support and guidance to ensure long-lasting performance and satisfaction.",
    icon: ShieldCheck,
  },
];

export default function InstallationProcess() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-[#D9D4CB] px-4 py-2 text-sm font-medium text-[#264653]">
            How It Works
          </span>
          <h2 className="mt-6 text-4xl font-bold text-[#264653] md:text-6xl">
            From Consultation <br /> To Installation
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            A seamless experience designed to make your renovation or construction project faster, easier and stress-free.
          </p>
        </div>

        {/* Process */}
        <div className="mt-20 grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <div className="group h-full rounded-[32px] border border-[#E5DED2] bg-[#FAF8F3] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* Number */}
                  <div className="text-6xl font-bold text-[#D9D4CB]">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#264653] text-white">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#264653]">
                    {step.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>

                {/* Connector */}
                {index !== steps.length - 1 && (
                  <div className="absolute -right-6 top-1/2 hidden lg:block">
                    <ArrowDown className="rotate-[-90deg] text-[#2A9D8F]" size={30} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-24 overflow-hidden rounded-[36px] bg-gradient-to-r from-[#264653] to-[#2A9D8F] p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-3xl font-bold text-white md:text-4xl">
                Installation Included. <br /> No Hidden Hassles.
              </h3>
              <p className="mt-5 text-lg text-white/80">
                Unlike traditional material suppliers, Vastro provides complete project execution from planning to installation.
              </p>
              
              {/* EMI Option Heading */}
              <div className="mt-6 flex items-center gap-2 text-xl font-semibold text-white/90">
                <CreditCard size={24} className="text-[#E5DED2]" />
                <h4>EMI option also available</h4>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-white"> 3x </h4>
                <p className="mt-2 text-white/70"> Faster Renovation </p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white"> 100% </h4>
                <p className="mt-2 text-white/70"> Installation Support </p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white"> 10+ </h4>
                <p className="mt-2 text-white/70"> Years Durability </p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white"> 500+ </h4>
                <p className="mt-2 text-white/70"> Spaces Improved </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
