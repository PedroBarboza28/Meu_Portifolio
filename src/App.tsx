import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Importação correta
import './App.css';
import Navbar from './components/navbar/Navbar';
import { ContextProvider } from './contexts/Contexts';
import Home from './pages/home/home';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        {/* Uso de Routes e Route no lugar de Router */}
        <Routes>
          {/* Defina a rota para a página Home */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
