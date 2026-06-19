"use client";

import Image from "next/image";

const posters = [
  "/posterImages/interior-1.jpg",
  "/posterImages/exterior-1.jpg",
  "/posterImages/pvc-panel.jpg",
  "/posterImages/wpc-panel.jpg",
  "/posterImages/acoustic.jpg",
  "/posterImages/facade.jpg",
];

export default function AnimatedPoster() {
  const duplicated = [...posters, ...posters];

  return (
    <section className="relative overflow-hidden bg-[#F6F4EF] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="rounded-full border border-[#D7D2C8] px-4 py-2 text-sm font-medium text-[#264653]">
            Modern Wall Solutions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#264653] md:text-6xl">
            Built For Modern
            <br />
            Indian Spaces
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Premium interior panels, exterior cladding, acoustic solutions and
            custom wall systems.
          </p>
        </div>
      </div>

      {/* hardware acceleration wrapper */}
      <div className="relative w-full overflow-hidden transform-gpu backface-visibility-hidden">
        <div className="animate-scroll flex gap-6">
          {duplicated.map((src, index) => (
            <div
              key={index}
              className="relative h-[380px] w-[300px] shrink-0 overflow-hidden rounded-[32px] bg-slate-200 shadow-xl transform-gpu"
            >
              <Image 
                src={src} 
                alt="Modern Wall Solutions Layout" 
                fill 
                className="object-cover" 
                sizes="300px"
                // Eagerly load only the first 4 images that appear on screen immediately
                loading={index < 4 ? "eager" : "lazy"} 
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">Premium Solutions</h3>
                <p className="text-sm text-white/80">Modern architecture</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-scroll {
          width: max-content;
          display: flex;
          gap: 24px;
          /* translate3d and will-change force your MacBook/Mobile GPU to process the movement instead of the CPU */
          transform: translate3d(0, 0, 0);
          will-change: transform;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
