import { Link } from 'react-router-dom';
import { Globe, Mail, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="text-primary-400" size={24} />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                ResAI
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering the future through research and education with AI.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:foxglobe2023@gmail.com"
                aria-label="Email"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  AI for E-Commerce
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Data Analysis Training
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  AI Research Consulting
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              <a 
                href="mailto:foxglobe2023@gmail.com" 
                className="hover:text-primary-400 transition-colors"
              >
                foxglobe2023@gmail.com
              </a>
            </p>
            <p className="text-gray-400">
              <a 
                href="https://resai.us" 
                className="hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                https://resai.us
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 text-center md:text-left">
          <p className="text-gray-500">
            &copy; {currentYear} FoxGlobe LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;