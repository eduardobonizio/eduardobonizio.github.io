import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateItensFilter } from '../../store/actions/KakeleFilters.actions';
import {
  ITEM_FILTERS_NAME,
  kakeleItemsFiltersJsx as textOptions,
  SLOTS_NAMES,
} from './Data/dataLanguages';
import { ALL_ITENS_SLOTS_LIST, ITEM_FILTERS } from './Data/kakeleData';

export default function KakeleItemsFilters(props) {
  const { statusPrincipal, manualFilters } = props;
  const dispatch = useDispatch();
  const {
    level,
    element,
    characterClass,
    mainStat,
    itemName,
    slot,
    orderBy,
    language,
  } = useSelector(state => state.currentKakeleFilters);
  const text = textOptions[language];

  const updateFilter = (action, newFilterValue) =>
    dispatch(updateItensFilter(action, newFilterValue));

  return (
    <>
      <div className="input-group mb-2">
        {manualFilters && (
          <div className="input-group mb-2">
            <span className="input-group-text" id="nome-do-item">
              {text.itemName}
            </span>
            <input
              type="text"
              className="form-control"
              placeholder={text.itemName}
              aria-label="Nome do item"
              aria-describedby="nome-do-item"
              value={itemName}
              onChange={e => updateFilter('UPDATE_NAME_FILTER', e.target.value)}
            />
          </div>
        )}
        <span className="input-group-text" id="nivel-do-personagem">
          {text.characterLevel}
        </span>
        <input
          type="number"
          className="form-control"
          placeholder="Nivel do Personagem"
          aria-label="Nivel do Personagem"
          aria-describedby="nivel-do-personagem"
          value={level}
          onChange={e =>
            updateFilter('UPDATE_CHARACTER_LEVEL', Number(e.target.value))
          }
        />
      </div>
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="classe-do-personagem">
          {text.characterClass}
        </label>
        <select
          className="form-select"
          id="classe-do-personagem"
          defaultValue={characterClass}
          onChange={e => updateFilter('UPDATE_CHARACTER_CLASS', e.target.value)}
        >
          <option value="Alchemist">{text.alchemist}</option>
          <option value="Hunter">{text.hunter}</option>
          <option value="Berserker">{text.berserker}</option>
          <option value="Warrior">{text.warrior}</option>
          <option value="Mage">{text.mage}</option>
        </select>
      </div>

      {statusPrincipal && (
        <div className="input-group mb-2">
          <label className="input-group-text" htmlFor="status-principal">
            {text.mainStat}
          </label>
          <select
            className="form-select"
            id="status-principal"
            defaultValue={mainStat}
            onChange={e => updateFilter('UPDATE_STAT_FILTER', e.target.value)}
          >
            <option value="armor">{text.armor}</option>
            <option value="magic">{text.magic}</option>
            <option value="attack">{text.attack}</option>
          </select>
        </div>
      )}

      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="elemento-do-set">
          {text.element}
        </label>
        <select
          className="form-select"
          id="elemento-do-set"
          defaultValue={element}
          onChange={e => updateFilter('UPDATE_ELEMENT_FILTER', e.target.value)}
        >
          <option value="All">{text.all}</option>
          <option value="Light">{text.light}</option>
          <option value="Dark">{text.dark}</option>
          <option value="Nature">{text.nature}</option>
        </select>
      </div>
      {manualFilters && (
        <>
          <div className="input-group mb-2">
            <label className="input-group-text" htmlFor="slot-do-item">
              {text.itemSlot}
            </label>
            <select
              className="form-select"
              id="slot-do-item"
              defaultValue={slot}
              onChange={e => updateFilter('UPDATE_SLOT_FILTER', e.target.value)}
            >
              <option value="All">{text.all}</option>
              {ALL_ITENS_SLOTS_LIST.map(curSlot => (
                <option value={curSlot} key={curSlot}>
                  {SLOTS_NAMES[language][curSlot]}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group mb-2">
            <label className="input-group-text" htmlFor="filtro">
              {text.orderBy}
            </label>
            <select
              className="form-select"
              id="filtro"
              defaultValue={orderBy}
              onChange={e =>
                updateFilter('UPDATE_ORDER_FILTER', e.target.value)
              }
            >
              {ITEM_FILTERS.map(status => (
                <option value={status} key={status}>
                  {ITEM_FILTERS_NAME[language][status]}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </>
  );
}
