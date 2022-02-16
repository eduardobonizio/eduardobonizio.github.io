import React from 'react';

export default function OrePriceUpdater(props) {
  const { oresPrice, setOresPrice } = props;
  const message = {
    copperPrice: 'Preço Cobre Bruto',
    tinPrice: 'Preço Estanho Bruto',
    silverPrice: 'Preço Prata Bruta',
    ironPrice: 'Preço Ferro Bruto',
    goldPrice: 'Preço Ouro Bruto',
  };

  const ores = Object.keys(oresPrice);

  return (
    <>
      {ores.map(key => (
        <div className="input-group mb-2" key={key}>
          <span className="input-group-text" id={`preco-${key}-bruto`}>
            {message[key]}
          </span>
          <input
            type="number"
            className="form-control"
            placeholder={message}
            aria-label={message}
            aria-describedby={`preco-${key}-bruto`}
            value={oresPrice[key]}
            onChange={e =>
              setOresPrice({
                ...oresPrice,
                [key]: Number(e.target.value),
              })
            }
          />
        </div>
      ))}
    </>
  );
}
