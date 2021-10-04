const Card = ({ transactions }) => {
  return (
    <ul className="card">
      {transactions.map((e) => (
        <li key={e.name}>
          Nome: {e.name}, Quantidade: {e.quantity}, Valor: {e.price}
        </li>
      ))}
    </ul>
  );
};

export default Card;
