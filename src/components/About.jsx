import React from 'react'

export default function About() {
  return (
    <>
      <section id='about' className='py-24 px-28 flex justify-between items-center bg-surface'>
        <div className='w-full'>

          <div className="flex justify-start mb-16 items-center gap-3 text-text-muted text-sm font-family-mono">
                <span className='text-accent'>01</span> ABOUT
                <hr className='flex-1 border-t border-text-muted bordesm'/>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h3 className='font-family-serif font-medium text-5xl w-md'>Junior yang paham cara kerja sistem yang <span className='text-accent'>benar</span></h3>

              <p className='mt-10 w-2xl'>
                Saya <span className='font-bold'>Tegar Adi Saputra</span>, backend developer fresh dari Yogyakarta. Saya berfokus membangun sistem yang <span className='font-bold'>kuat, efisien, dan scalable</span>. Saya banyak bekerja dengan <span className='font-bold'>PHP, Laravel, database management, RESTful API, authentication flow</span>, serta <span className='font-bold'>logika bisnis</span> yang menjadi fondasi utama sebuah aplikasi.
                Bagi saya, backend bukan sekadar membuat fitur berjalan, tetapi tentang <span className="font-bold">bagaimana</span> merancang arsitektur yang <span className="font-bold">clean, maintainable</span>, dan siap <span className="font-bold">berkembang</span> seiring kebutuhan sistem. Saya tertarik pada <span className='font-bold'>problem solving, optimasi performa, keamanan</span>, serta bagaimana sebuah sistem dapat menangani proses secara <span className='font-bold'>stabil</span> dan <span className='font-bold'>terstruktur</span>.
              </p>

              <p className='mt-10 w-2xl'>
                Saya terus mengembangkan kemampuan dalam <span className='font-bold'>system design, database architecture, API development</span>, dan <span className="font-bold">best practices backend developer</span> untuk membangun solusi digital yang tidak hanya berfungsi, tetapi juga reliable di dunia nyata.
                Dengan <span className='font-bold'>mindset</span> belajar cepat dan <span className='font-bold'>eksplorasi</span> mendalam, saya sedang berkembang menjadi backend developer yang mampu mengubah kebutuhan kompleks menjadi sistem yang solid, terukur, dan siap pakai.
              </p>

              <div className="mt-10 border border-accent rounded-md p-4 w-2xl bg-accent-soft ">
                <p className='text-text'><span className='text-accent font-medium'>Jujur soal skill level:</span> Saya junior yang baru memulai karir, tapi saya memahami <span className='italic'>mengapa</span> sebuah pattern digunakan,  bukan hanya cara menggunakannya. Saya cepat belajar dan sangat eager untuk berkembang.
                </p>
              </div>
            </div>

            <div className="">

              <div className="mb-10">
                <p className='text-sm text-code-muted mb-3'>CORE STACK</p>
                <div className="flex justify-start items-center gap-5 font-family-sans">
                  <p className='bg-black text-surface py-2 px-4 rounded-full'>PHP 8.x</p>
                  <p className='bg-black text-surface py-2 px-4 rounded-full'>Laravel 12/13</p>
                  <p className='bg-black text-surface py-2 px-4 rounded-full'>Mysql</p>
                </div>
              </div>

              <div className="mb-10">

                <p className='text-sm text-code-muted mb-3'>ARCHITECTURE & PATTERN</p>

                <div className="grid grid-cols-3 justify-start items-center gap-5 font-family-sans">

                  <p className='bg-green-100 border-2 w-full flex justify-center items-center  border-green-900/20 text-green-800 font-medium py-2 px-4 rounded-full'>Repository Pattern</p>

                  <p className='bg-green-100 border-2 w-full flex justify-center items-center border-green-900/20 text-green-800 font-medium py-2 px-4 rounded-full'>Service Layer</p>

                  <p className='bg-green-100 border-2 w-full flex justify-center items-center border-green-900/20 text-green-800 font-medium py-2 px-4 rounded-full'>Restful API</p>

                  <p className='bg-green-100 border-2 w-full flex justify-center items-center border-green-900/20 text-green-800 font-medium py-2 px-4 rounded-full'>MVC</p>

                  <p className='bg-green-100 border-2 w-full flex justify-center items-center border-green-900/20 text-green-800 font-medium py-2 px-4 rounded-full'>Clean Error Handling</p>

                  <p className='bg-green-100 border-2 w-full flex justify-center items-center border-green-900/20 text-green-800 font-medium py-2 px-4 rounded-full'>Form Request Validation</p>

                </div>
              </div>

              <div className="mb-10">
                <p className='text-sm text-code-muted mb-3'>SEDANG DIPELAJARI</p>
                <div className="grid grid-cols-3 justify-start items-center gap-5 font-family-sans">

                  <p className='bg-background border-2 w-full flex justify-center items-center  border-background-secondary text-text-secondary font-medium py-2 px-4 rounded-full'>JavaScript</p>

                  <p className='bg-background border-2 w-full flex justify-center items-center  border-background-secondary text-text-secondary font-medium py-2 px-4 rounded-full'>ReactJS</p>

                  <p className='bg-background border-2 w-full flex justify-center items-center  border-background-secondary text-text-secondary font-medium py-2 px-4 rounded-full'>TailwindCSS</p>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
