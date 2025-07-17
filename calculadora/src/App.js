import React, { useState } from 'react';
import './App.css';
import { Calcular } from './Components/Calcular';

function App() {
  const [elementosVisibles, setElementosVisibles] = useState(true);

  const handleCalcularClick = () => {
    setElementosVisibles(false);
    <Calcular />
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* 3. Usar el estado para renderizar condicionalmente los elementos */}
        {elementosVisibles && <h1 className='Titulo'>Calculadora</h1>}
        {elementosVisibles && <button className="Calcular" onClick={handleCalcularClick}>Calcular</button>}

        {!elementosVisibles && <Calcular />}
      </header>
    </div>
  );
}

export default App;
