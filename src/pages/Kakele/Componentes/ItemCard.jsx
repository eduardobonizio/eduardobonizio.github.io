import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import copy from 'copy-to-clipboard';

import {
  udateOneEquipment,
  updateCurrentSet,
} from '../../../store/actions/kakeleCurrentSet.actions';
import { FAKE_ITEM } from '../kakeleData';
import ButtonForKakele from './ButtonForKakele';

import './css/ItemCard.css';

export default function ItemCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    index,
    ignoredItens,
    ignoreItens,
    ignoreThisSlotsElement,
    ignoreElementForThisSlot,
    item,
    item: {
      sources,
      obsPtBr,
      namePtBr,
      energy,
      armor,
      magic,
      attack,
      level,
      slot,
      imgUrl,
    },
  } = props;

  const showDetails = window.location.href.includes('kakele/item/');
  const currentSet = useSelector(state => state.currentSet);

  const equipItem = thisItem => {
    if (thisItem.name !== '-----------') {
      if (thisItem.slot === 'weapon') {
        if (thisItem.twoHanded) {
          dispatch(
            updateCurrentSet({
              ...currentSet,
              weapon: thisItem,
              book: { ...FAKE_ITEM, sloot: 'book' },
              shield: { ...FAKE_ITEM, slot: 'shield' },
            }),
          );
          return;
        }
        dispatch(udateOneEquipment(thisItem));
        return;
      }
      if (thisItem.slot === 'shield') {
        if (currentSet.weapon.twoHanded) {
          dispatch(
            updateCurrentSet({
              ...currentSet,
              shield: thisItem,
              weapon: { ...FAKE_ITEM, slot: 'weapon' },
              book: { ...FAKE_ITEM, sloot: 'book' },
            }),
          );
          return;
        }
        dispatch(
          updateCurrentSet({
            ...currentSet,
            shield: thisItem,
            book: { ...FAKE_ITEM, sloot: 'book' },
          }),
        );
        return;
      }
      if (thisItem.slot === 'book') {
        if (currentSet.weapon.twoHanded) {
          dispatch(
            updateCurrentSet({
              ...currentSet,
              book: thisItem,
              weapon: { ...FAKE_ITEM, slot: 'weapon' },
              shield: { ...FAKE_ITEM, sloot: 'shield' },
            }),
          );
          return;
        }
        dispatch(
          updateCurrentSet({
            ...currentSet,
            book: thisItem,
            shield: { ...FAKE_ITEM, sloot: 'shield' },
          }),
        );
        return;
      }
      dispatch(udateOneEquipment(thisItem));
    }
  };

  return (
    <div className="col">
      <div className="card mb-2">
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
            {showDetails && (
              <>
                <span className="card-text">Fonte: {sources}</span>
                <span className="card-text card-info">Info: {obsPtBr}</span>
              </>
            )}

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
          <div className="d-flex button-container">
            <ButtonForKakele
              onClick={() => copy(namePtBr)}
              text="Copiar nome"
            />
            {!showDetails && (
              <ButtonForKakele
                onClick={() => navigate(`/kakele/item/${namePtBr}`)}
                text="Ver Item"
              />
            )}

            <ButtonForKakele onClick={() => equipItem(item)} text="Equipar" />
          </div>
        </div>
      </div>
    </div>
  );
}
