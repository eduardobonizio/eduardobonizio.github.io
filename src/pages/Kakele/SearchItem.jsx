/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import ButtonForKakele from './Componentes/ButtonForKakele';
import {
  ALL_ITENS_SLOTS_LIST,
  ALL_ITENS_SLOTS_LIST_PT_BR,
  ITEM_FILTERS,
  ITEM_FILTERS_PT_BR,
  CHARACTER_CLASS,
  CHARACTER_CLASS_PT_BR,
} from './kakeleData';
import './css/SearchItem.css';

export default function SearchItem({ closeSearchWindow }) {
  const [slotToFilter, setSlotToFilter] = useState(ALL_ITENS_SLOTS_LIST[0]);
  const [characterClass, setCharacterClass] = useState(CHARACTER_CLASS[0]);
  const [filterByStatus, setFilterByStatus] = useState(ITEM_FILTERS[0]);

  console.log(slotToFilter);
  console.log(characterClass);
  console.log(filterByStatus);

  return (
    <div className="container d-flex flex-column align-items-center kakele-search-item">
      <div className="d-flex">
        <div className="input-group mb-2">
          <label className="input-group-text" htmlFor="slot-do-item">
            Slot do item
          </label>
          <select
            className="form-select"
            id="slot-do-item"
            onChange={e => setSlotToFilter(e.target.value)}
          >
            {ALL_ITENS_SLOTS_LIST.map((slot, i) => (
              <option value={slot} key={i}>
                {ALL_ITENS_SLOTS_LIST_PT_BR[slot]}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group mb-2">
          <label className="input-group-text" htmlFor="classe-do-personagem">
            Vocação
          </label>
          <select
            className="form-select"
            id="classe-do-personagem"
            onChange={e => setSlotToFilter(e.target.value)}
          >
            {CHARACTER_CLASS.map((charClass, i) => (
              <option value={charClass} key={i}>
                {CHARACTER_CLASS_PT_BR[charClass]}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group mb-2">
          <label className="input-group-text" htmlFor="filtro">
            Filtrar por
          </label>
          <select
            className="form-select"
            id="filtro"
            onChange={e => setSlotToFilter(e.target.value)}
          >
            {ITEM_FILTERS.map((status, i) => (
              <option value={status} key={i}>
                {ITEM_FILTERS_PT_BR[status]}
              </option>
            ))}
          </select>
        </div>
        <ButtonForKakele onClick={closeSearchWindow} text="voltar" />
      </div>
      <div>Search Results</div>
    </div>
  );
}
