import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    alert("decrement");
    // count -= 1
    setCount(count - 1);
  };

  const handleIncrement = () => {
    alert("increment");
    // count += 1

    setCount(count + 1);
  };

  const handleResetCounter = () => {
    alert("RESET");
    setCount(0);
  };

  return {
    count,
    handleDecrement,
    handleIncrement,
    handleResetCounter,
  };
};
