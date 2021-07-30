
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
          <small> This project was coded by Clara Redshaw Kranich and is  
            <a href="https://github.com/clarark/dictionary-app" target="_blank" rel="noreferrer"> open-sourced on GitHub </a>  </small>
        </footer>
      </div>
    </div>
  );
}
