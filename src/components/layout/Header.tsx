import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

type HeaderProps = {
  isScrolled: boolean;
};

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleResearch = () => {
    setIsResearchOpen(!isResearchOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Research',
      path: '/research',
      dropdown: [
        { name: 'Data Analysis', path: '/research/data-analysis' },
        { name: 'Space Science', path: '/research/space-science' },
        { name: 'Machine Learning', path: '/research/machine-learning' },
        { name: 'AI Tools', path: '/research/ai-tools' },
        { name: 'More Programs', path: '/research/initiatives' },
      ],
    },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2"
          aria-label="ResAI Home"
        >
          <Globe 
            size={32}
            className={`transition-colors duration-300 ${isScrolled ? 'text-primary-600' : 'text-white'}`} 
          />
          <span 
            className={`text-xl font-bold bg-clip-text ${
              isScrolled 
                ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-transparent'
                : 'text-white'
            }`}
          >
            ResAI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              {link.dropdown ? (
                <div className="flex items-center cursor-pointer">
                  <span
                    className={`${
                      isScrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-primary-200'
                    } transition-colors duration-300 text-base flex items-center gap-1 group-hover:text-primary-600`}
                  >
                    {link.name}
                    <ChevronDown size={16} />
                  </span>
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-lg py-2 w-48">
                      {link.dropdown.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm ${
                              isActive
                                ? 'text-primary-600 bg-gray-50'
                                : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'text-primary-600 font-medium'
                        : isScrolled
                        ? 'text-gray-800 hover:text-primary-600'
                        : 'text-white hover:text-primary-200'
                    } transition-colors duration-300 text-base`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="relative">
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isMenuOpen
                  ? 'bg-gray-900 rotate-45 translate-y-1.5'
                  : isScrolled
                  ? 'bg-gray-900'
                  : 'bg-white'
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ${
                isMenuOpen
                  ? 'bg-gray-900 opacity-0'
                  : isScrolled
                  ? 'bg-gray-900'
                  : 'bg-white'
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ${
                isMenuOpen
                  ? 'bg-gray-900 -rotate-45 -translate-y-1.5'
                  : isScrolled
                  ? 'bg-gray-900'
                  : 'bg-white'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <div className="pt-24 px-6">
          <nav className="space-y-8">
            {navLinks.map((link) => (
              <div key={link.path} className="border-b border-gray-100 pb-6">
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={toggleResearch}
                      className="w-full flex items-center justify-between text-xl text-gray-900 font-medium"
                    >
                      {link.name}
                      <ChevronDown
                        size={20}
                        className={`transform transition-transform duration-300 ${
                          isResearchOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`mt-4 space-y-4 pl-4 overflow-hidden transition-all duration-300 ${
                        isResearchOpen ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      {link.dropdown.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className={({ isActive }) =>
                            `block text-lg ${
                              isActive
                                ? 'text-primary-600 font-medium'
                                : 'text-gray-600 hover:text-primary-600'
                            }`
                          }
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block text-xl ${
                        isActive
                          ? 'text-primary-600 font-medium'
                          : 'text-gray-900 hover:text-primary-600'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;