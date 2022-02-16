import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateItensFilter } from '../../store/actions/KakeleFilters.actions';
import {
  ALL_ITENS_SLOTS_LIST,
  ALL_ITENS_SLOTS_LIST_PT_BR,
  ITEM_FILTERS,
  ITEM_FILTERS_PT_BR,
} from './kakeleData';

export default function KakeleItemsFilters(props) {
  const { statusPrincipal, manualFilters } = props;
  const dispatch = useDispatch();
  const { level, element, characterClass, mainStat, itemName, slot, orderBy } =
    useSelector(state => state.currentKakeleFilters);

  const updateFilter = (action, newFilterValue) =>
    dispatch(updateItensFilter(action, newFilterValue));

  return (
    <>
      <div className="input-group mb-2">
        {manualFilters && (
          <div className="input-group mb-2">
            <span className="input-group-text" id="nome-do-item">
              Nome do item
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Nome do item"
              aria-label="Nome do item"
              aria-describedby="nome-do-item"
              value={itemName}
              onChange={e => updateFilter('UPDATE_NAME_FILTER', e.target.value)}
            />
          </div>
        )}
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
          onChange={e =>
            updateFilter('UPDATE_CHARACTER_LEVEL', Number(e.target.value))
          }
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
          onChange={e => updateFilter('UPDATE_CHARACTER_CLASS', e.target.value)}
        >
          <option value="Alchemist">Alquemista</option>
          <option value="Hunter">Caçador</option>
          <option value="Berserker">Furioso</option>
          <option value="Warrior">Guerreiro</option>
          <option value="Mage">Mago</option>
        </select>
      </div>

      {statusPrincipal && (
        <div className="input-group mb-2">
          <label className="input-group-text" htmlFor="status-principal">
            Status principal
          </label>
          <select
            className="form-select"
            id="status-principal"
            defaultValue={mainStat}
            onChange={e => updateFilter('UPDATE_STAT_FILTER', e.target.value)}
          >
            <option value="armor">Amadura</option>
            <option value="magic">Magia</option>
            <option value="attack">Ataque</option>
          </select>
        </div>
      )}

      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="elemento-do-set">
          Elemento
        </label>
        <select
          className="form-select"
          id="elemento-do-set"
          defaultValue={element}
          onChange={e => updateFilter('UPDATE_ELEMENT_FILTER', e.target.value)}
        >
          <option value="All">Todos</option>
          <option value="Light">Luz</option>
          <option value="Dark">Trevas</option>
          <option value="Nature">Natureza</option>
        </select>
      </div>
      {manualFilters && (
        <>
          <div className="input-group mb-2">
            <label className="input-group-text" htmlFor="slot-do-item">
              Slot do item
            </label>
            <select
              className="form-select"
              id="slot-do-item"
              defaultValue={slot}
              onChange={e => updateFilter('UPDATE_SLOT_FILTER', e.target.value)}
            >
              <option value="All">Todos</option>
              {ALL_ITENS_SLOTS_LIST.map(curSlot => (
                <option value={curSlot} key={curSlot}>
                  {ALL_ITENS_SLOTS_LIST_PT_BR[curSlot]}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group mb-2">
            <label className="input-group-text" htmlFor="filtro">
              Ordenar por
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
                  {ITEM_FILTERS_PT_BR[status]}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </>
  );
}
