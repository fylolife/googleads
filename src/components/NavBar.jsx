import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Plans', href: '#plans' },
  { label: 'Tools', href: '#tools' },
  { label: 'Contact', href: '#contact' }
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-bar" id="home">
      <a className="logo" href="#home">
        AdFlow Studio
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <div className={`nav-links ${isOpen ? 'open' : ''}`} id="main-navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
