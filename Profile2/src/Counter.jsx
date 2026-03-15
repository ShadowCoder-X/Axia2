import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   console.log(count);
  //   console.log(setCount);

  function handleIncrement() {
    console.log("hello");
    setCount("heLLOO");
  }

  function handleDecrement() {
    console.log("Decrease!!!");
  }

  return (
    <div>
      <h2>Counter</h2>

      <h3>Count: {count}</h3>

      <button onClick={handleIncrement}>Increase</button>

      {/* <button onClick={() => setCount((prev) => prev + 1)}>Increase</button> */}

      <button>Reset</button>

      <button onClick={handleDecrement}>Decrease</button>
    </div>
  );
};

export default Counter;
