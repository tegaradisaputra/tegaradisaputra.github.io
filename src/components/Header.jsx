import React from 'react'

export default function Header() {
  const navItems = [
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
    }
  }

  return (
    <header className="flex justify-between items-center w-full bg-background/80 backdrop-blur-xl px-42 py-4 border-b border-border z-50 fixed top-0">
      <div className="logo flex flex-col text-center">
        <h2 className="font-bold text-text font-serif text-2xl">
          Tegar Adi Saputra
        </h2>
        <h3 className="text-sm text-text-muted">
          Junior Backend Developer
        </h3>
      </div>

      <nav className="flex justify-center items-center font-sans gap-10 text-sm text-text-muted">
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
    </header>
  )
}