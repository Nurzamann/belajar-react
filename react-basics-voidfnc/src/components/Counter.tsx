import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const { count, handleDecrement, handleIncrement, handleResetCounter } =
    useCounter();

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
      }}
    >
      <button onClick={handleDecrement}>Kurang</button>
      <p style={{ fontSize: "48px" }}>{count}</p>
      <button onClick={handleIncrement}>Tambah</button>
      <button onClick={handleResetCounter}>RESET</button>
    </div>
  );
};

export default Counter;
