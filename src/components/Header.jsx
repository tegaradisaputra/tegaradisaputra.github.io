import React, { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

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

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }))

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].element) {
          const rect = sections[i].element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="flex justify-between items-center w-full bg-background px-6 md:px-12 lg:px-28 py-4 border-b border-border z-50 fixed top-0 shadow-md">
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
            className={`transition-colors duration-300 font-medium ${
              activeSection === item.id 
                ? 'text-accent border-b-2 border-accent pb-1' 
                : 'hover:text-accent'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden z-[70] flex items-center">
        <button 
          className="relative w-10 h-10 flex flex-col items-center justify-center group focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span 
              className={`absolute block h-0.5 w-full bg-text transition-all duration-300 ease-in-out origin-center ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}
            ></span>
            <span 
              className={`absolute block h-0.5 w-full bg-text transition-all duration-300 ease-in-out top-2 ${isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}
            ></span>
            <span 
              className={`absolute block h-0.5 w-full bg-text transition-all duration-300 ease-in-out origin-center ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/80 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Drawer Content */}
        <div 
          className={`absolute top-0 right-0 h-full w-full sm:w-[80%] max-w-md bg-background border-l border-border shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-8 border-b border-border">
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.4em] uppercase text-text-muted font-family-mono mb-2">Navigasi</span>
              <span className="font-serif font-bold text-text text-2xl">Menu Utama</span>
            </div>
          </div>

          {/* Drawer Links */}
          <nav className="flex-1 overflow-y-auto py-10 px-8">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative flex items-center gap-6 py-5 text-left transition-all duration-500 ${
                    activeSection === item.id ? 'text-accent' : 'text-text'
                  }`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms',
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(30px)'
                  }}
                >
                  <span className={`font-family-mono text-sm font-medium tracking-tighter ${
                    activeSection === item.id ? 'text-accent' : 'text-accent'
                  }`}>0{index + 1}</span>
                  <div className="flex flex-col">
                    <span className={`text-2xl md:text-3xl font-medium transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-accent translate-x-2' 
                        : 'text-text group-hover:text-accent group-hover:translate-x-2'
                    }`}>
                      {item.label}
                    </span>
                    <span className={`absolute -bottom-1 left-12 h-0.5 transition-all duration-500 ${
                      activeSection === item.id 
                        ? 'w-[calc(100%-3rem)] bg-accent' 
                        : 'w-0 bg-accent group-hover:w-[calc(100%-3rem)]'
                    }`}></span>
                  </div>
                </button>
              ))}
            </div>
          </nav>

          {/* Drawer Footer */}
          <div className="p-10 bg-background-secondary/50 border-t border-border">
            <p className="text-[10px] text-text-muted mb-6 uppercase tracking-[0.4em] font-bold">Koneksi Sosial</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <a href="mailto:tegaradisaputra537@gmail.com" className="group flex items-center gap-3 text-sm text-text hover:text-accent transition-colors">
                <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent-soft transition-all">✉</span>
                Email
              </a>
              <a href="https://github.com/tegaradisaputra" className="group flex items-center gap-3 text-sm text-text hover:text-accent transition-colors">
                <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent-soft transition-all">GH</span>
                GitHub
              </a>
            </div>
            
            <div className="flex flex-col gap-2">
                <span className="text-[10px] text-text-muted uppercase tracking-[0.2em]">Lokasi</span>
                <span className="text-sm font-medium">Yogyakarta, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}