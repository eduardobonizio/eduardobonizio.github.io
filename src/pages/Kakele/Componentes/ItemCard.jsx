import React from 'react';

export default function ItemCard(props) {
  const {
    index,
    ignoredItens,
    ignoreItens,
    ignoreThisSlotsElement,
    ignoreElementForThisSlot,
    item: { Equipment, Weapon, Energy, Armor, Magic, Attack, Level, Slot },
  } = props;
  return (
    <div className="col">
      <div className="card mb-2">
        <div className="card-body pb-0" style={{ minWidth: '200px' }}>
          <h6 className="card-title">{Equipment || Weapon}</h6>
          <div className="d-flex flex-column mb-1">
            <span className="card-text">Elemento: {Energy}</span>
            <span className="card-text">Armadura: {Armor}</span>
            <span className="card-text">Magia: {Magic}</span>
            <span className="card-text">Ataque: {Attack}</span>
            <span className="card-text">Nivel: {Level}</span>
          </div>
          <div className="input-group mb-2">
            <div className="input-group-text">
              <input
                className="form-check-input"
                type="checkbox"
                name={Equipment || Weapon}
                id={`exclude-item-${index}`}
                checked={
                  ignoredItens.includes(Equipment) ||
                  ignoredItens.includes(Weapon)
                }
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
                name={Slot}
                id={`ignore-slot-element-${index}`}
                checked={ignoreThisSlotsElement.includes(Slot)}
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
