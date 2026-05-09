import React from 'react'

export default function HowToWork() {
  return (
    <>
      <section id='how-i-work' className='py-16 md:py-24 px-6 md:px-12 lg:px-28 flex flex-col justify-center items-center bg-background'>
        <div className='w-full'>

          <div className="flex justify-start items-center mb-16 gap-3 text-text-muted text-sm font-family-mono">
                <span className='text-accent'>02</span> HOW I WORK
                <hr className='flex-1 border-t border-text-muted border-sm'/>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-20">
            <h3 className='font-family-serif font-medium max-w-xl text-3xl md:text-5xl lg:text-6xl leading-tight'>Cara saya bekerja, bukan hanya apa yang saya <span className='text-accent'>bisa.</span></h3>

            <p className='font-family-sans max-w-xl text-text text-sm md:text-base'>Skill bisa dipelajari — tapi kebiasaan kerja yang baik itu yang membuat developer berdampak di tim. Ini adalah proses dan nilai yang saya bawa ke setiap pekerjaan.</p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="card mt-12 lg:mt-24 border-2 grid justify-start items-center border-background-secondary bg-surface w-full p-6 md:p-8 rounded-lg hover:bg-accent-soft/90">
              <span className='text-background-secondary font-family-serif text-4xl md:text-6xl italic font-medium'>01</span>
              <h3 className='mt-4 font-bold font-family-sans'>Pahami dulu</h3>
              <p className='mt-2 text-text-muted text-sm'>
                Sebelum nulis satu baris kode, saya baca requirement sampai benar-benar paham. Kalau ada yang ambigu, saya tanya — bukan asumsikan.
              </p>
              <p className='mt-4 bg-accent-soft px-4 py-2 border-2 flex justify-center items-center  border-accent/20 text-accent font-medium rounded-full text-xs'>Baca · Tanya · Konfirmasi</p>
            </div>

            <div className="card mt-0 md:mt-12 lg:mt-24 border-2 grid justify-start items-center border-background-secondary bg-surface w-full p-6 md:p-8 rounded-lg hover:bg-accent-soft/90">
              <span className='text-background-secondary font-family-serif text-4xl md:text-6xl italic font-medium'>02</span>
              <h3 className='mt-4 font-bold font-family-sans'>Rancang Struktur</h3>
              <p className='mt-2 text-text-muted text-sm'>
                Sketsa struktur folder, endpoint, dan relasi database sebelum mulai coding. Lebih mudah ubah di kertas daripada di kode.
              </p>
              <p className='mt-4 bg-accent-soft px-4 py-2 border-2 flex justify-center items-center  border-accent/20 text-accent font-medium rounded-full text-xs'>ERD · API Contract · Folder</p>
            </div>

            <div className="card mt-0 md:mt-12 lg:mt-24 border-2 grid justify-start items-center border-background-secondary bg-surface w-full p-6 md:p-8 rounded-lg hover:bg-accent-soft/90">
              <span className='text-background-secondary font-family-serif text-4xl md:text-6xl italic font-medium'>03</span>
              <h3 className='mt-4 font-bold font-family-sans'>Tulis kode bersih</h3>
              <p className='mt-2 text-text-muted text-sm'>
                Implementasi dengan pattern yang konsisten. Naming yang jelas, fungsi yang kecil, dan komentar hanya untuk hal yang benar-benar perlu dijelaskan.
              </p>
              <p className='mt-4 bg-accent-soft px-4 py-2 border-2 flex justify-center items-center  border-accent/20 text-accent font-medium rounded-full text-xs'>Pattern · Clean Code · Git</p>
            </div>

            <div className="card mt-0 md:mt-12 lg:mt-24 border-2 grid justify-start items-center border-background-secondary bg-surface w-full p-6 md:p-8 rounded-lg hover:bg-accent-soft/90">
              <span className='text-background-secondary font-family-serif text-4xl md:text-6xl italic font-medium'>04</span>
              <h3 className='mt-4 font-bold font-family-sans'>Test & Review</h3>
              <p className='mt-2 text-text-muted text-sm'>
                Test manual lewat Postman dulu. Minta feedback dari senior atau teman. Kode yang di-review itu lebih baik dari kode yang "merasa" sudah benar.
              </p>
              <p className='mt-4 bg-accent-soft px-4 py-2 border-2 flex justify-center items-center  border-accent/20 text-accent font-medium rounded-full text-xs'>Postman · Feedback · Iterate</p>
            </div>
          </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

              <div className="relative group mt-6 md:mt-12 lg:mt-24 border-2 grid justify-start items-center border-background-secondary bg-surface w-full px-6 md:px-8 py-8 md:py-10 rounded-lg hover:-translate-y-2 transition-transform duration-300">
                <h3 className='mt-4 font-bold font-family-sans'>Tanya sebelum salah arah</h3>
                <p className='mt-2 text-text-muted text-sm'>
                  Saya tidak takut bertanya ketika tidak yakin. Lebih baik menghabiskan 5 menit untuk klarifikasi daripada 5 jam mengerjakan hal yang salah.
                </p>
                <hr className='mt-4 mb-4 border-t flex-1 border-accent border-sm'/>
                <p className='text-accent italic text-xs font-family-sans'>
                  "A good question saves more time than any shortcut."
                </p>
                <span className="absolute bottom-0 left-0 h-1 w-full bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150 ease-out"></span>
              </div>

              <div className="relative group mt-0 md:mt-12 lg:mt-24 border-2 grid justify-start items-center border-background-secondary bg-surface w-full px-6 md:px-8 py-8 md:py-10 rounded-lg hover:-translate-y-2 transition-transform duration-300">
                <h3 className='mt-4 font-bold font-family-sans'>Baca dokumentasi, bukan tebak</h3>
                <p className='mt-2 text-text-muted text-sm'>
                  Saya selalu baca docs resmi Laravel sebelum coba-coba. Paham cara kerja tools itu penting, bukan hanya tahu cara pakainya.
                </p>
                <hr className='mt-4 mb-4 border-t flex-1 border-accent border-sm'/>
                <p className='text-accent italic text-xs font-family-sans'>
                  "RTFM is not a punishment. It's a habit."
                </p>
                <span className="absolute bottom-0 left-0 h-1 w-full bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150 ease-out"></span>
              </div>

              <div className="relative group mt-0 md:mt-12 lg:mt-24 border-2 grid justify-start items-center border-background-secondary bg-surface w-full px-6 md:px-8 py-8 md:py-10 rounded-lg hover:-translate-y-2 transition-transform duration-300">
                <h3 className='mt-4 font-bold font-family-sans'>Konsisten dari awal</h3>
                <p className='mt-2 text-text-muted text-sm'>
                  Naming convention, struktur folder, dan response format harus konsisten sejak commit pertama. Karena technical debt lahir dari inkonsistensi kecil yang diabaikan.
                </p>
                <hr className='mt-4 mb-4 border-t flex-1 border-accent border-sm'/>
                <p className='text-accent italic text-xs font-family-sans'>
                  "Consistency is better than perfection."
                </p>
                <span className="absolute bottom-0 left-0 h-1 w-full bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150 ease-out"></span>
              </div>

              <div className="relative group mt-0 md:mt-12 lg:mt-24 border-2 grid justify-start items-center border-background-secondary bg-surface w-full px-6 md:px-8 py-8 md:py-10 rounded-lg hover:-translate-y-2 transition-transform duration-300">
                <h3 className='mt-4 font-bold font-family-sans'>Debug sistematis</h3>
                <p className='mt-2 text-text-muted text-sm'>
                  Ketika ada bug, saya tidak langsung ganti-ganti kode secara acak. Saya isolasi masalah dulu, cari root cause-nya, baru fix dengan alasan yang jelas.
                </p>
                <hr className='mt-4 mb-4 border-t flex-1 border-accent border-sm'/>
                <p className='text-accent italic text-xs font-family-sans'>
                  "dd() is a tool, not a strategy."
                </p>
                <span className="absolute bottom-0 left-0 h-1 w-full bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150 ease-out"></span>
              </div>

              <div className="relative group mt-0 md:mt-12 lg:mt-24 border-2 grid justify-start items-center border-background-secondary bg-surface w-full px-6 md:px-8 py-8 md:py-10 rounded-lg hover:-translate-y-2 transition-transform duration-300">
                <h3 className='mt-4 font-bold font-family-sans'>Dokumentasi itu bagian dari kode</h3>
                <p className='mt-2 text-text-muted text-sm'>
                  Komentar yang bermakna, dan Postman collection yang terupdate adalah tanggung jawab developer — bukan tugas tambahan.
                </p>
                <hr className='mt-4 mb-4 border-t flex-1 border-accent border-sm'/>
                <p className='text-accent italic text-xs font-family-sans'>
                  "Code tells you how. Comments tell you why."
                </p>
                <span className="absolute bottom-0 left-0 h-1 w-full bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150 ease-out"></span>
              </div>

              <div className="relative group mt-0 md:mt-12 lg:mt-24 border-2 grid justify-start items-center border-background-secondary bg-surface w-full px-6 md:px-8 py-8 md:py-10 rounded-lg hover:-translate-y-2 transition-transform duration-300">
                <h3 className='mt-4 font-bold font-family-sans'>Belajar dari yang lebih senior</h3>
                <p className='mt-2 text-text-muted text-sm'>
                  Saya aktif minta code review, baca kode orang lain, dan tidak malu akui ketika ada yang tidak saya mengerti. Ego tidak punya tempat di sini.
                </p>
                <hr className='mt-4 mb-4 border-t flex-1 border-accent border-sm'/>
                <p className='text-accent italic text-xs font-family-sans'>
                  "The fastest way to grow is to find someone better."
                </p>
                <span className="absolute bottom-0 left-0 h-1 w-full bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150 ease-out"></span>
              </div>

          </div>

        </div>
      </section>
    </>
  )
}
