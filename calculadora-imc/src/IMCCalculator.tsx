import React, { useState } from 'react';

const IMCCalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const calculateIMC = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // convertendo cm para m
    
    if (isNaN(weightNum) || isNaN(heightNum)) {
      setResult('Por favor, insira valores válidos.');
      return;
    }

    const imc = weightNum / (heightNum * heightNum);
    setResult(`Seu IMC é ${imc.toFixed(2)}`);
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <input
        type="number"
        placeholder="Peso (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Altura (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateIMC}>Calcular IMC</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default IMCCalculator;
