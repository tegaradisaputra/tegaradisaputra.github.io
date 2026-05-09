import React from "react";

export default function Projects() {
  return (
    <section id="project" className="py-16 md:py-24 px-6 md:px-12 lg:px-28 bg-surface">
      <div className="w-full">
        <div className="flex justify-start items-center mb-16 gap-4 text-text-muted text-xs tracking-[0.35em] uppercase font-family-mono">
          <span className="text-accent">03</span>
          <span>Projects</span>
          <hr className="flex-1 border-t border-text-muted/30" />
        </div>
      </div>

      <div className="max-w-4xl">
        <h2 className="font-family-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-medium text-text-primary">
          Dua project, <br className="hidden md:block" />
          satu standar kode.
        </h2>

        <p className="mt-8 text-lg text-text-muted leading-relaxed">
          Klik project untuk melihat detail implementasi dan cuplikan kode nyata.
        </p>
      </div>

      <div className="mt-20 border-t border-text-muted/20"></div>

      <div className="relative flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 py-10 lg:py-14 border-b border-text-muted/20 group cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f3e8df] via-[#f8f3ef] to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>

        <div className="lg:col-span-1 relative z-10">
          <span className="font-family-serif text-4xl md:text-6xl italic text-text-muted/40 transition-transform duration-500 ease-out group-hover:translate-x-3">
            01
          </span>
        </div>

        <div className="lg:col-span-8 relative z-10 transition-transform duration-500 ease-out lg:group-hover:translate-x-5">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-family-mono">
            Rest API · Financing Management System
          </p>

          <h3 className="mt-4 text-4xl font-semibold font-family-sans text-text-primary transition-colors duration-300 group-hover:text-accent">
            LKS 2026 – Digital Pembiayaan UMKM Nasional
          </h3>

          <p className="mt-4 text-base md:text-lg text-text-muted leading-relaxed max-w-3xl">
            Backend sistem pengajuan pembiayaan berbasis REST API untuk simulasi kompetisi
            LKS 2026. Mencakup autentikasi user, verifikasi bisnis, pengajuan financing,
            installment management, application logs, serta arsitektur modular berbasis
            Controller, Service, dan Resource API untuk menjaga scalability dan maintainability.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Laravel 11",
              "MySQL",
              "Sanctum Auth",
              "Business Verification",
              "Financing System",
              "REST API",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-text-muted/20 text-xs text-text-muted font-family-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 relative z-10 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-between gap-4 mt-4 lg:mt-0">
          <span className="px-4 md:px-5 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 text-[10px] md:text-xs uppercase tracking-[0.25em] font-family-mono whitespace-nowrap">
            ✓ Completed
          </span>

          <div className="flex gap-6 lg:mt-20 text-[10px] md:text-xs uppercase tracking-[0.25em] font-family-mono">
            <a
              href="https://github.com/tegaradisaputra/LKS2026_TegarAdiSaputra_SMKN1Pajangan_Backend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted border-b border-transparent hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Github
            </a>
          </div>
        </div>
      </div>


      <div className="relative flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 py-10 lg:py-14 border-b border-text-muted/20 group cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f3e8df] via-[#f8f3ef] to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>

        <div className="lg:col-span-1 relative z-10">
          <span className="font-family-serif text-4xl md:text-6xl italic text-text-muted/40 transition-transform duration-500 ease-out group-hover:translate-x-3">
            02
          </span>
        </div>

        <div className="lg:col-span-8 relative z-10 transition-transform duration-500 ease-out lg:group-hover:translate-x-5">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-family-mono">
            Laravel Livewire · Employee Management System
          </p>

          <h3 className="mt-4 text-4xl font-semibold font-family-sans text-text-primary transition-colors duration-300 group-hover:text-accent">
            Employee Data Management Dashboard
          </h3>

          <p className="mt-4 text-base md:text-lg text-text-muted leading-relaxed max-w-3xl">
            Sistem manajemen data karyawan berbasis Laravel dan Livewire dengan
            implementasi CRUD dinamis tanpa reload halaman. Mencakup employee records
            management, real-time form interaction, validation, dashboard admin, serta
            integrasi server-driven UI untuk workflow yang lebih responsif. Project ini
            menekankan fundamental fullstack Laravel ecosystem melalui Blade, Livewire,
            dan relational database architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Laravel",
              "Livewire",
              "MySQL",
              "Blade",
              "CRUD System",
              "Dynamic UI",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-text-muted/20 text-xs text-text-muted font-family-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 relative z-10 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-between gap-4 mt-4 lg:mt-0">
          <span className="px-4 md:px-5 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 text-[10px] md:text-xs uppercase tracking-[0.25em] font-family-mono whitespace-nowrap">
            ✓ Completed
          </span>

          <div className="flex gap-6 lg:mt-20 text-[10px] md:text-xs uppercase tracking-[0.25em] font-family-mono">
            <a
              href="https://github.com/tegaradisaputra/laravel-crud-employees"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted border-b border-transparent hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Github
            </a>
          </div>
        </div>
      </div>



    </section>
  );
}