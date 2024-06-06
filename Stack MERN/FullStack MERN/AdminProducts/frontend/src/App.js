import './App.css';
import Menu from './views/Menu';
import VerProducto from './components/VerProducto/VerProducto';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/:title' element={<VerProducto />} />
      </Routes>
    </div>
  );
}

export default App;
