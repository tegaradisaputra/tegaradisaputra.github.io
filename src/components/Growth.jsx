import React from "react";

const growthItems = [
  {
    title: "Laravel Fundamentals",
    desc: "MVC, Routing, Middleware, Eloquent",
    status: "done",
  },
  {
    title: "Repository & Service Pattern",
    desc: "Clean architecture, separation of concerns",
    status: "done",
  },
  {
    title: "RESTful API Design",
    desc: "Resource, FormRequest, consistent response",
    status: "done",
  },
  {
    title: "JavaScript & Modern Frontend",
    desc: "ES6+, async flow, DOM logic, frontend architecture",
    status: "progress",
  },
  {
    title: "React.js Development",
    desc: "Component structure, props, state, hooks, UI building",
    status: "progress",
  },
  {
    title: "Testing (PHPUnit + Pest)",
    desc: "Unit test & feature test untuk backend quality",
    status: "future",
  },
  {
    title: "Docker & Containerization",
    desc: "Docker Compose, environment consistency, deployment basics",
    status: "future",
  },
];

export default function Growth() {
  const statusStyles = {
    done: "border-emerald-300 text-emerald-500",
    progress: "border-orange-300 text-orange-400",
    future: "border-neutral-300 text-neutral-400",
  };

  const statusSymbol = {
    done: "✓",
    progress: "–",
    future: "○",
  };

  return (
    <section id="growth" className="w-full bg-[#f5f1e8] px-6 md:px-12 lg:px-28 py-16 md:py-24 text-[#1d1b19]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs tracking-[0.35em] uppercase text-[#d46a3a] font-medium">
            04
          </span>
          <span className="text-xs tracking-[0.35em] uppercase text-neutral-500">
            Growth
          </span>
          <div className="h-px flex-1 bg-neutral-300" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-6xl font-serif font-semibold leading-[1.05] tracking-tight max-w-xl">
                Junior yang tahu
                <br className="hidden md:block" />
                apa yang belum
                <br className="hidden md:block" />
                <span className="italic text-[#d46a3a] font-medium">
                  dia tahu.
                </span>
              </h2>

              <p className="mt-6 md:mt-10 text-base md:text-lg text-neutral-700 leading-relaxed max-w-xl">
                Saya percaya bahwa developer yang baik adalah yang jujur soal
                gap skill-nya. Ini adalah roadmap belajar saya saat ini –
                transparan dan terus bergerak maju.
              </p>
            </div>

            <div className="mt-10 md:mt-14 border border-neutral-300 rounded-xl p-6 bg-[#f8f4ec] max-w-2xl">
              <div className="flex gap-4">
                <span className="text-xl md:text-2xl">🎯</span>
                <p className="text-sm md:text-base leading-relaxed text-neutral-800">
                  Target saya dalam 6 bulan - 1 tahun ke depan: membangun aplikasi fullstack
                  yang solid dengan Laravel + React.js, memahami JavaScript lebih
                  dalam untuk frontend modern, menggunakan Docker untuk workflow
                  development yang rapi, dan menulis testing yang konsisten agar
                  aplikasi lebih scalable serta production-ready.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            {growthItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 py-6 border-b border-neutral-300"
              >
                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-medium shrink-0 mt-1 ${statusStyles[item.status]}`}
                >
                  {statusSymbol[item.status]}
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-neutral-500 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}