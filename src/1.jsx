import { useState , useEffect} from 'react'
import './App.css'


function blockMainThread(duration) {
  const start = performance.now();
  while (performance.now() - start < duration) {
    // Busy-wait loop to block the main thread
  }
}

function FirstApp() {
  const [count, setCount] = useState(0);

  console.log("console log");

  // assuming some tasks in callstack
  blockMainThread(10);

  queueMicrotask(() => {
    console.log("queued Microtask");
  });

  requestAnimationFrame(() => {
    console.log("------ requestAnimationFrame -------");
  });

  useEffect(() => {
    console.log("useEffect executed");
    setCount(prev => prev + 1);
  }, []);
  
  return (
    <>
      <h1>Check the console log →→→→→→→→→→→</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default FirstApp
