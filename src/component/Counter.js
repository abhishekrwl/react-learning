import React, { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
          increment
        </button>
        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
          decrement
        </button>
        {counter}
      </div>
    </>
  );
}

export default Counter;
