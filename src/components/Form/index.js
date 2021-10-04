import { useState } from "react";

const Form = ({ handleClick }) => {
  const [entry, setEntry] = useState({});

  console.log(entry);

  return (
    <div className="form">
      <h2>Cadastrar nova entrada/saída</h2>
      <input
        type="string"
        value={entry.name}
        placeholder="Nome da fruta"
        onChange={(event) => setEntry({ ...entry, name: event.target.value })}
      />
      <input
        type="string"
        value={entry.quantity}
        placeholder="Quantidade a sair/entrar"
        onChange={(event) =>
          setEntry({ ...entry, quantity: event.target.value })
        }
      />
      <input
        type="number"
        value={entry.price}
        placeholder="Preço"
        onChange={(event) =>
          setEntry({ ...entry, price: parseInt(event.target.value) })
        }
      />
      <button onClick={() => handleClick(entry)}>Enviar</button>
    </div>
  );
};

export default Form;
