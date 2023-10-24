import { useState } from "react";
import "../css/App.css";

function App() {
  const [cont, setCont] = useState(0);
  return (
    <main>
      <div className="card-app">
        <h1>Hola Mundo</h1>
        <div className="app" onClick={() => setCont(() => Math.random() * 5)}>
          <p>Estoe es un ejemplo</p>
        </div>
      </div>
      <div>
        <label> Contador: {cont}</label>
      </div>
    </main>
  );
}

export default App;
