import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import copy from 'copy-to-clipboard';

import {
  udateOneEquipment,
  updateCurrentSet,
} from '../../../store/actions/kakeleCurrentSet.actions';
import { itemCardJsx as textOptions } from '../Data/dataLanguages';
import { FAKE_ITEM } from '../Data/kakeleData';
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
  const { language } = useSelector(state => state.currentKakeleFilters);
  const text = textOptions[language];

  const equipItem = thisItem => {
    if (thisItem.nameEN !== '-----------') {
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
          <h6 className="card-title">{item[`name${language}`]}</h6>
          <div className="d-flex flex-column">
            <span className="card-text">
              {imgUrl && (
                <img
                  alt={item[`name${language}`]}
                  src={imgUrl.replaceAll('"', '')}
                />
              )}
              {text.element}: <span className={energy}>{energy}</span>
            </span>
            <span className="card-text">
              {text.armor}: {armor}
            </span>
            <span className="card-text">
              {text.magic}: {magic}
            </span>
            <span className="card-text">
              {text.attack}: {attack}
            </span>
            <span className="card-text">
              {text.level}: {level}
            </span>
            <span className="card-text">
              {text.slot}: {slot}
            </span>
            {showDetails && (
              <>
                <span className="card-text">
                  {text.sources}: {sources}
                </span>
                <span className="card-text card-info">
                  {text.info}: {obsPtBr}
                </span>
              </>
            )}

            {currentSet[slot] &&
              currentSet[slot][`name${language}`] === item[`name${language}`] &&
              currentSet[slot].nameEN !== '-----------' && (
                <span className="equiped-item">{text.equiped}</span>
              )}
          </div>
          {ignoredItens && (
            <>
              <div className="input-group mb-2">
                <div className="input-group-text">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name={item[`name${language}`]}
                    id={`exclude-item-${index}`}
                    checked={ignoredItens.includes(item[`name${language}`])}
                    aria-label="Checkbox for following text input"
                    onChange={e => ignoreItens(e.target.name, e.target.checked)}
                  />
                </div>
                <label
                  htmlFor={`exclude-item-${index}`}
                  className="input-group-text"
                >
                  {text.ignoreItem}
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
                  {text.ignoreElement}
                </label>
              </div>
            </>
          )}
          <div className="d-flex button-container">
            <ButtonForKakele
              onClick={() => copy(item[`name${language}`])}
              text={text.copy}
            />
            {!showDetails && (
              <ButtonForKakele
                onClick={() =>
                  navigate(`/kakele/item/${item[`name${language}`]}`)
                }
                text={text.showItem}
              />
            )}

            <ButtonForKakele
              onClick={() => equipItem(item)}
              text={text.equipItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
