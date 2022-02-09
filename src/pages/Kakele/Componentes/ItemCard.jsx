import React from 'react';

export default function ItemCard(props) {
  const {
    index,
    ignoredItens,
    ignoreItens,
    ignoreThisSlotsElement,
    ignoreElementForThisSlot,
    item: { name, energy, armor, magic, attack, level, slot },
  } = props;
  return (
    <div className="col">
      <div className="card mb-2">
        <div className="card-body pb-0" style={{ minWidth: '200px' }}>
          <h6 className="card-title">{name}</h6>
          <div className="d-flex flex-column mb-1">
            <span className="card-text">Elemento: {energy}</span>
            <span className="card-text">Armadura: {armor}</span>
            <span className="card-text">Magia: {magic}</span>
            <span className="card-text">Ataque: {attack}</span>
            <span className="card-text">Nivel: {level}</span>
          </div>
          <div className="input-group mb-2">
            <div className="input-group-text">
              <input
                className="form-check-input"
                type="checkbox"
                name={name}
                id={`exclude-item-${index}`}
                checked={ignoredItens.includes(name)}
                aria-label="Checkbox for following text input"
                onChange={e => ignoreItens(e.target.name, e.target.checked)}
              />
            </div>
            <label
              htmlFor={`exclude-item-${index}`}
              className="input-group-text"
            >
              Não incluir
            </label>
          </div>
          <div className="input-group mb-2">
            <div className="input-group-text">
              <input
                className="form-check-input"
                type="checkbox"
                name={slot}
                id={`ignore-slot-element-${index}`}
                checked={ignoreThisSlotsElement.includes(slot)}
                aria-label="Checkbox for following text input"
                onChange={e =>
                  ignoreElementForThisSlot(e.target.name, e.target.checked)
                }
              />
            </div>
            <label
              htmlFor={`ignore-slot-element-${index}`}
              className="input-group-text"
            >
              Ignora elemento dessa peça
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
