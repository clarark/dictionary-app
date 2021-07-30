
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        <strong> The Dictionary</strong>
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="text-center">
          <small> 
            <a href="https://github.com/clarark/dictionary-app" target="_blank" rel="noreferrer"> Coded </a> by Clara Redshaw Kranich </small>
        </footer>
      </div>
    </div>
  );
}
