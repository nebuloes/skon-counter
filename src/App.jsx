import React, { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);
  const [isCounting, setCounting] = useState(false);

  useEffect(() => {

    // conditional, "isCounting" is set to true by click on start button
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
      <div className="App">
        {count}
      </div>
      <button className="App-buttonStart" onClick={() => setCounting(() => true)}>Start</button>
      <button className="App-buttonStop" onClick={() => setCounting(() => false)}>Stop</button>
      <button className="App-buttonReset" onClick={() => setCount(() => 0)}>Reset</button>
    </div>
  )
}

export default App;
