"use client"
import * as React from "react"



export default function NavbarPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen)
  // }

  const navLinks = [
    {name: "Home", href: "/"},
    {name: "Work", href: "/#project"},
    {name: "About", href: "/#about"},
    // {name: "Experience", href: "/experience"},
    {name: "Contact", href: "/#contact"},
  ]

  return (
     (
    <header className="bg-[#241d20] shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-2xl font-bold text-[#BBF451] " href="#home" onClick={() => (
              setIsMobileMenuOpen(false)
            )}>
              AMIN H<span className="font-extrabold text-2xl">.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navLinks.map((el, i) => (
                <li key={i}>
                  <a className="text-white hover:font-bold hover:scale-110 transition-transform hover:text-[#BBF451]" href={el.href}>
                    {el.name}
                  </a>
                </li>
              ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              className="rounded bg-white p-2 text-white "
              aria-label="Toggle Menu"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-2 h-screen">
            <ul className="space-y-2 text-sm text-white">
              {navLinks.map((el, i) => (
                <li key={i}>
                  <a className="block px-4 py-2 rounded text-white hover:font-bold hover:text-lg hover:text-[#BBF451] transition" href={el.href} onClick={() => (
                    setIsMobileMenuOpen(!isMobileMenuOpen)
                  )}>
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
  )
}