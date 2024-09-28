import { useMenu } from "../../contexts/Contexts";
import { FaExternalLinkAlt } from "react-icons/fa"; // Importando ícones
import './Home.css'; // Importando o arquivo CSS
import { Link } from "react-router-dom";

const Home = () => {
  const { darkMode } = useMenu(); // Para pegar o estado do Dark Mode

  const technologies = [
    { name: "JavaScript", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
    { name: "React", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "Angular", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg" },
    { name: "MySQL", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
    { name: "Node.js", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "Git", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
    { name: "GitHub", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
    { name: "Jest", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" },
    { name: "Swagger", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swagger/swagger-original.svg" },
    { name: "Vercel", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg" },
  ];

  const fullTechnologies = [...technologies, ...technologies]; // Duplicando ícones para continuidade

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen pt-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl p-6">
        <div className="w-full md:w-5/6 p-4 text-left mb-8 mx-10 ml-0">
          <p className="text-xl">Olá, Sou Pedro Barboza</p>
          <h1 className="text-3xl font-bold mt-4">
            Transformo <span className="text-blue-600">desafios</span> em
            oportunidades lucrativas por meio de{" "}
            <span className="text-blue-600">código</span> e
            <span className="text-blue-600"> criatividade</span>.
          </h1>
          <p className="text-lg ">
            Como desenvolvedor Fullstack, posso atuar em todas as etapas do
            desenvolvimento, desde a modelagem de dados até a implementação
            completa de back-end e front-end, sempre com foco em proporcionar a
            melhor experiência ao usuário.
          </p>
          <div className="flex justify-start mt-4 space-x-4">
          <a
                  href="https://drive.google.com/file/d/13fOYGj0xhCNVMY4zSLJBQ-fOseh6HjUj/view?usp=sharing" // Link específico do projeto
                  target="_blank" // Abrir em uma nova aba
                  rel="noopener noreferrer" // Segurança ao abrir nova aba
                  className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                <FaExternalLinkAlt className="mr-2" /> <span>Currículo</span>
                  <i className="fab fa-behance"></i>
                </a>
                <Link // Usar Link para direcionar para a página de documentação
                  to={`/projects`} // Passando o nome do projeto na URL
                  className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <span>Projetos</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <img
            src="https://ik.imagekit.io/netdmdufko/fotolinkedin2.jpg?updatedAt=1727049254867"
            alt="Foto de perfil"
            className="rounded-lg"
            style={{ width: "80%", height: "auto", aspectRatio: "967/1450" }}
          />
        </div>
      </div>

      {/* Tecnologias que domino */}
      <div className="w-full max-w-4x4 p-4 mt-4 shadow-md rounded-lg">
        <div className={`marquee-container ${darkMode ? "dark-bg" : "light-bg"}`}>
          <div className="animate-marquee">
            {/* Renderizando os ícones duplicados para o efeito contínuo */}
            {fullTechnologies.map((tech, index) => (
              <div key={index} className="tech-item flex flex-col items-center mx-2">
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-16 h-16 rounded-full"
                />
                <span className="text-center">{tech.name}</span>
              </div>
            ))}
            {/* Adicionando novamente os ícones duplicados para manter a visibilidade */}
            {fullTechnologies.map((tech, index) => (
              <div key={`copy-${index}`} className="tech-item flex flex-col items-center mx-2">
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-16 h-16 rounded-full"
                />
                <span className="text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
