import React, { useState, useEffect } from "react";

const HeavyComponent = () => {
  const [result, setResult] = useState(0);

  useEffect(() => {
    const calculate = () => {
      let sum = 0;
      for (let i = 0; i < 100000000; i++) {
        sum += i;
      }
      return sum;
    };

    setResult(calculate());
  }, []);

  return (
    <div style={{ marginTop: 40 }}>
      <h2>Heavy Component</h2>
      {result !== 0 ? <p>Result: {result}</p> : <p>Calculating...</p>}
    </div>
  );
};

export default HeavyComponent;
