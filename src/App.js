import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import DisplayGeral from "./components/DisplayGeral";

function App() {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  const handleClick = (obj) => {
    setTransactions([...transactions, obj]);
  };

  console.log(transactions);

  return (
    <div className="App">
      <Form handleClick={handleClick} />
      <Display transactions={transactions} />
      <DisplayGeral transactions={transactions} />
    </div>
  );
}

export default App;
