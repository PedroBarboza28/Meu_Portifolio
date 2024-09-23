import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { ContextProvider } from './contexts/Contexts';
import Home from './pages/home/home';
import Projects from './pages/projects/Projects';
import WhoAmI from './pages/whoami/WhoAmI';
import Skills from './pages/skills/Skills';

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
   <Navbar />
     {/* Uso de Routes e Route no lugar de Router */}
     <Routes>
       {/* Defina a rota para a página Home */}
       <Route path="/" element={<Home />} />
       <Route path="/projects" element={<Projects />} /> {/* Rota para Projects */}
       <Route path="/whoami" element={<WhoAmI />} /> {/* Rota para Projects */}
       <Route path="/skills" element={<Skills />} /> {/* Rota para Projects */}
     </Routes>
   </BrowserRouter>
 </ContextProvider>
  );
}

export default App;
