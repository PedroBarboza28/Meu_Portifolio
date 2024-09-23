import { useMenu } from "../../contexts/Contexts";
import { FaMedal, FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Ícones de medalha e setas

const SobreMim = () => {
  const { darkMode } = useMenu(); // Usando o modo escuro/claro

  // Função para rolar os cards de certificados
  const scrollCertificados = (direction: "left" | "right") => {
    const container = document.getElementById("certificados-container");
    if (container) {
      const cardWidth = 300; // Ajuste a largura do card
      const scrollAmount = window.innerWidth < 768 ? cardWidth : cardWidth * 3; // Rola um card no mobile e três no desktop
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen pt-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Seção de Experiência */}
      <div className="w-full max-w-4xl p-6">
        <h2 className="text-3xl font-bold mb-8">Experiência</h2>

        {/* Cards de Experiência */}
        <div className="space-y-12">
          {[
            { empresa: "Empresa 1", logo: "logo1.png", descricao: "Descrição da experiência 1" },
            { empresa: "Empresa 2", logo: "logo2.png", descricao: "Descrição da experiência 2" },
            { empresa: "Empresa 3", logo: "logo3.png", descricao: "Descrição da experiência 3" },
            { empresa: "Empresa 4", logo: "logo4.png", descricao: "Descrição da experiência 4" },
          ].map((exp, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
              {/* Card de Experiência */}
              <div className="w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-2">{exp.empresa}</h4>
                <p>{exp.descricao}</p>
              </div>

              {/* Linha vertical com círculo */}
              <div className="w-1/2 flex justify-center items-center">
                <div className="relative">
                  {/* Linha Vertical */}
                  <div className="h-32 w-1 bg-gray-300 dark:bg-gray-600"></div>

                  {/* Círculo com Logo */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
                    <img src={exp.logo} alt={exp.empresa} className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Certificados */}
      <div className="w-full max-w-4xl p-6 mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">Certificados</h2>
          <FaMedal className="text-2xl ml-4 text-yellow-500" />
        </div>

        {/* Controles de Rolagem */}
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => scrollCertificados("left")} className="p-2 bg-blue-500 text-white rounded-full">
            <FaArrowLeft />
          </button>
          <button onClick={() => scrollCertificados("right")} className="p-2 bg-blue-500 text-white rounded-full">
            <FaArrowRight />
          </button>
        </div>

        {/* Cards de Certificados */}
        <div
          id="certificados-container"
          className="flex overflow-hidden"
          style={{ width: "100%", maxWidth: "1000px" }} // Define um tamanho máximo para o contêiner
        >
          <div className="flex" style={{ width: "900px" }}> {/* Ajuste para 3 cards de 300px */}
            {[
              {
                logo: "curso1.png",
                titulo: "Curso 1",
                empresa: "Plataforma 1",
                data: "2023",
                descricao: "Descrição do curso 1",
              },
              {
                logo: "curso2.png",
                titulo: "Curso 2",
                empresa: "Plataforma 2",
                data: "2022",
                descricao: "Descrição do curso 2",
              },
              {
                logo: "curso3.png",
                titulo: "Curso 3",
                empresa: "Plataforma 3",
                data: "2021",
                descricao: "Descrição do curso 3",
              },
              {
                logo: "curso4.png",
                titulo: "Curso 4",
                empresa: "Plataforma 4",
                data: "2020",
                descricao: "Descrição do curso 4",
              },
              // Adicione mais certificados aqui
            ].map((certificado, index) => (
              <div
                key={index}
                className="w-300 flex-shrink-0 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                style={{ width: "300px" }} // Largura fixa para cada card
              >
                <div className="flex flex-col items-center">
                  {/* Logo do curso */}
                  <img src={certificado.logo} alt={certificado.titulo} className="w-16 h-16 mb-4" />

                  {/* Título e Detalhes */}
                  <h4 className="text-lg font-bold">{certificado.titulo}</h4>
                  <div className="flex justify-between w-full mt-2 text-sm text-gray-500">
                    <span>{certificado.empresa}</span>
                    <span>{certificado.data}</span>
                  </div>

                  {/* Descrição */}
                  <p className="mt-4 text-center text-sm">{certificado.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMim;
