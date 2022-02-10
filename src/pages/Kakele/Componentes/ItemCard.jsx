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
      <div className="card">
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <div className="card-text">
            Elemento: <span className={energy}>{energy}</span>
          </div>
          <div className="card-text">Armadura: {armor}</div>
          <div className="card-text">Magia: {magic}</div>
          <div className="card-text">Ataque: {attack}</div>
          <div className="card-text">Nivel: {level}</div>
          <div className="card-text">Slot: {slot}</div>

          {ignoredItens && (
            <>
              <div className="input-group">
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
              <div className="input-group">
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
