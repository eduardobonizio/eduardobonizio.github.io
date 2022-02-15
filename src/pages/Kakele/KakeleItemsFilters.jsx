import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateCharacterClass,
  updateCharacterLevel,
  updateElementFilter,
  updateStatFilter,
} from '../../store/actions/KakeleFilters.actions';

export default function KakeleItemsFilters() {
  const dispatch = useDispatch();
  const { level, element, characterClass, mainStat } = useSelector(
    state => state.currentKakeleFilters,
  );

  const setLevel = newLevel => dispatch(updateCharacterLevel(newLevel));
  const setMainStat = newStat => dispatch(updateStatFilter(newStat));
  const setElement = newElement => dispatch(updateElementFilter(newElement));
  const setCharacterClass = newCharacterClass =>
    dispatch(updateCharacterClass(newCharacterClass));
  return (
    <>
      <div className="input-group mb-2">
        <span className="input-group-text" id="nivel-do-personagem">
          Nivel do personagem
        </span>
        <input
          type="number"
          className="form-control"
          placeholder="Nivel do Personagem"
          aria-label="Nivel do Personagem"
          aria-describedby="nivel-do-personagem"
          value={level}
          onChange={e => setLevel(Number(e.target.value))}
        />
      </div>
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="classe-do-personagem">
          Classe do personagem
        </label>
        <select
          className="form-select"
          id="classe-do-personagem"
          defaultValue={characterClass}
          onChange={e => setCharacterClass(e.target.value)}
        >
          <option value="Alchemist">Alquemista</option>
          <option value="Hunter">Caçador</option>
          <option value="Berserker">Furioso</option>
          <option value="Warrior">Guerreiro</option>
          <option value="Mage">Mago</option>
        </select>
      </div>

      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="status-principal">
          Status principal
        </label>
        <select
          className="form-select"
          id="status-principal"
          defaultValue={mainStat}
          onChange={e => setMainStat(e.target.value)}
        >
          <option value="armor">Amadura</option>
          <option value="magic">Magia</option>
          <option value="attack">Ataque</option>
        </select>
      </div>

      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="elemento-do-set">
          Elemento
        </label>
        <select
          className="form-select"
          id="elemento-do-set"
          defaultValue={element}
          onChange={e => setElement(e.target.value)}
        >
          <option value="All">Todos</option>
          <option value="Light">Luz</option>
          <option value="Dark">Trevas</option>
          <option value="Nature">Natureza</option>
        </select>
      </div>
    </>
  );
}
