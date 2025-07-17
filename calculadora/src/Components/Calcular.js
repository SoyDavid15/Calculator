import React, { useState } from 'react';

export const Calcular = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleNumberClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleClear = () => {
    setDisplayValue('');
  };

  const resultado = () => {
    // Evitar evaluar una cadena vacía o que termine en un operador
    if (!displayValue || /[+\-*/]$/.test(displayValue)) return;

    try {
      // Validar que no haya caracteres peligrosos
      if (/[^0-9+\-*/().\s]/.test(displayValue)) {
        setDisplayValue("Error");
        return;
      }
      const resultados = new Function("return " + displayValue)();
      setDisplayValue(String(resultados)); // Convertir siempre a String para mostrarlo
    } catch (error) {
      setDisplayValue("Error"); // Mostrar "Error" si la expresión es inválida
    }
  };

  return (
    <div>
    <div className='CuerpoCalculadora'>
      <div className='Pantalla'><p>{displayValue}</p></div>
      <div className='SeccionNumeros'>
        <button className='Numeros' onClick={() => handleNumberClick('1')}>1</button>
        <button className='Numeros' onClick={() => handleNumberClick('2')}>2</button>
        <button className='Numeros' onClick={() => handleNumberClick('3')}>3</button>
        <button className='Numeros' onClick={() => handleNumberClick('4')}>4</button>
        <button className='Numeros' onClick={() => handleNumberClick('5')}>5</button>
        <button className='Numeros' onClick={() => handleNumberClick('6')}>6</button>
        <button className='Numeros' onClick={() => handleNumberClick('7')}>7</button>
        <button className='Numeros' onClick={() => handleNumberClick('8')}>8</button>
        <button className='Numeros' onClick={() => handleNumberClick('9')}>9</button>
        <button className='Numeros' onClick={() => handleNumberClick('0')}>0</button>
        <button className='Numeros' onClick={() => handleNumberClick('+')}>+</button>
        <button className='Numeros' onClick={() => handleNumberClick('-')}>-</button>
        <button className='Numeros' onClick={() => handleNumberClick('*')}>*</button>
        <button className='Numeros' onClick={() => handleNumberClick('/')}>/</button>
        <button className='Numeros' onClick={handleClear}>Del</button>
        <button className='Numeros' onClick={resultado}>=</button>
      </div>
    </div>
    </div>
  );
};
