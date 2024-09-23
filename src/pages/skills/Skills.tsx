import { useMenu } from "../../contexts/Contexts"; // Importar o contexto
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaPython } from "react-icons/fa"; // Importar ícones

const Habilidades = () => {
  const { darkMode } = useMenu(); // Usar o modo escuro/claro

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Título */}
      <h2 className="text-4xl font-bold mb-8">Minhas Habilidades</h2>

      {/* Linha com 4 colunas */}
      <div className="flex flex-wrap justify-around w-full max-w-4xl mb-12">
        <div className="flex flex-col items-center text-center mb-4">
          <h3 className="text-xl font-semibold">Frontend</h3>
          <FaReact className="text-4xl mt-2" />
        </div>
        <div className="flex flex-col items-center text-center mb-4">
          <h3 className="text-xl font-semibold">Backend</h3>
          <FaNodeJs className="text-4xl mt-2" />
        </div>
        <div className="flex flex-col items-center text-center mb-4">
          <h3 className="text-xl font-semibold">Banco de Dados</h3>
          <FaDatabase className="text-4xl mt-2" />
        </div>
        <div className="flex flex-col items-center text-center mb-4">
          <h3 className="text-xl font-semibold">Estilização</h3>
          <div className="flex space-x-2 mt-2">
            <FaHtml5 className="text-4xl" />
            <FaCss3Alt className="text-4xl" />
          </div>
        </div>
      </div>

      {/* Cards de Habilidades */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Card 1 */}
        <div className={`bg-${darkMode ? "gray-800" : "white"} p-6 rounded-lg shadow-lg`}>
          <h4 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-black"}`}>React</h4>
          <div className="flex space-x-2">
            <FaReact className={`text-3xl ${darkMode ? "text-white" : "text-black"}`} />
            <FaJsSquare className={`text-3xl ${darkMode ? "text-white" : "text-black"}`} />
          </div>
        </div>

        {/* Card 2 */}
        <div className={`bg-${darkMode ? "gray-800" : "white"} p-6 rounded-lg shadow-lg`}>
          <h4 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-black"}`}>Node.js</h4>
          <div className="flex space-x-2">
            <FaNodeJs className={`text-3xl ${darkMode ? "text-white" : "text-black"}`} />
            <FaJsSquare className={`text-3xl ${darkMode ? "text-white" : "text-black"}`} />
          </div>
        </div>

        {/* Card 3 */}
        <div className={`bg-${darkMode ? "gray-800" : "white"} p-6 rounded-lg shadow-lg`}>
          <h4 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-black"}`}>Python</h4>
          <div className="flex space-x-2">
            <FaPython className={`text-3xl ${darkMode ? "text-white" : "text-black"}`} />
          </div>
        </div>

        {/* Card 4 */}
        <div className={`bg-${darkMode ? "gray-800" : "white"} p-6 rounded-lg shadow-lg`}>
          <h4 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-black"}`}>Banco de Dados</h4>
          <div className="flex space-x-2">
            <FaDatabase className={`text-3xl ${darkMode ? "text-white" : "text-black"}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
