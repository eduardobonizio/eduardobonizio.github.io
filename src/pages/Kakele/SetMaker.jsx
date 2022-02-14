import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import './css/ShowStatusFilterAndCards.css';

import ButtonForKakele from './Componentes/ButtonForKakele';
import InputCheckBox from './Componentes/InputCheckBox';
import ItemCard from './Componentes/ItemCard';
import ShowSetStatus from './Componentes/ShowSetStatus';
import {
  filterItensByLevelAndClass,
  findBestSet,
  genereateLinkToViewSet,
} from './kakele';
import { equipments, weapons, ALL_ITENS_SLOTS_LIST } from './kakeleData';

export default function SetMaker() {
  const navigate = useNavigate();
  const [characterClass, setCharacterClass] = useState('Alchemist');
  const [element, setElement] = useState('Light');
  const [level, setLevel] = useState(1);
  const [mainStat, setMainStat] = useState('armor');
  const [ignoreElement, setIgnoreElement] = useState(false);
  const [recomendedSet, setRecomendedSet] = useState(false);
  const [ignoredItens, setIgnoredItens] = useState([]);
  const [ignoreThisSlotsElement, setIgnoreThisSlotsElement] = useState([]);

  const generateSet = () => {
    const itensList = filterItensByLevelAndClass(
      [...equipments, ...weapons],
      level,
      characterClass,
    );
    const bestItens = ALL_ITENS_SLOTS_LIST.map(slot =>
      findBestSet(
        itensList,
        mainStat,
        slot,
        characterClass,
        ignoredItens,
        ignoreElement,
        ignoreThisSlotsElement,
        element,
      ),
    );

    setRecomendedSet(bestItens);
  };

  const ignoreItens = (itemName, ignore) => {
    if (ignore) {
      const newIgnoredItensList = [...ignoredItens, itemName];
      setIgnoredItens(newIgnoredItensList);
      return;
    }
    const removeFromIgnoredList = ignoredItens.filter(
      item => item !== itemName,
    );
    setIgnoredItens(removeFromIgnoredList);
  };

  const ignoreElementForThisSlot = (slot, ignore) => {
    if (ignore) {
      const novosSlotsIgnorados = [...ignoreThisSlotsElement, slot];
      setIgnoreThisSlotsElement(novosSlotsIgnorados);
      return;
    }
    const removeSlotFromIgnoredList = ignoreThisSlotsElement.filter(
      item => item !== slot,
    );
    setIgnoreThisSlotsElement(removeSlotFromIgnoredList);
  };

  const redirectToShowSetPage = () => {
    const link = genereateLinkToViewSet(recomendedSet, false);
    if (link) navigate(link);
  };

  return (
    <div className="container status-and-card-container">
      <div className="d-flex flex-column">
        <h3 className="">Gerador de set</h3>
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
            onChange={e => setCharacterClass(e.target.value)}
          >
            <option defaultValue value="Alchemist">
              Alquemista
            </option>
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
            onChange={e => setMainStat(e.target.value)}
          >
            <option defaultValue value="armor">
              Amadura
            </option>
            <option value="magic">Magia</option>
            <option value="attack">Ataque</option>
          </select>
        </div>

        {!ignoreElement && (
          <div className="input-group mb-2">
            <label className="input-group-text" htmlFor="elemento-do-set">
              Elemento
            </label>
            <select
              className="form-select"
              id="elemento-do-set"
              onChange={e => setElement(e.target.value)}
            >
              <option defaultValue value="Light">
                Luz
              </option>
              <option value="Dark">Trevas</option>
              <option value="Nature">Natureza</option>
            </select>
          </div>
        )}
        <InputCheckBox
          labelText="Ignorar Elemento"
          id="ignore-element"
          onChangeFunc={setIgnoreElement}
          changeOnCheck={ignoreElement}
        />

        <div className="container d-flex justify-content-around">
          <ButtonForKakele onClick={generateSet} text="Gerar set" />
          {recomendedSet && (
            <ButtonForKakele
              onClick={redirectToShowSetPage}
              text="Equipar tudo"
            />
          )}
        </div>
        <ButtonForKakele
          onClick={() => navigate('/kakele/search-item')}
          text="Escolher itens manualmente"
        />

        <ShowSetStatus itensListToShowStatus={recomendedSet} />
      </div>
      <div className="row row-cols-auto">
        {recomendedSet &&
          recomendedSet.map((item, i) => {
            if (item) {
              return (
                <ItemCard
                  index={i}
                  ignoredItens={ignoredItens}
                  ignoreItens={ignoreItens}
                  ignoreThisSlotsElement={ignoreThisSlotsElement}
                  ignoreElementForThisSlot={ignoreElementForThisSlot}
                  item={item}
                  key={i}
                />
              );
            }
          })}
      </div>
    </div>
  );
}
