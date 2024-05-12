import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Navigation from "./Navigation";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="container">
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;
