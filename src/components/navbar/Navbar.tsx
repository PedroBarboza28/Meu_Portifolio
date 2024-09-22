import SunIcon from '@heroicons/react/24/solid/SunIcon';
import { useMenu } from '../../contexts/Contexts';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import MoonIcon from '@heroicons/react/24/solid/MoonIcon';
import { useEffect } from 'react';

const Navbar = () => {
  const { isMenuOpen, toggleMenu, darkMode, toggleTheme } = useMenu();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className={`shadow-md fixed w-full top-0 left-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Botão Hambúrguer */}
        <button
          onClick={toggleMenu}
          className="text-3xl p-2 focus:outline-none md:hidden"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex flex-grow items-center justify-center space-x-6">
          <div className="flex-grow flex justify-center space-x-6">
            <Link to="/" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>Home</Link>
            <Link to="/cursos" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>Cursos</Link>
            <Link to="/sobre" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>Quem Faz</Link>
            <Link to="/contato" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>Contato</Link>
          </div>
          {/* Botão para alternar entre claro e escuro com ícones no menu desktop */}
          <button
            onClick={toggleTheme}
            className="p-2 border rounded text-gray-800 dark:text-white dark:bg-gray-800 focus:outline-none"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </nav>

        {/* Menu Mobile */}
        <div className={`fixed top-0 right-0 h-full w-64 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className={`flex justify-between items-center p-4 ${darkMode ? 'text-white' : 'text-black'}`}>
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={toggleMenu} className="text-3xl">
              <HiX />
            </button>
          </div>
          <ul className="flex flex-col p-6 space-y-4">
            <li><Link to="/" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>Home</Link></li>
            <li><Link to="/cursos" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>Cursos</Link></li>
            <li><Link to="/sobre" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>Quem Faz</Link></li>
            <li><Link to="/contato" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>Contato</Link></li>
            {/* Botão para alternar entre claro e escuro no modo mobile */}
            <li>
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center p-2 border rounded text-gray-800 dark:text-white dark:bg-gray-800 focus:outline-none w-full"
              >
                {darkMode ? (
                  <SunIcon className="h-6 w-6 text-yellow-500" />
                ) : (
                  <MoonIcon className="h-6 w-6 text-white" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
