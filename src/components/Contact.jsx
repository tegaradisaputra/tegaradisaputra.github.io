export default function Contact() {
  const contacts = [
    {
      label: "GitHub",
      value: "github.com/tegaradisaputra",
      href: "https://github.com/tegaradisaputra",
      icon: "GH",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/tegaradisaputra",
      href: "https://www.linkedin.com/in/tegar-adi-saputra-597b0733b/",
      icon: "in",
    },
    {
      label: "Email",
      value: "tegaradisaputra537@gmail.com",
      href: "mailto:tegaradisaputra537@gmail.com",
      icon: "✉",
    },
  ];

  const fitPoints = [
    "Sedang fokus memperkuat Laravel, REST API, dan fundamental backend",
    "Aktif belajar JavaScript, React, Docker, dan pengujian perangkat lunak (testing)",
    "Terbiasa membangun proyek sebagai proses belajar dan pengembangan keahlian",
    "Siap menerima arahan mentor, evaluasi, dan umpan balik teknis",
    "Mencari lingkungan prakerin yang mendukung pertumbuhan, disiplin, dan pengalaman nyata",
  ];

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-[#0f0b08] text-white px-6 md:px-12 lg:px-28 py-16 md:py-24"
    >
      <div className="grid lg:grid-cols-2 gap-10 items-start max-w-7xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-7xl leading-[1.1] md:leading-[0.9] font-serif font-semibold tracking-tight">
            Siap untuk <br />
            belajar & <br />
            <span className="text-orange-500 italic font-medium">
              berkembang.
            </span>
          </h1>

          <p className="mt-6 md:mt-10 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Saya adalah siswa yang sedang mempersiapkan diri untuk prakerin
            dengan fokus pada pengembangan backend. Portofolio ini menjadi
            representasi perjalanan belajar, proyek, dan kesiapan saya untuk
            mendapatkan pengalaman nyata di lingkungan kerja profesional sambil
            terus berkembang secara teknis maupun pola pikir.
          </p>

          <div className="mt-12 space-y-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-[#15100c] px-6 py-6 hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-sm text-zinc-300">
                    {contact.icon}
                  </div>

                  <div>
                    <p className="text-xl font-semibold">{contact.label}</p>
                    <p className="text-zinc-500 text-sm">{contact.value}</p>
                  </div>
                </div>

                <span className="text-zinc-600 group-hover:text-orange-500 transition">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-8 lg:pt-8">
          <div className="rounded-2xl border border-zinc-800 bg-[#15100c] p-8">
            <p className="text-orange-500 uppercase tracking-[0.35em] text-sm mb-8">
              Status Saat Ini
            </p>

            <div className="space-y-5 text-sm">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-4">
                <span className="text-zinc-500">availability</span>
                <span className="text-emerald-500">● Open for PKL / Prakerin</span>
              </div>

              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-4">
                <span className="text-zinc-500">current_focus</span>
                <span className="text-orange-500">Learning & Skill Growth</span>
              </div>

              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-4">
                <span className="text-zinc-500">location</span>
                <span>Yogyakarta, ID</span>
              </div>

              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-4">
                <span className="text-zinc-500">interest</span>
                <span>Backend Development</span>
              </div>

              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-4">
                <span className="text-zinc-500">goal</span>
                <span>Prakerin Experience</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#15100c] p-8">
            <p className="text-orange-500 uppercase tracking-[0.35em] text-sm mb-8">
              Saya Cocok Untuk Lingkungan Yang...
            </p>

            <ul className="space-y-4 text-zinc-300">
              {fitPoints.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed">
                  <span className="text-orange-500">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}