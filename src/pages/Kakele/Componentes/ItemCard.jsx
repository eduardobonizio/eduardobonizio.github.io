/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';

import copy from 'copy-to-clipboard';

import ButtonForKakele from './ButtonForKakele';

export default function ItemCard(props) {
  const {
    index,
    ignoredItens,
    ignoreItens,
    ignoreThisSlotsElement,
    ignoreElementForThisSlot,
    equipItem,
    item,
    item: { name, energy, armor, magic, attack, level, slot },
  } = props;

  return (
    <div className="col">
      <div className="card mb-2 container-fluid">
        <div className="card-body pb-0">
          <h6 className="card-title">{name}</h6>
          <div className="d-flex flex-column">
            <span className="card-text">
              Elemento: <span className={energy}>{energy}</span>
            </span>
            <span className="card-text">Armadura: {armor}</span>
            <span className="card-text">Magia: {magic}</span>
            <span className="card-text">Ataque: {attack}</span>
            <span className="card-text">Nivel: {level}</span>
            <span className="card-text">Slot: {slot}</span>
          </div>

          {ignoredItens && (
            <>
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
                  Ignora este elemento
                </label>
              </div>
            </>
          )}
          <div className="d-flex justify-content-between mt-1">
            <ButtonForKakele onClick={() => copy(name)} text="Copiar nome" />
            {equipItem && (
              <ButtonForKakele onClick={() => equipItem(item)} text="Equipar" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
