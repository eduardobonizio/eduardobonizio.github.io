import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import copy from 'copy-to-clipboard';

import ButtonForKakele from './ButtonForKakele';

import './css/ItemCard.css';

export default function ItemCard(props) {
  const navigate = useNavigate();
  const {
    index,
    ignoredItens,
    ignoreItens,
    ignoreThisSlotsElement,
    ignoreElementForThisSlot,
    equipItem,
    item,
    item: { namePtBr, energy, armor, magic, attack, level, slot, imgUrl },
  } = props;

  const currentSet = useSelector(state => state.currentSet);
  return (
    <div className="col">
      <div className="card mb-2 container-fluid">
        <div className="card-body pb-0">
          <h6 className="card-title">{namePtBr}</h6>
          <div className="d-flex flex-column">
            <span className="card-text">
              {imgUrl && (
                <img alt={namePtBr} src={imgUrl.replaceAll('"', '')} />
              )}
              Elemento: <span className={energy}>{energy}</span>
            </span>
            <span className="card-text">Armadura: {armor}</span>
            <span className="card-text">Magia: {magic}</span>
            <span className="card-text">Ataque: {attack}</span>
            <span className="card-text">Nivel: {level}</span>
            <span className="card-text">Slot: {slot}</span>

            {currentSet[slot] &&
              currentSet[slot].namePtBr === namePtBr &&
              currentSet[slot].name !== '-----------' && (
                <span className="equiped-item">Equipado</span>
              )}
          </div>
          {ignoredItens && (
            <>
              <div className="input-group mb-2">
                <div className="input-group-text">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name={namePtBr}
                    id={`exclude-item-${index}`}
                    checked={ignoredItens.includes(namePtBr)}
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
            <ButtonForKakele
              onClick={() => copy(namePtBr)}
              text="Copiar nome"
            />
            <ButtonForKakele
              onClick={() => navigate(`/kakele/item/${namePtBr}`)}
              text="Ver Item"
            />
            {equipItem && (
              <ButtonForKakele onClick={() => equipItem(item)} text="Equipar" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
