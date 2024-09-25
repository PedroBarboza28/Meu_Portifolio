import { useMenu } from "../../contexts/Contexts";
import { FaExternalLinkAlt, FaUser } from "react-icons/fa"; // Importando ícones

const Home = () => {
  const { darkMode } = useMenu(); // Para pegar o estado do Dark Mode

  return (
    // Adicionando padding-top para evitar que a navbar esconda o conteúdo
    <div
      className={`flex flex-col items-center justify-center min-h-screen pt-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Seção das duas colunas */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl p-6">
        {/* Coluna Esquerda */}
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
          {/* Botões abaixo da primeira coluna */}
          <div className="flex justify-start mt-4 space-x-4"> {/* Alinhando botões à esquerda */}
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              <FaExternalLinkAlt className="mr-2" /> Currículo
            </button>
            <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              <FaUser className="mr-2" /> Projetos
            </button>
          </div>
        </div>
        {/* Coluna Direita - Imagem */}
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <img
            src="https://ik.imagekit.io/netdmdufko/fotolinkedin2.jpg?updatedAt=1727049254867"
            alt="Foto de perfil"
            className="rounded-lg"
            style={{ width: "80%", height: "auto", aspectRatio: "967/1450" }} // Aumentando a largura para 100%
          />
        </div>
      </div>

      {/* Linha abaixo das colunas para os ícones */}
      <div
        className={`flex flex-col md:flex-row items-center justify-center w-full max-w-4xl p-4 mt-4 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md rounded-lg`}
      >
        <p className="text-xl">Tecnologias que domino:</p>
        <div className="flex ml-4">
          {/* Aqui você pode adicionar ícones das tecnologias */}
          <img src="URL_ICON_JS" alt="JavaScript" className="w-8 h-8 mx-2" />
          <img src="URL_ICON_TS" alt="TypeScript" className="w-8 h-8 mx-2" />
          <img src="URL_ICON_REACT" alt="React" className="w-8 h-8 mx-2" />
          {/* Acrescente mais ícones conforme necessário */}
        </div>
      </div>
    </div>
  );
};

export default Home;
