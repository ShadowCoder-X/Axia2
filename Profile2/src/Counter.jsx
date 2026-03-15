import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);
  return (
    <div>
      <h2>Counter</h2>

      <h3>Count: {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>

      <button>Reset</button>

      <button>Decrease</button>
    </div>
  );
};

export default Counter;
