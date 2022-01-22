import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isCounting, setCounting] = useState(false);

  useEffect(() => {

    if (isCounting) {
      // executes function setCount every half second to increase state variable "count" by 1
      const interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 500);

      // clears interval on unmount, prevents memory leak
      return () => clearInterval(interval);
    }
  }, [isCounting]);

  return (
    <div className="App">
      <p>
        count is: {count}
      </p>
      <button onClick={() => setCounting(() => true)}>Start</button>
      <button onClick={() => setCounting(() => false)}>Stop</button>
      <button onClick={() => setCount(() => 0)}>Reset</button>
    </div>
  )
}

export default App;
