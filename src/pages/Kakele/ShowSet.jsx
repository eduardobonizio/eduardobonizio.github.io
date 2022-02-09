/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { urlParamsToObject } from './kakele';
import { equipments, weapons, ALL_ITENS_SLOTS_LIST } from './kakeleData';

export default function ShowSet() {
  const urlParams = useParams();
  const itensOnUrl = urlParamsToObject(urlParams);
  const [currentSet, setCurrentSet] = useState({
    necklace: {},
    helmet: {},
    ring: {},
    weapon: {},
    armor: {},
    shield: {},
    accessorie: {},
    shoe: {},
  });

  // const itensOnUrlToItensList = () => {
  const allItens = [...equipments, ...weapons];
  const itensList = Object.values(itensOnUrl).map(itemName =>
    allItens.filter(equipment => {
      console.log(equipment.ItemName === itemName);
      return equipment.ItemName === itemName;
    }),
  );
  console.log(itensList);
  // };
  return (
    <div className="container d-flex justify-content-center flex-column">
      Mostrar Set
    </div>
  );
}
