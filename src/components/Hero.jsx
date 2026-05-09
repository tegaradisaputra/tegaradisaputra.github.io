import React from 'react'
import profilePhoto from '../assets/photos/pp.jpeg'

export default function Hero() {
  return (
    <>
        <section className='h-screen flex justify-between items-center px-28 bg-background'>
            <div className="">
              <div className="flex justify-start items-center gap-3 text-accent font-medium font-family-mono">
                <div className='border w-4'></div>
                JUNIOR BACKEND DEVELOPER
              </div>

              <h2 className='text-8xl font-medium text-left font-family-serif w-5xl'>Membangun <span className='text-accent'>Backend</span> yang <span className='text-code-muted'>Tangguh & Terstruktur</span></h2>

              <p className='text-lg text-text font-family-sans w-2xl mt-5'>Backend developer dengan fokus pada <span className='font-bold'>PHP Laravel </span>dan <span className='font-bold'>MySQL</span>. Saya tidak hanya menulis kode yang bekerja — saya menulis kode yang mudah dibaca, di-maintain, dan di-scale, menggunakan pattern yang proven.</p>
            </div>

            <div className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#2a221c] bg-[#14110f]">
              <div className="flex items-center justify-between px-6 py-4 bg-[#2a221c] border-b border-[#3a3028]">
                <div className="flex gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>

                <p className="text-sm text-zinc-500 font-mono">
                  profile.json
                </p>

                <div className="w-12"></div>
              </div>

              <div className="p-8 md:p-10 font-mono text-sm md:text-lg leading-9 overflow-x-auto">
                <pre className="text-green-300">
      {`      1   {
      2     "name": "Tegar Adi Saputra",
      3     "role": "Backend Developer Student",
      4     "location": "Yogyakarta, Indonesia"
      5   }`}
                </pre>
              </div>
            </div>
        </section>
    </>
  )
}
