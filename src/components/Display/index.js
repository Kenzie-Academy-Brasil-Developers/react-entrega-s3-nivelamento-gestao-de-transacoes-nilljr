import Card from "../Card";
import { useState } from "react";

const Display = ({ transactions }) => {
  const [page, setPage] = useState(1);

  return (
    <div className="display">
      <h2>Display</h2>
      <button onClick={() => (page === 1 ? setPage(2) : setPage(1))}>
        {page === 1 ? "Mostrar saídas" : "Mostrar entradas"}
      </button>
      {page === 1 ? (
        <div>
          <h2>Entradas:</h2>
          <Card transactions={transactions.filter((e) => e.quantity > 0)} />
        </div>
      ) : (
        <div>
          <h2>Saídas:</h2>
          <Card transactions={transactions.filter((e) => e.quantity < 0)} />
        </div>
      )}
    </div>
  );
};

export default Display;
