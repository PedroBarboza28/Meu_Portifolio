import { useState, useEffect } from "react";
import { useMenu } from "../../contexts/Contexts";
import { FaMedal, FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Ícones de medalha e setas

const SobreMim = () => {
  const { darkMode } = useMenu(); // Usando o modo escuro/claro
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar o índice do card atual
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Estado para controle de tela móvel

  // Lista de certificados
  const certificados = [
    {
      logo: "https://ik.imagekit.io/netdmdufko/generationlogo.webp?updatedAt=1727227471708",
      titulo: "Full Stack Javascript",
      empresa: "Generation",
      data: "2024",
      descricao:
        "Este curso abrangente de JavaScript Full Stack foi projetado para capacitar os alunos a se tornarem desenvolvedores completos, capazes de construir aplicações web robustas e escaláveis. Desde a criação da interface do usuário até a implementação do back-end, os alunos aprenderão a usar tecnologias modernas e práticas recomendadas da indústria.",
    },
    {
      logo: "https://ik.imagekit.io/netdmdufko/logo_cisco.jpg?updatedAt=1727227584068",
      titulo: "EndPoint Security",
      empresa: "Cisco",
      data: "2024",
      descricao:
        "Este curso de Endpoint Security da Cisco visa capacitar os alunos a proteger redes e dispositivos em um ambiente digital dinâmico. Os participantes aprenderão a identificar vulnerabilidades, implementar políticas de segurança e utilizar ferramentas avançadas para monitorar e responder a ameaças, garantindo a integridade dos dados.",
    },
    {
      logo: "https://ik.imagekit.io/netdmdufko/certificadosecurity.png?updatedAt=1727231844057",
      titulo: "Gestão de Projetos",
      empresa: "Údemy",
      data: "2024",
      descricao:
        "Este curso de Gestão de Projetos visa capacitar os alunos a dominar técnicas essenciais, aumentando suas oportunidades e valor no mercado. Os participantes aprenderão a planejar e gerenciar projetos com metodologias ágeis, desenvolvendo habilidades de liderança, comunicação e produtividade, destacando-se em suas áreas de atuação.",
    },
  ];

  // Função para rolar os cards de certificados
  const scrollCertificados = (direction: string) => {
    const totalVisibleCards = isMobile ? 1 : 3; // Define quantos cards visíveis com base na largura da tela
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        Math.max(prevIndex - totalVisibleCards, 0)
      );
    } else {
      setCurrentIndex((prevIndex) =>
        Math.min(
          prevIndex + totalVisibleCards,
          certificados.length - totalVisibleCards
        )
      );
    }
  };

  // Efeito para atualizar o estado do tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            {
              empresa: "Minerva Academy",
              logo: "https://ik.imagekit.io/netdmdufko/Captura%20de%20tela%202024-09-24%20164805.png?updatedAt=1727215293225",
              descricao:
                "Minerva foi um projeto desafiador onde, em equipe, desenvolvemos um e-commerce em dois meses, focado nos Objetivos de Desenvolvimento Sustentável (ODS) da Educação de Qualidade. Contribuí em todas as etapas, desde a definição dos requisitos e modelagem de dados até o desenvolvimento do back-end e front-end. Apresentamos nosso trabalho em uma feira de empregabilidade, destacando seu impacto na promoção da educação de qualidade.",
              data: "Jul 2024 - Set 2024",
            },
            {
              empresa: "Blog Pessoal",
              logo: "https://ik.imagekit.io/netdmdufko/Novo%20fav.png?updatedAt=1727212665243",
              descricao:
                "O Blog Pessoal foi um projeto onde desenvolvi a API do zero, realizando a modelagem do banco de dados e implementando uma REST API no back-end. Utilizei Jest e Insomnia para testar os endpoints, Swagger para documentação e PassportJWT para autenticação. O deployment foi feito com o Render. No front-end, construí a aplicação com React e TypeScript, usando o Context API para gerenciamento de estado e Axios para requisições, com o deploy realizado via Vercel.",
              data: "Jun 2024 - Ago 2024",
            },
            // ... (outros objetos)
          ].map((exp, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Card de Experiência */}
              {!isMobile ? (
                // Renderização para notebooks
                <>
                  <div
                    className={`w-1/2 ${
                      exp.empresa === "Blog Pessoal"
                        ? "bg-blue-500 text-white"
                        : darkMode
                        ? "bg-gray-800"
                        : "bg-white"
                    } p-6 rounded-lg shadow-lg`}
                  >
                    <h4 className="text-xl font-bold mb-2">{exp.empresa}</h4>
                    <p>{exp.descricao}</p>
                  </div>
                  {/* Linha vertical com círculo e data */}
                  <div className="w-1/2 flex justify-center items-center">
                    <div className="relative">
                      {/* Linha Vertical */}
                      <div className="h-32 w-1 bg-white"></div>
                      {/* Círculo com Logo */}
                      <div
                        className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 ${
                          darkMode ? "bg-gray-700" : "bg-white"
                        } rounded-full flex items-center justify-center shadow-lg overflow-hidden`}
                      >
                        <img
                          src={exp.logo}
                          alt={exp.empresa}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      {/* Condicional para posição da data */}
                      {exp.empresa === "Blog Pessoal" ? (
                        <div className="absolute -top-2 right-10 text-lg whitespace-nowrap">
                          <span>{exp.data}</span>
                        </div>
                      ) : (
                        <div className="absolute -top-2 left-10 text-lg whitespace-nowrap">
                          <span>{exp.data}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                // Renderização para dispositivos móveis
                <div
                  className={`w-full ${
                    exp.empresa === "Blog Pessoal"
                      ? "bg-blue-500 text-white"
                      : darkMode
                      ? "bg-gray-800"
                      : "bg-white"
                  } p-6 rounded-lg shadow-lg`}
                >
                  <h4 className="text-xl font-bold mb-2">{exp.empresa}</h4>
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 ${
                        darkMode ? "bg-gray-700" : "bg-white"
                      } rounded-full flex items-center justify-center shadow-lg overflow-hidden mr-4`}
                    >
                      <img
                        src={exp.logo}
                        alt={exp.empresa}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <span className="text-lg">{exp.data}</span>
                  </div>
                  <p>{exp.descricao}</p>
                </div>
              )}
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
          <button
            onClick={() => scrollCertificados("left")}
            className="p-2 bg-blue-500 text-white rounded-full"
            disabled={currentIndex === 0} // Desabilita o botão se estiver no primeiro card
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scrollCertificados("right")}
            className="p-2 bg-blue-500 text-white rounded-full"
            disabled={currentIndex >= certificados.length - (isMobile ? 1 : 3)} // Desabilita o botão se estiver no último card
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Cards de Certificados */}
        <div className="flex justify-center">
          {certificados
            .slice(currentIndex, currentIndex + (isMobile ? 1 : 3))
            .map((certificado, index) => (
              <div
                key={index}
                className={`flex-shrink-0 p-6 rounded-lg shadow-lg w-full ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
                style={{ maxWidth: "300px" }} // Ajuste o tamanho conforme necessário
              >
                <div className="flex flex-col items-start">
                  {/* Logo do curso em um círculo */}
                  <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg mb-4">
                    <img
                      src={certificado.logo}
                      alt={certificado.titulo}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Título e Detalhes */}
                  <h4
                    className={`text-lg font-bold ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {certificado.titulo}
                  </h4>
                  <div className="flex justify-between w-full mt-2 text-sm text-gray-500">
                    <span>{certificado.empresa}</span>
                    <span>{certificado.data}</span>
                  </div>

                  {/* Descrição com barra de rolagem */}
                  <p className="mt-4 text-left text-sm max-h-44 overflow-y-auto">
                    {certificado.descricao}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SobreMim;
