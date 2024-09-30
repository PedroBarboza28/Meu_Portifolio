import { useMenu } from "../../contexts/Contexts"; // para o modo escuro
import { useParams } from "react-router-dom"; // Importando useParams

// Componente responsável por renderizar cada parte do projeto
const ProjectPart = ({ parte, descricao, tecnologias, comoFunciona, imagem }: any) => (
  <div className="flex flex-col md:flex-row w-full max-w-6xl mb-20">
    {/* Imagem à esquerda */}
    <div className="relative w-full md:w-1/2 flex-shrink-0">
      <img
        src={imagem}
        alt={parte}
        className="h-full w-full object-cover rounded-lg"
      />
    </div>

    {/* Conteúdo à direita */}
    <div className="flex-1 p-6 flex flex-col justify-between">
      <div className="mb-2">
        <strong>Descrição:</strong>
      </div>
      <p className="text-lg mb-4">{descricao}</p>

      <div className="mb-2">
        <strong>Tecnologias Usadas:</strong>
      </div>
      <p className="text-lg mb-4">{tecnologias}</p>

      <div>
        <strong>Como Funciona:</strong>
      </div>
      <p className="text-lg mb-4">{comoFunciona}</p>
    </div>
  </div>
);

const VerProjetos = () => {
  const { darkMode } = useMenu(); // Contexto para o modo escuro
  const { nomeProjeto } = useParams<{ nomeProjeto: string }>(); // Parâmetro da URL

  // Remover espaços do nome do projeto
  const nomeProjetoFormatado = nomeProjeto?.replace(" ", "") || "";

  // Dados dos projetos
  const projetos: Record<string, any[]> = {
    Minerva: [
    {
      parte: "",
      descricao: "HeroSection",
      tecnologias: "React, TypeScript, Tailwind CSS, JavaScript.",
      comoFunciona:
        "O componente HeroSection exibe uma área de destaque com fundo gradiente e imagem. Contém um título, descrição e dois botões que direcionam para outras páginas do site.",
      imagem:
        "https://ik.imagekit.io/netdmdufko/projetoMinerva.png?updatedAt=1727544452322",
    },
    {
      parte: "",
      descricao: "Sobre o Projeto",
      tecnologias: "React, JavaScript/TypeScript, Tailwind CSS, React Router.",
      comoFunciona:
      "Componente Projeto exibe informações sobre o Projeto Minerva, focado em educação inclusiva e de qualidade, abordando ODS nº 4 e suas metas 4.3 e 4.4.",
      imagem:
        "https://ik.imagekit.io/netdmdufko/oqueeMinerva.png?updatedAt=1727547530346",
    },
    {
      parte: "",
      descricao: "Quem Somos",
      tecnologias: "React, JavaScript/TypeScript, Tailwind CSS, React Router.",
      comoFunciona:
        "Componente 'Sobre' exibe perfis de desenvolvedores com fotos, cargos e links para redes sociais, utilizando Tailwind CSS para estilização responsiva.",
      imagem:
        "https://ik.imagekit.io/netdmdufko/quemsomosMinerva.png?updatedAt=1727544470393",
    },
    {
      parte: "",
      descricao: "Nossos Cursos",
      tecnologias: "React, JavaScript/TypeScript, Tailwind CSS, React Router, Axios, Context API, Node.js, Vercel.",
      comoFunciona:
        "A página carrega cursos via API, permite filtragem por tipo e duração. Componentes como Sidebar e CourseCard gerenciam estados e exibem dados ao usuário.",
      imagem:
        "https://ik.imagekit.io/netdmdufko/cursosMinerva.png?updatedAt=1727544523796",
    },
    {
      parte: "",
      descricao: "Login",
      tecnologias: "React, TypeScript, Tailwind CSS, React Router, Context API, Axios.",
      comoFunciona:
        "A página de login permite que o usuário acesse sua conta usando email e senha. Há opções para login via Facebook e Google, além de redirecionamento após autenticação.",
      imagem:
        "https://ik.imagekit.io/netdmdufko/loginMinerva.png?updatedAt=1727550680873",
    },
    {
      parte: "",
      descricao: "Cadastro",
      tecnologias: " React, TypeScript, Tailwind CSS, React Router, RotatingLines, Axios.",
      comoFunciona:
        "A página de cadastro permite que novos usuários se registrem. Os dados inseridos são validados e, se corretos, enviados para o servidor para criar uma nova conta.",
      imagem:
        "https://ik.imagekit.io/netdmdufko/cadastroMinerva.png?updatedAt=1727544498528",
    },
  ],
  BlogPessoal: [
    {
      parte: "",
      descricao: "Página Inicial",
      tecnologias: "React, TypeScript, Tailwind CSS, React Router, Axios, Context API, Redux.",
      comoFunciona:
        "Esta interface em React e TypeScript usa os componentes ListaPostagens, ModalPostagem e FormPostagem.",
      imagem:
        "https://ik.imagekit.io/netdmdufko/blogPessoal.png?updatedAt=1727538026151",
    },
    {
      parte: "",
      descricao: "Cadastrar Postagem",
      tecnologias: "React, TypeScript, Tailwind CSS, React Router, Axios, Context API, Formik.",
      comoFunciona: "O ModalPostagem abre um formulário para criar ou editar postagens via API, enquanto ListaPostagens exibe as postagens.O ListaPostagens exibe postagens recuperadas via API de forma dinâmica na interface.",
      imagem:
        "https://ik.imagekit.io/netdmdufko/cadastrarPostagem.png?updatedAt=1727538026091",
    },
    {
      parte: "",
      descricao: "Cadastrar Tema",
      tecnologias: "React, TypeScript, Tailwind CSS, React Router, Axios, Context API, Formik.",
      comoFunciona: "O código implementa um formulário para criar/editar temas e um cartão para exibir temas. O CardTemas possui botões para editar e deletar, usando React Router para navegação entre páginas.",
      imagem:
        "https://ik.imagekit.io/netdmdufko/cadastrarTema.png?updatedAt=1727538026294",
    },
    {
      parte: "",
      descricao: "Cadastro",
      tecnologias: "React, TypeScilwind CSS, React Router, Axios, Context API, Rotating Lines.",
      comoFunciona: "O cadastro coleta nome, e-mail, senha e foto do usuário. Verifica se a senha corresponde à confirmação e tem pelo menos 8 caracteres. Se for válido, envia os dados para a API via POST, que realiza o cadastro e redireciona.",
      imagem:
        "https://ik.imagekit.io/netdmdufko/cadastroUsuarioBpessoal.png?updatedAt=1727538026462",
    },
    {
      parte: "",
      descricao: "Login",
      tecnologias: "React, TypeScilwind CSS, React Router, Axios, Context API, Rotating Lines.",

      comoFunciona: "O componente Login coleta as credenciais do usuário e usa o contexto de autenticação para fazer login. Exibe um loader durante a autenticação e alerta se os dados estiverem incorretos",
      imagem:
        "https://ik.imagekit.io/netdmdufko/loginbPessoal.png?updatedAt=1727538047229",
    },
  ]
  };

  // Verificar se o projeto existe
  const partes = projetos[nomeProjetoFormatado] || [];

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen mt-8 pt-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } bg-transparent`}
    >
      {partes.length > 0 ? (
        <>
          <h1 className="text-4xl font-bold mb-12">
            Documentação do Projeto: {nomeProjeto}
          </h1>

          {/* Renderização de todas as partes do projeto */}
          {partes.map((parte, index) => (
            <ProjectPart key={index} {...parte} />
          ))}
        </>
      ) : (
        <h2 className="text-2xl">Projeto não encontrado.</h2>
      )}
    </div>
  );
};

export default VerProjetos;