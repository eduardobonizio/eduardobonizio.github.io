/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import './css/ShowSet.css';

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
  const itensOnUrl = urlParamsToObject(urlParams);

  const addMissingItens = selectedItems => {
    const fakeItem = { ...FAKE_ITEM };
    const updatedCurrentSet = selectedItems;
    ALL_ITENS_SLOTS_LIST.forEach(slot => {
      if (!selectedItems[slot]) {
        fakeItem.slot = slot;
        updatedCurrentSet[slot] = { ...fakeItem, slot };
      }
      dispatch(updateCurrentSet(updatedCurrentSet[slot]));
    });
  };

  const itensOnUrlToItensList = () => {
    const allItens = [...equipments, ...weapons];
    const selectedItems = {};
    if (itensOnUrl) {
      const itensList = Object.values(itensOnUrl).map(itemName =>
        allItens.forEach(item => {
          if (item.name === itemName) selectedItems[item.slot] = item;
        }),
      );
    }

    addMissingItens(selectedItems);
  };

  useEffect(() => {
    itensOnUrlToItensList();
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
            <ItemCard
              item={currentSet.shield || currentSet.book}
              index={currentSet.shield.name || currentSet.book.name}
            />
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
