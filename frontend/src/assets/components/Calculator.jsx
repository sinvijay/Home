import { useState } from 'react';
import './Calculator.css'; // Optional styling file

export default function Calculator() {
  const [display, setDisplay] = useState('0');

  // Handle clicking numbers and operators
  const handleClick = (value) => {
    if (display === '0' || display === 'Error') {
      setDisplay(value); // Replace initial '0' or error
    } else {
      setDisplay(display + value); // Append to current expression
    }
  };

  // Clear the screen
  const handleClear = () => {
    setDisplay('0');
  };

  // Evaluate the math expression
  const handleCalculate = () => {
    try {
      // eval() evaluates the math string (e.g., "5+5" becomes 10)
      // Note: In large production apps, safer math parser libraries are preferred, but this is great for a project!
      const result = eval(display);
      setDisplay(String(result));
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calc-container">
      <h2>React Calculator</h2>
      
      {/* Calculator Screen */}
      <div className="calc-display">{display}</div>

      {/* Keypad Grid */}
      <div className="calc-keypad">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className="op" onClick={() => handleClick('/')}>÷</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className="op" onClick={() => handleClick('*')}>×</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className="op" onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button className="clear" onClick={handleClear}>C</button>
        <button className="op" onClick={() => handleClick('+')}>+</button>

        <button className="equals" onClick={handleCalculate} style={{ gridColumn: 'span 4' }}>=</button>
      </div>
    </div>
  );
}