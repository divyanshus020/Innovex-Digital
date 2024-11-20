import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative">
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-20 
          w-11/12 max-w-4xl bg-gray-800 text-white px-6 py-4 rounded-full  
          flex justify-between items-center transition-all duration-300`}
      >
        {/* Logo */}
        <div className="text-lg font-bold">Innovex Digital</div>

        {/* Menu Button for Mobile */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="text-2xl">{menuOpen ? '×' : '☰'}</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-teal-400 transition-all duration-200">Home</a>
          <a href="#services" className="hover:text-teal-400 transition-all duration-200">Services</a>
          <a href="#about" className="hover:text-teal-400 transition-all duration-200">About</a>
          <a href="#contact" className="hover:text-teal-400 transition-all duration-200">Contact</a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-20"
          onClick={() => setMenuOpen(false)} // Close the menu when clicked outside
        >
          <div
            className="bg-gray-800 text-white p-6 rounded-t-lg space-y-6 flex flex-col transition-transform duration-500 ease-in-out transform"
            style={{
              transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)', // Slide down effect
            }}
          >
            <a href="#home" className="text-2xl text-white hover:text-teal-400 transition-all duration-200">Home</a>
            <a href="#services" className="text-2xl text-white hover:text-teal-400 transition-all duration-200">Services</a>
            <a href="#about" className="text-2xl text-white hover:text-teal-400 transition-all duration-200">About</a>
            <a href="#contact" className="text-2xl text-white hover:text-teal-400 transition-all duration-200">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
}
