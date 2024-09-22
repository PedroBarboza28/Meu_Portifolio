import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { ContextProvider } from './contexts/Contexts';

function App() {
  return (
    <ContextProvider>
       <BrowserRouter>
      <Navbar />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
