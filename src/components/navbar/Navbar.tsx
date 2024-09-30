import { useMenu } from "../../contexts/Contexts"; // Importa o contexto para gerenciar o menu
import { HiMenu, HiX } from "react-icons/hi"; // Importa ícones de menu
import { Link } from "react-router-dom"; // Importa Link para navegação
import { useEffect, useState } from "react"; // Importa hooks do React
import SunIcon from "@heroicons/react/24/solid/SunIcon"; // Importa ícone de sol
import MoonIcon from "@heroicons/react/24/solid/MoonIcon"; // Importa ícone de lua

const Navbar = () => {
  const { isMenuOpen, toggleMenu, darkMode, toggleTheme } = useMenu(); // Desestrutura variáveis do contexto
  const [lastScrollY, setLastScrollY] = useState(0); // Estado para armazenar a última posição de rolagem
  const [visible, setVisible] = useState(true); // Estado para controlar a visibilidade da navbar

  // Efeito para aplicar a classe 'dark' ao documento com base no estado de darkMode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Adiciona classe 'dark' se darkMode estiver ativado
    } else {
      document.documentElement.classList.remove("dark"); // Remove a classe 'dark' se não estiver ativado
    }
  }, [darkMode]);

  // Função para lidar com a rolagem e esconder/mostrar a navbar
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY; // Obtém a posição atual da rolagem
      if (scrollY > lastScrollY && scrollY > 50) {
        setVisible(false); // Esconde a navbar se o usuário está rolando para baixo
      } else {
        setVisible(true); // Mostra a navbar se o usuário está rolando para cima
      }
      setLastScrollY(scrollY); // Atualiza a última posição de rolagem
    }
  };

  // Adiciona listener de evento de rolagem
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Adiciona listener para rolagem
    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove listener ao desmontar o componente
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full h-15 top-0 left-0 z-50 transition-transform duration-300 bg-transparent ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container w-full mx-auto px-4 py-2 flex items-center justify-between">
        <div
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-10" />{" "}
            {/* Logo do site */}
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="text-3xl p-2 focus:outline-none md:hidden"
        >
          {isMenuOpen ? (
            <HiX className="h-8 w-8" />
          ) : (
            <HiMenu className="h-8 w-8" />
          )}{" "}
          {/* Ícone de menu ou fechar */}
        </button>

        <nav className="hidden md:flex flex-grow justify-center space-x-6">
          {["/", "/whoami", "/projects", "/skills"].map((path, index) => (
            <Link
              key={index}
              to={path}
              className={`font-[500] text-lg py-2 px-4 rounded-lg transition-colors duration-300 relative after:content-[''] 
                after:absolute after:left-1/2 after:bottom-0 after:h-[2px] 
                after:w-0 after:bg-${
                  darkMode ? "white" : "black"
                } after:transition-all 
                after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full 
                ${darkMode ? "text-gray-300" : "text-black"}`}
            >
              {path === "/"
                ? "Página Inicial"
                : path === "/whoami"
                ? "Sobre mim"
                : path === "/projects"
                ? "Projetos"
                : "Habilidades"}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleTheme}
          className="ml-4 focus:outline-none md:block hidden"
        >
          {darkMode ? (
            <MoonIcon className="h-6 w-6 text-white" />
          ) : (
            <SunIcon className="h-6 w-6 text-yellow-500" />
          )}
        </button>

        {/* Menu mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-64 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen && visible ? "translate-x-0" : "translate-x-full"
          } ${
            darkMode
              ? " bg-gradient-to-b from-[rgb(6,14,17)] to-gray-900"
              : " bg-gradient-to-t from-[rgb(221,244,253)] to-gray-200"
          }`}
        >
          <div
            className={`flex justify-between items-center p-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <h2 className="text-xl font-bold">Menu</h2>{" "}
            {/* Título do menu mobile */}
            <button onClick={toggleMenu} className="text-3xl">
              <HiX /> {/* Botão de fechar o menu */}
            </button>
          </div>

          <ul
            className={`flex flex-col p-6 space-y-4 ${
              darkMode
                ? "bg-gradient-to-t from-[rgb(14,76,98)] to-gray-900"
                : "bg-gradient-to-b from-[rgb(221,244,253)] to-gray-200"
            }`}
          >
            {["/", "/whoami", "/projects", "/skills"].map((path, index) => (
              <li key={index}>
                <Link
                  to={path}
                  className={`font-[500] text-lg py-2 px-4 rounded-lg transition-colors duration-300 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-${
                    darkMode ? "white" : "black"
                  } after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full ${
                    darkMode ? "text-gray-300" : "text-black"
                  }`}
                >
                  {path === "/"
                    ? "Página Inicial"
                    : path === "/whoami"
                    ? "Sobre mim"
                    : path === "/projects"
                    ? "Projetos"
                    : "Habilidades"}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                className="focus:outline-none w-full flex justify-center transition-colors duration-300"
              >
                {darkMode ? (
                  <MoonIcon className="h-6 w-6 text-white" />
                ) : (
                  <SunIcon className="h-6 w-6 text-yellow-500" />
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
