import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import NumberOrPalabra from './NumberOrPalabra';
import PalabraColor from './PalabraColor';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Welcome />} />
        <Route path='/:input' element={<NumberOrPalabra />} />
        <Route path='/:palabra/:colorPalabra/:colorFondo' element={<PalabraColor />} />
      </Routes>
    </div>
  );
}

export default App;
