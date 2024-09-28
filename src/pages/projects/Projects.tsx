import { Link } from "react-router-dom";
import { useMenu } from "../../contexts/Contexts";
import { SetStateAction, useState } from "react"; // Para o filtro

const Projects = () => {
  const { darkMode } = useMenu(); // Para pegar o estado do Dark Mode
  const [filtro, setFiltro] = useState("Todos"); // Gerenciamento do filtro, inicia com "Todos"

  // Função para aplicar o filtro
  const handleFiltro = (categoria: SetStateAction<string>) => {
    setFiltro(categoria);
  };

  // Lista de projetos
  const projetos = [
    {
      nome: "Minerva",
      tipo: "Full Stack",
      imagem:
        "https://ik.imagekit.io/netdmdufko/Minerva_img.png?updatedAt=1727316093576",
      url: "https://minervaacademy.netlify.app/",
    },
    {
      nome: "Blog Pessoal",
      tipo: "Full Stack",
      imagem:
        "https://ik.imagekit.io/netdmdufko/blogPessoal.png?updatedAt=1727318188080",
      url: "https://blogpessoal-react-alpha-fawn.vercel.app/",
    },
  ];

  // Filtrar os projetos com base no filtro selecionado
  const projetosFiltrados =
    filtro === "Todos"
      ? projetos
      : projetos.filter((projeto) => projeto.tipo === filtro);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen pt-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Linha com duas colunas, ajustando gap entre elas */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-4xl p-6 gap-x-12">
        {/* Coluna Esquerda */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold">Meus Projetos</h2>
          <p className="mt-4">
            Aqui estão alguns dos projetos que desenvolvi. Use o filtro ao lado
            para navegar pelas diferentes categorias em que trabalhei.
          </p>
        </div>

        {/* Coluna Direita - Filtro com botões menores */}
        <div className="w-full md:w-1/2 p-4 flex flex-col items-start">
          <h3 className="text-xl font-bold mb-4">Filtrar por:</h3>
          <div className="flex flex-wrap gap-2">
            {" "}
            {/* Diminui o gap entre os botões */}
            <button
              onClick={() => handleFiltro("Backend")}
              className={`px-2 py-1 text-sm rounded-md shadow-md transition-colors duration-300 ${
                filtro === "Backend"
                  ? "bg-blue-500 text-white ring-2 ring-blue-300"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
            >
              Back End
            </button>
            <button
              onClick={() => handleFiltro("Banco de Dados")}
              className={`px-2 py-1 text-sm rounded-md shadow-md transition-colors duration-300 ${
                filtro === "Banco de Dados"
                  ? "bg-blue-500 text-white ring-2 ring-blue-300"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
            >
              Banco de Dados
            </button>
            <button
              onClick={() => handleFiltro("Frontend")}
              className={`px-2 py-1 text-sm rounded-md shadow-md transition-colors duration-300 ${
                filtro === "Frontend"
                  ? "bg-blue-500 text-white ring-2 ring-blue-300"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
            >
              Front End
            </button>
            <button
              onClick={() => handleFiltro("Full Stack")}
              className={`px-2 py-1 text-sm rounded-md shadow-md transition-colors duration-300 ${
                filtro === "Full Stack"
                  ? "bg-blue-500 text-white ring-2 ring-blue-300"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
            >
              Full Stack
            </button>
            <button
              onClick={() => handleFiltro("Todos")}
              className={`px-2 py-1 text-sm rounded-md shadow-md transition-colors duration-300 ${
                filtro === "Todos"
                  ? "bg-blue-500 text-white ring-2 ring-blue-300"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
            >
              Todos
            </button>
          </div>
        </div>
      </div>

      {/* Cards de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl p-6">
        {projetosFiltrados.map((projeto, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-md overflow-hidden group transform transition-all duration-300 hover:scale-105"
          >
            {/* Imagem do Projeto */}
            <img
              src={projeto.imagem}
              alt={projeto.nome}
              className="w-full h-64 object-cover"
            />
            {/* Informações ao passar o mouse */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h4 className="text-xl font-bold text-white">{projeto.nome}</h4>
              <p className="text-sm text-gray-300">{projeto.tipo}</p>

              {/* Botões de Ação */}
              <div className="flex space-x-4 mt-4">
                <Link // Usar Link para direcionar para a página de documentação
                  to={`/seeprojects/${projeto.nome}`} // Passando o nome do projeto na URL
                  className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <span>Saiba Mais</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <a
                  href={projeto.url} // Link específico do projeto
                  target="_blank" // Abrir em uma nova aba
                  rel="noopener noreferrer" // Segurança ao abrir nova aba
                  className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <span>Ver Projeto</span>
                  <i className="fab fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
