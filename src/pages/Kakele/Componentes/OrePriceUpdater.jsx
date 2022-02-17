import React from 'react';

export default function OrePriceUpdater(props) {
  const { oresPrice, setOresPrice, text } = props;

  const ores = Object.keys(oresPrice);

  return (
    <>
      {ores.map(key => (
        <div className="input-group mb-2" key={key}>
          <span className="input-group-text" id={`preco-${key}-bruto`}>
            {text[key]}
          </span>
          <input
            type="number"
            className="form-control"
            placeholder={text}
            aria-label={text}
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
