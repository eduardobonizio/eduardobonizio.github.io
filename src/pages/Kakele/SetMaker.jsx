import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import './css/ShowStatusFilterAndCards.css';

import ButtonForKakele from './Componentes/ButtonForKakele';
import ItemCard from './Componentes/ItemCard';
import ShowSetStatus from './Componentes/ShowSetStatus';
import {
  filterItensByLevelAndClass,
  findBestSet,
  genereateLinkToViewSet,
} from './Data/kakele';
import { equipments, weapons, ALL_ITENS_SLOTS_LIST } from './Data/kakeleData';
import KakeleItemsFilters from './KakeleItemsFilters';

export default function SetMaker() {
  const navigate = useNavigate();
  const { level, element, characterClass, mainStat } = useSelector(
    state => state.currentKakeleFilters,
  );

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
      <div className="d-flex flex-column set-maker-filters-container">
        <h3 className="">Gerador de set</h3>

        <KakeleItemsFilters statusPrincipal />
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
                  key={item.nameEN}
                />
              );
            }
            return false;
          })}
      </div>
    </div>
  );
}
