import './App.css';
import Menu from './views/Menu';
import VerProducto from './components/VerProducto/VerProducto';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/:title' element={<VerProducto />} />
      </Routes>
    </div>
  );
}

export default App;
