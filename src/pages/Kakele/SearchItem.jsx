/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import './css/SearchItem.css';

import { updateCurrentSet } from '../../store/actions/kakeleCurrentSet.actions';
import ButtonForKakele from './Componentes/ButtonForKakele';
import ItemCard from './Componentes/ItemCard';
import {
  filterItensByElement,
  filterItensByLevelAndClass,
  filterItensBySlot,
  findItemsByName,
  genereateLinkToViewSet,
} from './kakele';
import { equipments, weapons, FAKE_ITEM } from './Data/kakeleData';
import KakeleItemsFilters from './KakeleItemsFilters';

export default function SearchItem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentSet = useSelector(state => state.currentSet);
  const { level, itemName, element, slot, characterClass, orderBy } =
    useSelector(state => state.currentKakeleFilters);

  const [foundItens, setFoundItens] = useState(false);

  const lookForItens = () => {
    const itensList = filterItensByLevelAndClass(
      [...equipments, ...weapons],
      level,
      characterClass,
    );

    const itensListBySlot = filterItensBySlot(itensList, slot, [])
      .sort((a, b) => b.level - a.level)
      .sort((a, b) => b[orderBy] - a[orderBy]);

    const itensListByElement = filterItensByElement(itensListBySlot, element);

    const itensListByName = findItemsByName(itensListByElement, itemName);

    const result = itensListByName || itensListByElement;

    setFoundItens(result);
  };

  const equipItem = item => {
    dispatch(updateCurrentSet(item));

    if (
      (item.slot === 'book' || item.slot === 'shield') &&
      currentSet.weapon.twoHanded
    ) {
      dispatch(updateCurrentSet({ ...FAKE_ITEM, slot: 'weapon' }));
    }

    if (item.slot === 'book')
      dispatch(updateCurrentSet({ ...FAKE_ITEM, slot: 'shield' }));

    if (item.slot === 'shield')
      dispatch(updateCurrentSet({ ...FAKE_ITEM, slot: 'book' }));
  };

  useEffect(() => lookForItens(), []);

  const redirectToShowSetPage = () => {
    const setToArray = Object.values(currentSet).map(item => item);
    const link = genereateLinkToViewSet(setToArray, false);
    if (link) navigate(link);
  };

  return (
    <div className="container d-flex kakele-search-item">
      <div className="d-flex d-flex flex-column kakele-search-item-filters">
        <KakeleItemsFilters manualFilters />
        <ButtonForKakele onClick={lookForItens} text="Procurar" />
        <ButtonForKakele onClick={redirectToShowSetPage} text="Ver set" />
      </div>
      <div className="row row-cols-auto">
        {foundItens.length > 0 ? (
          foundItens.map((item, i) => {
            if (item) {
              return (
                <ItemCard
                  index={i}
                  item={item}
                  key={item.name}
                  equipItem={equipItem}
                />
              );
            }
            return false;
          })
        ) : (
          <span>Nem um item encontrado</span>
        )}
      </div>
    </div>
  );
}
