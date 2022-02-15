import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import './css/ShowStatusFilterAndCards.css';

import copy from 'copy-to-clipboard';

import { updateCurrentSet } from '../../store/actions/kakeleCurrentSet.actions';
import ButtonForKakele from './Componentes/ButtonForKakele';
import ItemCard from './Componentes/ItemCard';
import ShowSetStatus from './Componentes/ShowSetStatus';
import { genereateLinkToViewSet, urlParamsToObject } from './kakele';
import {
  equipments,
  weapons,
  ALL_ITENS_SLOTS_LIST,
  FAKE_ITEM,
} from './kakeleData';

export default function ShowSet() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentSet = useSelector(state => state.currentSet);
  const urlParams = useParams();

  const normalizeSet = setItems => {
    const shield =
      setItems.weapon.twoHanded || setItems.book.name !== '-----------'
        ? { ...FAKE_ITEM, slot: 'shield' }
        : { ...setItems.shield };
    const book =
      setItems.weapon.twoHanded || setItems.shield.name !== '-----------'
        ? { ...FAKE_ITEM, slot: 'book' }
        : { ...setItems.book };

    return { ...setItems, shield: { ...shield }, book: { ...book } };
  };

  const addMissingItens = (selectedItems, fakeItem) =>
    ALL_ITENS_SLOTS_LIST.reduce(
      (current, next, index) => {
        const currentSlot = ALL_ITENS_SLOTS_LIST[index];
        if (!current[currentSlot]) {
          return {
            ...current,
            [currentSlot]: { ...fakeItem },
          };
        }
        return current;
      },
      { ...selectedItems },
    );

  const itensOnUrlToItensList = (urlText, allItens) => {
    const itensOnUrl = urlParamsToObject(urlText);

    const itensList = Object.values(itensOnUrl).map(itemName =>
      allItens.find(item => item.name === itemName),
    );

    const allSlotItens = addMissingItens(itensList);

    const normalizedSet = normalizeSet(allSlotItens);

    dispatch(updateCurrentSet(normalizedSet));
  };

  useEffect(() => {
    itensOnUrlToItensList(urlParams, [...equipments, ...weapons]);
  }, []);

  const copyLink = () => {
    const origin = window.location.origin.toString();
    const setToArray = Object.values(currentSet).map(item => item);
    const link = genereateLinkToViewSet(setToArray, origin);
    if (link) copy(link);
  };

  return (
    <div className="container status-and-card-container">
      <div className="d-flex flex-column">
        {currentSet && <ShowSetStatus itensListToShowStatus={currentSet} />}
        <ButtonForKakele
          onClick={() => navigate('/kakele/search-item')}
          text="Procurar itens"
        />
        <ButtonForKakele onClick={copyLink} text="Copiar link" />
      </div>
      {currentSet && (
        <div className="row row-cols-auto d-flex justify-content-center">
          {currentSet.necklace && (
            <ItemCard
              item={currentSet.necklace}
              index={currentSet.necklace.name}
            />
          )}

          {currentSet.helmet && (
            <ItemCard item={currentSet.helmet} index={currentSet.helmet.name} />
          )}

          {currentSet.ring && (
            <ItemCard item={currentSet.ring} index={currentSet.ring.name} />
          )}

          {currentSet.weapon && (
            <ItemCard item={currentSet.weapon} index={currentSet.weapon.name} />
          )}

          {currentSet.armor && (
            <ItemCard item={currentSet.armor} index={currentSet.armor.name} />
          )}

          {currentSet.shield && currentSet.shield.name !== '-----------' && (
            <ItemCard
              item={currentSet.shield || currentSet.book}
              index={currentSet.shield.name || currentSet.book.name}
            />
          )}

          {currentSet.book && currentSet.book.name !== '-----------' && (
            <ItemCard item={currentSet.book} index={currentSet.book.name} />
          )}

          {currentSet.accessorie && (
            <ItemCard
              item={currentSet.accessorie}
              index={currentSet.accessorie.name}
            />
          )}

          {currentSet.leg && (
            <ItemCard item={currentSet.leg} index={currentSet.leg.name} />
          )}

          {currentSet.shoe && (
            <ItemCard item={currentSet.shoe} index={currentSet.shoe.name} />
          )}
        </div>
      )}
    </div>
  );
}
