import logo from './logo.svg';
import './App.css';
import Demo from './components/ClassComponent';
import Funct from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Demo></Demo>
      <Funct></Funct>
      </header>
    </div>
  );
}

export default App;
