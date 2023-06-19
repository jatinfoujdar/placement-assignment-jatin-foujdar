import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`bg-${darkMode ? 'gray' : 'white'} text-${darkMode ? 'white' : 'gray'} p-4`}>
      <h1 className="text-2xl font-bold mb-4">React Counter App</h1>
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={increment}>
        Increment
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={decrement}>
        Decrement
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <p className="text-xl mt-4">Count: {count}</p>
    </div>
  );
};

export default Counter;
