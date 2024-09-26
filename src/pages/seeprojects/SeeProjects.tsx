import { useMenu } from "../../contexts/Contexts"; // para o modo escuro
import { useParams } from "react-router-dom"; // Importando useParams

const VerProjetos = () => {
  const { darkMode } = useMenu(); // Dark mode context
  const { nomeProjeto } = useParams<{ nomeProjeto: string | undefined }>(); // Obtendo o parâmetro da URL com tipo

  // Convertendo o nome do projeto para o formato correto
  const nomeProjetoFormatado = nomeProjeto ? nomeProjeto.replace(" ", "") : "";

  const projetos: Record<
    string,
    Array<{
      parte: string;
      descricao: string;
      tecnologias: string;
      comoUsar: string;
      imagem: string;
    }>
  > = {
    Minerva: [
      {
        parte: "Home",
        descricao: "Home do projeto Minerva.",
        tecnologias: "React, Node.js, MySQL, PostgreSQL.",
        comoUsar: "Renderização Dinâmica: Adicionei um método .map() para renderizar cada parte (Home e Login) em um loop. Isso significa que agora, para cada parte do projeto, a estrutura.",
        imagem:
          "https://ik.imagekit.io/netdmdufko/Minerva_img.png?updatedAt=1727316093576",
      },
      {
        parte: "Login",
        descricao: "Descrição da página de login do projeto Minerva.",
        tecnologias: "React, Node.js, MySQL, PostgreSQL.",
        comoUsar: "Renderização Dinâmica: Adicionei um método .map() para renderizar cada parte (Home e Login) em um loop.",
        imagem:
          "https://ik.imagekit.io/netdmdufko/loginMinerva.png?updatedAt=1727331733449",
      },
    ],
    BlogPessoal: [
      {
        parte: "Página Inicial",
        descricao: "Descrição da página inicial do Blog Pessoal.",
        tecnologias: "React, Express, MySQL, PostgreSQL.",
        comoUsar: "Navegue pelas postagens disponíveis.",
        imagem:
          "https://ik.imagekit.io/netdmdufko/blogPessoal.png?updatedAt=1727318188080",
      },
      {
        parte: "Criar Postagem",
        descricao: "Descrição da página para criar novas postagens.",
        tecnologias: "React, Express, MySQL, PostgreSQL.",
        comoUsar: "Preencha os campos e envie sua postagem.",
        imagem:
          "https://ik.imagekit.io/netdmdufko/blogPessoal_create.png?updatedAt=1727318188080",
      },
    ],
  };

  const partes =
    nomeProjetoFormatado && projetos[nomeProjetoFormatado] ? projetos[nomeProjetoFormatado] : [];

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen mt-8 pt-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {partes.length > 0 ? (
        <>
          <h1 className="text-4xl font-bold mb-12">
            Documentação do Projeto: {nomeProjeto}
          </h1>

          {/* Renderização de todas as partes do projeto */}
          {partes.map((parte, index) => (
            <div key={index} className="flex flex-col md:flex-row w-full max-w-6xl mb-20">
              {/* Imagem à esquerda com barra estilizada */}
              <div className="relative w-full md:w-1/2 flex-shrink-0">
                <img
                  src={parte.imagem} // Exibindo a imagem correspondente
                  alt={parte.parte}
                  className="h-full w-full object-cover rounded-lg" // Ajustando para cobrir a altura total
                />
                <div
                  className={`absolute inset-0 bg-blue-500 ${
                    darkMode ? "bg-blue-700" : "bg-blue-400"
                  } h-2`}
                />
              </div>

              {/* Conteúdo à direita */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="mb-2">
                  <strong>Descrição:</strong>
                </div>
                <p className="text-lg mb-4">{parte.descricao}</p>
                <div className="mb-2">
                  <strong>Tecnologias Usadas:</strong>
                </div>
                <p className="text-lg mb-4">{parte.tecnologias}</p>
                <div>
                  <strong>Como Usar:</strong>
                </div>
                <p className="text-lg mb-4">{parte.comoUsar}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h2 className="text-2xl">Projeto não encontrado.</h2>
      )}
    </div>
  );
};

export default VerProjetos;
