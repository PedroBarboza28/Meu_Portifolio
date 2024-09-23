import { useMenu } from "../../contexts/Contexts";
import { SetStateAction, useState } from "react"; // Para o filtro

const Projects = () => {
  const { darkMode } = useMenu(); // Para pegar o estado do Dark Mode
  const [filtro, setFiltro] = useState(""); // Gerenciamento do filtro

  // Função para aplicar o filtro
  const handleFiltro = (categoria: SetStateAction<string>) => {
    setFiltro(categoria);
  };

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
            para navegar entre diferentes categorias.
          </p>
        </div>

        {/* Coluna Direita - Filtro */}
        <div className="w-full md:w-1/2 p-4 flex flex-col items-start">
          <h3 className="text-xl font-bold mb-2">Filtrar por:</h3>
          <div className="flex space-x-4">
            <button
              onClick={() => handleFiltro("Backend")}
              className={`p-2 border rounded ${
                filtro === "Backend" ? "bg-blue-500 text-white" : ""
              }`}
            >
              Back End
            </button>
            <button
              onClick={() => handleFiltro("Banco de Dados")}
              className={`p-2 border rounded ${
                filtro === "Banco de Dados" ? "bg-blue-500 text-white" : ""
              }`}
            >
              Banco de Dados
            </button>
            <button
              onClick={() => handleFiltro("Frontend")}
              className={`p-2 border rounded ${
                filtro === "Frontend" ? "bg-blue-500 text-white" : ""
              }`}
            >
              Front End
            </button>
          </div>
        </div>
      </div>

      {/* Cards de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl p-6">
        {[
          { nome: "Projeto 1", tipo: "Front End", imagem: "link1.jpg" },
          { nome: "Projeto 2", tipo: "Back End", imagem: "link2.jpg" },
          { nome: "Projeto 3", tipo: "Banco de Dados", imagem: "link3.jpg" },
          { nome: "Projeto 4", tipo: "Full Stack", imagem: "link4.jpg" },
        ].map((projeto, index) => (
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
                <a
                  href="#"
                  className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <span>Ver Projeto</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <span>Behance</span>
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
