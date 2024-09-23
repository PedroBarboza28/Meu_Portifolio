import { useMenu } from "../../contexts/Contexts";
import { FaExternalLinkAlt, FaUser } from 'react-icons/fa'; // Importando ícones

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
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl p-6">
        {/* Coluna Esquerda */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-3xl font-bold">Olá, sou Desenvolvedor</h1>
          <p className="mt-4">
            Aqui vou colocar uma breve introdução sobre mim. Sou um
            desenvolvedor apaixonado por tecnologia!
          </p>

          {/* Botões abaixo da primeira coluna */}
          <div className="flex justify-center mt-4 space-x-4">
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
            style={{ width: "70%", height: "auto", aspectRatio: "967/1450" }} // Reduzindo para 70%
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
