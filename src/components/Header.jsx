import React, { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'HOME', id: 'hero' },
    { label: 'ABOUT', id: 'about' },
    { label: 'HOW I WORK', id: 'how-i-work' },
    { label: 'PROJECT', id: 'project' },
    { label: 'GROWTH', id: 'growth' },
    { label: 'CONTACT', id: 'contact' },
  ]

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="flex justify-between items-center w-full bg-background/80 backdrop-blur-xl px-6 md:px-12 lg:px-28 py-4 border-b border-border z-50 fixed top-0">
      <div className="logo flex flex-col">
        <h2 className="font-bold text-text font-serif text-lg md:text-2xl">
          Tegar Adi Saputra
        </h2>
        <h3 className="text-xs md:text-sm text-text-muted">
          Junior Backend Developer
        </h3>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-center items-center font-sans gap-10 text-sm text-text-muted">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="hover:text-accent transition-colors duration-300"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden text-text-muted focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-background z-[60] flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-6 right-6 text-text-muted"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-2xl font-medium text-text-muted hover:text-accent transition-colors duration-300"
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  )
}