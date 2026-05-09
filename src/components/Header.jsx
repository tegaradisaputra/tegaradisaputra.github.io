import React from 'react'

export default function Header() {
  return (
    <>
        <header className='flex justify-between items-center w-full bg-background/50 backdrop-blur-xs px-42 py-4 border-b border-border z-10 fixed top-0 '>
            <div className="logo flex flex-col text-center">
                <h2 className='font-bold text-text font-serif text-2xl'>Tegar Adi Saputra</h2>
                <h3 className='text-sm text-text-muted'>Junior Backend Developer</h3>
            </div>

            <div className="flex justify-center items-center font-sans gap-10 text-sm text-text-muted">
                <a href="" className='hover:text-accent'>ABOUT</a>
                <a href="" className='hover:text-accent'>PROJECTS</a>
                <a href="" className='hover:text-accent'>STACK</a>
                <a href="" className='hover:text-accent'>CONTACT</a>
            </div>
        </header>
    </>
  )
}
