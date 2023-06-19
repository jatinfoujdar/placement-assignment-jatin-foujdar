import { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleClick = (value) => {
    if (display === '0') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const calculateResult = () => {
    let result;
    try {
      result = eval(display);
      if (result === Infinity || isNaN(result)) {
        throw new Error('Invalid expression');
      }
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">React Calculator</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <input
          className="w-full h-12 text-2xl p-2 mb-4 border border-gray-300 rounded"
          type="text"
          value={display}
          readOnly
        />
        <div className="grid grid-cols-4 gap-4">
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('7')}>
            7
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('8')}>
            8
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('9')}>
            9
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('/')}>
            /
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('4')}>
            4
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('5')}>
            5
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('6')}>
            6
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('*')}>
            *
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('1')}>
            1
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('2')}>
            2
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('3')}>
            3
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('-')}>
            -
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('0')}>
            0
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('.')}>
            .
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => calculateResult()}>
            =
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold text-2xl p-2 rounded" onClick={() => handleClick('+')}>
            +
          </button>
          <button className="bg-red-500 text-white font-bold text-2xl p-2 rounded col-span-2" onClick={() => clearDisplay()}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
