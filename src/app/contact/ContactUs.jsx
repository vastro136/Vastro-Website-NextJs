"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Building2 } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    msg: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formButton = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbynvGe5SlFTWcRQdkYaD5ab17PT5PdbA6h-Wjam3QLeMYIGecgNo82pE77erDCMi3-r/exec";
      const { email, phone, name, projectType, msg } = contactForm;
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",            
        },
        body: JSON.stringify({ email, phone, name, projectType, msg }),                
      });

      if (!response.ok) {
        throw new Error("Server response was not OK");
      }

      setStatus("Success! Your message was saved.");

      setContactForm({
        name: "",
        email: "",
        projectType: "",
        msg: "",
        phone: "",
      });
    } catch (error) {
      setStatus("Error sending message. Please try again.");
      console.error("Submission error details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#F8F6F1]">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#26465310_1px,transparent_1px),linear-gradient(to_bottom,#26465310_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <span className="inline-flex rounded-full border border-[#D9D4CB] px-4 py-2 text-sm font-medium text-[#264653]">
            Contact Vastro
          </span>

          <h1 className="mt-6 text-5xl font-bold text-[#264653] md:text-7xl">
            Let's Discuss
            <br />
            Your Next Project
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-600">
            Whether you're renovating a home, designing a commercial space, or
            looking for dealership opportunities, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Phone,
                title: "Call Us",
                value: "+91 8076942798",
                href: "tel:+918076942798",
              },
              {
                icon: Mail,
                title: "Email",
                value: "Vastro136@gmail.com ",
                href: "mailto:Vastro136@gmail.com ",
              },
              {
                icon: MapPin,
                title: "Office",
                value: "Shahjahanpur, Uttar Pradesh",
                href: "#",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  className="rounded-[28px] border border-[#E5DED2] bg-white p-8"
                  href={item.href}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#264653] text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#264653]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600">{item.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="inline-flex rounded-full border border-[#D9D4CB] px-4 py-2 text-sm font-medium text-[#264653]">
                Get In Touch
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#264653]">
                Request A Free Consultation
              </h2>

              <p className="mt-6 text-lg text-slate-600">
                Tell us about your project and our experts will recommend the
                most suitable wall panel solutions for your space.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <Building2 className="text-[#2A9D8F]" size={22} />

                  <div>
                    <h4 className="font-semibold text-[#264653]">
                      Residential Projects
                    </h4>

                    <p className="text-slate-600">
                      Homes, villas, apartments and renovations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Building2 className="text-[#2A9D8F]" size={22} />

                  <div>
                    <h4 className="font-semibold text-[#264653]">
                      Commercial Projects
                    </h4>

                    <p className="text-slate-600">
                      Offices, showrooms, retail and hospitality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Building2 className="text-[#2A9D8F]" size={22} />

                  <div>
                    <h4 className="font-semibold text-[#264653]">
                      Dealer Partnerships
                    </h4>

                    <p className="text-slate-600">
                      Join our growing dealer network.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-[32px] border border-[#E5DED2] text-black bg-white p-8 lg:p-10">
              <form onSubmit={formButton} className="space-y-5">
                <div>
                  <label className="mb-2 block font-medium text-[#264653]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="w-full rounded-xl border border-[#E5DED2] px-4 py-3 outline-none focus:border-[#2A9D8F]"
                    name="name"
                    value={contactForm.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-[#264653]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    className="w-full rounded-xl border border-[#E5DED2] px-4 py-3 outline-none focus:border-[#2A9D8F]"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-[#264653]">
                    Email
                  </label>

                  <input
                    type="email"
                    className="w-full rounded-xl border border-[#E5DED2] px-4 py-3 outline-none focus:border-[#2A9D8F]"
                    name="email"
                    onChange={handleChange}
                    value={contactForm.email}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-[#264653]">
                    Project Type
                  </label>

                  <select
                    value={contactForm.projectType}
                    required
                    className="w-full rounded-xl border text-black border-[#E5DED2] px-4 py-3 outline-none focus:border-[#2A9D8F]"
                    name="projectType"
                    onChange={handleChange}
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Hotel</option>
                    <option>School</option>
                    <option>Hospital</option>
                    <option>Dealer Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-medium text-[#264653]">
                    Message
                  </label>

                  <textarea
                    value={contactForm.msg}
                    rows={5}
                    className="w-full rounded-xl border border-[#E5DED2] px-4 py-3 outline-none focus:border-[#2A9D8F]"
                    name="msg"
                    required
                    onChange={handleChange}
                  />
                </div>

                {status && (
                  <div className="text-green-500 p-2 border hover:bg-green-100 font-semibold rounded-md">
                    {status}
                  </div>
                )}

                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#264653] px-6 py-4 font-semibold text-white transition hover:bg-[#1F3A56]">
                  {loading ? "Loading..." : "Submit Inquiry"}
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-4xl font-bold text-[#264653]">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-5">
            {[
              { que: "Do you provide installation services?", ans: "Yes" },
              { que: "Do you work outside Uttar Pradesh?", ans: "Yes" },
              { que: "Can I become a Vastro dealer?", ans: "Yes" },
            ].map((item) => (
              <div
                key={item.que}
                className="rounded-2xl border border-[#E5DED2] bg-white p-6"
              >
                <h3 className="font-semibold text-[#264653]">{item.que}</h3>

                <h3 className="font-semibold text-[#264653]">{item.ans}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[40px] bg-[#264653] p-12 text-center">
            <h2 className="text-4xl font-bold text-white">
              Ready To Transform Your Space?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-white/80">
              Talk to our team today and get expert guidance for your next wall
              panel project.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <a
                href="tel:+918076942798"
                className="rounded-xl bg-white px-6 py-4 font-semibold text-[#264653]"
              >
                Call Now
              </a>

              <a
                href="mailto:Vastro136@gmail.com"
                className="rounded-xl border border-white/20 px-6 py-4 font-semibold text-white"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
