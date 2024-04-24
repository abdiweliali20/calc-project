import React, { useState } from 'react';

function Calculator() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const res = parseFloat(value1) + parseFloat(value2);
    setResult(res);
  };

  const handleSubtraction = () => {
    const res = parseFloat(value1) - parseFloat(value2);
    setResult(res);
  };

  const handleMultiplication = () => {
    const res = parseFloat(value1) * parseFloat(value2);
    setResult(res);
  };

  const handleDivision = () => {
    if (parseFloat(value2) === 0) {
      setResult('Cannot divide by zero');
    } else {
      const res = parseFloat(value1) / parseFloat(value2);
      setResult(res);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h2>Result: {result}</h2>
      </div>
      <form>
        <div>
          <h3 className='text-2xl'>Value1</h3>
          <input  type="text"  value={value1} onChange={(e) => setValue1(e.target.value)} />
          <h3 className='text-2xl'>Value2</h3>
          <input type="text" value={value2} onChange={(e) => setValue2(e.target.value)} />
          <div>
            <button className='text-green-600 border border-green-600 p-4' type="button" onClick={handleAddition}>+</button>
            <button className='text-green-600 border border-green-600 p-4' type="button" onClick={handleSubtraction}>-</button>
            <button className='text-green-600 border border-green-600 p-4' type="button" onClick={handleDivision}>/</button>
            <button className='text-green-600 border border-green-600 p-4' type="button" onClick={handleMultiplication}>*</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
