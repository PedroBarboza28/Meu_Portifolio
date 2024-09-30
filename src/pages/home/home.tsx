import { useMenu } from "../../contexts/Contexts";
import { FaExternalLinkAlt } from "react-icons/fa"; // Importando ícones
import "./home.css"; // Importando o arquivo CSS
import { Link } from "react-router-dom";
import { Key } from "react";

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

  const renderTechIcons = (techs: { src: string | undefined; name: string | null | undefined }[]) => {
    return techs.map((tech: { src: string | undefined; name: string | null | undefined }, index: Key | null | undefined) => (
      <div key={index} className="tech-item flex flex-col items-center mx-2">
        <img src={tech.src} alt={tech.name ?? "Technology Icon"} className="w-16 h-16 rounded-full" />
        <span className="text-center">{tech.name ?? "Desconhecido"}</span>
      </div>
    ));
  };
  

  return (
    <div className={`flex flex-col items-center mt-10 justify-center min-h-screen pt-16 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} bg-transparent`}>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl p-6">
        <div className="w-full md:w-5/6 p-4 text-left mb-8 mx-10 ml-0">
          <p className="text-xl font-normal leading-9">Olá, Sou Pedro Barboza</p>
          <h1 className="font-bold text-3xl mt-4 leading-8">
            Transformo{" "}
            <span className="text-blue-600 font-black">desafios</span> em oportunidades lucrativas por meio de{" "}
            <span className="text-blue-600 font-black">código</span> e
            <span className="text-blue-600 font-black"> criatividade</span>.
          </h1>
          <p className="text-lg font-normal mt-5 leading-7">
            Como desenvolvedor Fullstack, posso atuar em todas as etapas do desenvolvimento, desde a modelagem de dados até a implementação completa de back-end e front-end, sempre com foco em proporcionar a melhor experiência ao usuário.
          </p>
          <div className="flex justify-start mt-4 space-x-4">
            <a
              href="https://drive.google.com/file/d/13fOYGj0xhCNVMY4zSLJBQ-fOseh6HjUj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-500 text-lg text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              <FaExternalLinkAlt className="mr-2" /> <span>Currículo</span>
            </a>
            <Link
  to={`/projects`}
  className={`flex items-center space-x-2 font-[500] text-lg py-2 px-4 rounded-lg justify-center transition-colors duration-300 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full ${
    darkMode ? "after:bg-white" : "after:bg-black"
  }`}
>
  <span>Projetos</span>
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
            {renderTechIcons(fullTechnologies)}
            {renderTechIcons(fullTechnologies)} {/* Adicionando novamente os ícones duplicados para manter a visibilidade */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
