import React from 'react'

export default function About() {
  return (
    <>
      <section id='about' className='py-16 md:py-24 px-6 md:px-12 lg:px-28 flex flex-col lg:flex-row justify-between items-center bg-surface'>
        <div className='w-full'>

          <div className="flex justify-start mb-16 items-center gap-3 text-text-muted text-sm font-family-mono">
                <span className='text-accent'>01</span> ABOUT
                <hr className='flex-1 border-t border-text-muted border-sm'/>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div className="flex flex-col">
              <h3 className='font-family-serif font-medium text-2xl md:text-4xl lg:text-5xl max-w-md leading-tight'>Junior yang paham cara kerja sistem yang <span className='text-accent'>benar</span></h3>

              <p className='mt-4 md:mt-6 lg:mt-10 max-w-2xl leading-relaxed text-sm md:text-base'>
                Saya <span className='font-bold'>Tegar Adi Saputra</span>, pengembang backend baru dari Yogyakarta. Saya berfokus membangun sistem yang <span className='font-bold'>kuat, efisien, dan skalabel</span>. Saya banyak bekerja dengan <span className='font-bold'>PHP, Laravel, pengelolaan database, RESTful API, alur autentikasi</span>, serta <span className='font-bold'>logika bisnis</span> yang menjadi fondasi utama sebuah aplikasi.
                Bagi saya, backend bukan sekadar membuat fitur berjalan, tetapi tentang <span className="font-bold">bagaimana</span> merancang arsitektur yang <span className="font-bold">bersih, mudah dipelihara</span>, dan siap <span className="font-bold">berkembang</span> seiring kebutuhan sistem. Saya tertarik pada <span className='font-bold'>pemecahan masalah, optimasi performa, keamanan</span>, serta bagaimana sebuah sistem dapat menangani proses secara <span className='font-bold'>stabil</span> dan <span className='font-bold'>terstruktur</span>.
              </p>

              <p className='mt-6 md:mt-10 max-w-2xl text-sm md:text-base'>
                Saya terus mengembangkan kemampuan dalam <span className='font-bold'>perancangan sistem, arsitektur database, pengembangan API</span>, dan <span className="font-bold">praktik terbaik pengembang backend</span> untuk membangun solusi digital yang tidak hanya berfungsi, tetapi juga andal di dunia nyata.
                Dengan <span className='font-bold'>pola pikir</span> belajar cepat dan <span className='font-bold'>eksplorasi</span> mendalam, saya sedang berkembang menjadi pengembang backend yang mampu mengubah kebutuhan kompleks menjadi sistem yang solid, terukur, dan siap pakai.
              </p>

              <div className="mt-8 md:mt-10 border border-accent rounded-md p-4 max-w-2xl bg-accent-soft ">
                <p className='text-text text-sm md:text-base'><span className='text-accent font-medium'>Jujur mengenai tingkat keahlian:</span> Saya junior yang baru memulai karier, tetapi saya memahami <span className='italic'>mengapa</span> sebuah pola digunakan, bukan hanya cara menggunakannya. Saya cepat belajar dan sangat bersemangat untuk berkembang.
                </p>
              </div>
            </div>

            <div className="">

              <div className="mb-10">
                <p className='text-sm text-code-muted mb-3'>CORE STACK</p>
                <div className="flex flex-wrap justify-start items-center gap-3 md:gap-5 font-family-sans text-xs md:text-sm">
                  <p className='bg-black text-surface py-2 px-4 rounded-full'>PHP 8.x</p>
                  <p className='bg-black text-surface py-2 px-4 rounded-full'>Laravel 12/13</p>
                  <p className='bg-black text-surface py-2 px-4 rounded-full'>Mysql</p>
                </div>
              </div>

              <div className="mb-10">

                <p className='text-sm text-code-muted mb-3'>ARCHITECTURE & PATTERN</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-start items-center gap-3 md:gap-5 font-family-sans text-xs md:text-sm">
                  <p className='bg-green-100 border-2 w-full flex justify-center items-center  border-green-900/20 text-green-800 font-medium py-2 px-4 rounded-full'>Repository Pattern</p>
                  <p className='bg-green-100 border-2 w-full flex justify-center items-center border-green-900/20 text-green-800 font-medium py-2 px-4 rounded-full'>Service Layer</p>
                  <p className='bg-green-100 border-2 w-full flex justify-center items-center border-green-900/20 text-green-800 font-medium py-2 px-4 rounded-full'>Restful API</p>
                  <p className='bg-green-100 border-2 w-full flex justify-center items-center border-green-900/20 text-green-800 font-medium py-2 px-4 rounded-full'>MVC</p>
                  <p className='bg-green-100 border-2 w-full flex justify-center items-center border-green-900/20 text-green-800 font-medium py-2 px-4 rounded-full'>Clean Error Handling</p>
                  <p className='bg-green-100 border-2 w-full flex justify-center items-center border-green-900/20 text-green-800 font-medium py-2 px-4 rounded-full text-center'>Form Request Validation</p>
                </div>
              </div>

              <div className="mb-10">
                <p className='text-sm text-code-muted mb-3'>SEDANG DIPELAJARI</p>
                <div className="grid grid-cols-2 md:grid-cols-3 justify-start items-center gap-3 md:gap-5 font-family-sans text-xs md:text-sm">
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
