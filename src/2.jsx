import { useState , useLayoutEffect} from 'react'
import './App.css'


function blockMainThread(duration) {
  const start = performance.now();
  while (performance.now() - start < duration) {
    // Busy-wait loop to block the main thread
  }
}

function SecondApp() {
  const [count, setCount] = useState(0);

  console.log("console log");

  // assuming some tasks in callstack
  blockMainThread(10);
  
  useLayoutEffect(() => {
    console.log("useLayoutEffect executed");
  }, [count]);

  queueMicrotask(() => {
    console.log("queued Microtask");
  });

  requestAnimationFrame(() => {
    console.log("------ requestAnimationFrame -------");
  });

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

export default SecondApp
