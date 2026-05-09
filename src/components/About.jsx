import React from 'react'

export default function About() {
  return (
    <>
      <section className='py-24 px-28 flex justify-between items-center bg-surface'>
        <div className='w-full'>

          <div className="flex justify-start items-center gap-3 text-text-muted text-sm font-family-mono">
                <span className='text-accent'>01</span> ABOUT
                <hr className='flex-1 border-t border-text-muted bordesm'/>
          </div>

          <div className="grid grid-cols-2 mt-16">
            <div className="flex flex-col">
              <h3 className='font-family-serif font-medium text-5xl w-md'>Junior yang paham cara kerja sistem yang <span className='text-accent'>benar</span></h3>

              <p className='mt-10 w-2xl'>
                Saya <span className='font-bold'>Tegar Adi Saputra</span>, backend developer fresh dari Yogyakarta. Stack utama saya adalah PHP Laravel + MySQL — dan saya fokus menguasainya secara mendalam sebelum melebar.
              </p>

              <p className='mt-10 w-2xl'>
                Yang membedakan saya bukan banyaknya teknologi yang saya tahu, tapi <span className="font-bold">cara saya menulis kode</span>: Repository Pattern untuk memisahkan logic, Service Layer untuk business rules, FormRequest untuk validasi yang bersih, dan API Response yang konsisten.
              </p>
            </div>

            <div className="">ddd</div>
          </div>

        </div>
      </section>
    </>
  )
}
