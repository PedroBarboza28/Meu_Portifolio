import { createContext, ReactNode, useState, useContext } from "react";

// Define a estrutura dos dados que serão compartilhados
interface MenuContextProps {
    isMenuOpen: boolean; // Estado que indica se o menu está aberto
    toggleMenu: () => void; // Função para alternar o estado do menu
    darkMode: boolean; // Estado do tema (modo escuro ou claro)
    toggleTheme: () => void; // Função para alternar entre modo escuro e claro
}

// Cria o contexto com um valor padrão (pode ser undefined inicialmente)
const MenuContext = createContext<MenuContextProps | undefined>(undefined);

// Define as propriedades do componente ContextProvider
interface ContextProviderProps {
    children: ReactNode; // Componentes filhos que serão envolvidos pelo MenuProvider
}

// Cria o provider que irá gerenciar o estado do menu e do tema
export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [isMenuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu
    const [darkMode, setDarkMode] = useState(false); // Estado para controlar o tema (claro/escuro)

    // Função para alternar o tema
    const toggleTheme = () => {
        setDarkMode(prev => !prev);
        const body = document.body;
        body.classList.toggle('dark', !darkMode); // Adiciona ou remove a classe 'dark' no body
      };
      

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setMenuOpen(prev => !prev); 
    };

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu, darkMode, toggleTheme }}>
            {/* Aplica a classe "dark" ao body quando darkMode estiver ativo */}
            <div className={darkMode ? 'dark' : ''}>
                {children}
            </div>
        </MenuContext.Provider>
    );
};

// Hook personalizado para usar o contexto de menu e tema
export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu deve ser usado dentro de um MenuProvider");
    }
    return context; // Retorna o contexto
};

export default MenuContext; // Exporta o contexto
