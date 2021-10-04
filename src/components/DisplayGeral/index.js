import Card from "../Card";

const DisplayGeral = ({ transactions }) => {
  const sales = transactions
    .filter((e) => e.quantity < 0)
    .reduce((acc, cur) => acc + -1 * (cur.price * cur.quantity), 0);

  return (
    <div className="displayGeral">
      <h2>Todas as movimentações:</h2>
      <Card transactions={transactions} />
      <span>Valor total de vendas: ${sales}</span>
    </div>
  );
};

export default DisplayGeral;
