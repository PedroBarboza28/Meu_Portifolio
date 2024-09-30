import { useMenu } from "../../contexts/Contexts"; // Importar o contexto

const Habilidades = () => {
  const { darkMode } = useMenu(); // Usar o modo escuro/claro

  // Lista de habilidades
  const habilidades = {
    Frontend: [
      {
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "ReactJS",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "HTML",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      },
      
    ],
    Backend: [
      {
        name: "Node.js",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "Python",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Git",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
     
    ],
    BancoDeDados: [
      {
        name: "MySQL",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
    ],
    Outros: [
      {
        name: "Jest",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg",
      },
      {
        name: "Swagger",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swagger/swagger-original.svg",
      },
      {
        name: "Vercel",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      },
    ],
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } bg-transparent`}
    >
      {/* Título */}
      <h2 className="text-4xl font-bold mb-8 mt-20">Minhas Habilidades</h2> {/* Aumentar a margem superior aqui */}

      {/* Seção de Habilidades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full mb-8">
        {Object.entries(habilidades).map(([section, skills]) => (
          <div
            key={section}
            className={`bg-${darkMode ? "gray-800" : "white"} p-6 rounded-lg shadow-lg`}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-black"}`}
            >
              {section}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((habilidade, index) => (
                <div key={index} className="flex flex-col items-center mb-4">
                  <img
                    src={habilidade.logo}
                    alt={`${habilidade.name} Logo`}
                    className="w-16 h-16 mb-2"
                  />
                  <h4
                    className={`text-xl font-semibold ${darkMode ? "text-white" : "text-black"}`}
                  >
                    {habilidade.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
