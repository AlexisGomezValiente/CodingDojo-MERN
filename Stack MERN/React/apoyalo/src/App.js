import logo from './logo.svg';
import './App.css';
import PersonCard from './PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={'Alexis'} lastName={'Gomez'} age={20} hairColor={'Black'} />
      <PersonCard firstName={'Luz'} lastName={'Narvaez'} age={21} hairColor={'Brown'} />
      <PersonCard firstName={'Tomas'} lastName={'Franco'} age={22} hairColor={'Black'} />
      <PersonCard firstName={'Willian'} lastName={'Gomez'} age={45} hairColor={'Black'} />
    </div>
  );
}

export default App;
