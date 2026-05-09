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

            <div className="profil">
              <img src={profilePhoto} alt="Profile photo"  className='w-100 h-100 bg-fixed rounded-full'/>
            </div>
        </section>
    </>
  )
}
