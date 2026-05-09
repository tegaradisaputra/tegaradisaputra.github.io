import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-[#0f0b08] px-6 md:px-16 lg:px-24 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-zinc-500">
            © 2026{" "}
            <span className="text-zinc-300 font-medium">
              Tegar Adi Saputra
            </span>
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-zinc-600">
            Built with{" "}
            <span className="text-orange-500">React</span> ·{" "}
            <span className="text-orange-500">TailwindCSS</span> ·{" "}
            <span className="text-zinc-400">Learning by Building</span>
          </p>
        </div>
      </div>
    </footer>
  );
}