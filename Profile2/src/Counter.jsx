import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(true);
  //   console.log(count);
  //   console.log(setCount);

  function handleIncrement() {
    console.log("hello");
    // setCount("heLLOO");
    setCount(count + 1);
  }

  function handleDecrement() {
    console.log("Decrease!!!");
    setCount(count - 1);
  }

  return (
    <>
      <div className="counter">
        <h2>Counter</h2>

        <h3>Count: {count}</h3>

        <button onClick={handleIncrement}>Increase</button>

        {/* <button onClick={() => setCount((prev) => prev + 1)}>Increase</button> */}

        <button>Reset</button>

        <button onClick={handleDecrement}>Decrease</button>
      </div>

      {/*light switching */}
      <div>
        <h3>Light Switch</h3>
        <p>This light bulb is {isOn ? "ON" : "OFF"} </p>
        <button>Press to Switch ON</button>
      </div>
    </>
  );
};

export default Counter;
