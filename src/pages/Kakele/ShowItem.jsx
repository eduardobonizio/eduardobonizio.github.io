import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import ButtonForKakele from './Componentes/ButtonForKakele';
import ItemCard from './Componentes/ItemCard';
import { genereateLinkToViewSet } from './kakele';
import { equipments, weapons } from './kakeleData';

export default function ShowItem() {
  const navigate = useNavigate();
  const currentSet = useSelector(state => state.currentSet);
  const { name } = useParams(); // Unpacking and retrieve id
  const item = [...equipments, ...weapons].find(
    e => e.name === name || e.namePtBr === name,
  );

  const redirectToShowSetPage = () => {
    const setToArray = Object.values(currentSet).map(i => i);
    const link = genereateLinkToViewSet(setToArray, '');
    if (link) navigate(link);
  };
  return (
    <div className="container d-flex flex-column align-items-center show-item-container">
      <div className="row">
        <ItemCard item={item} />
      </div>
      <ButtonForKakele text="Ver set" onClick={redirectToShowSetPage} />
    </div>
  );
}
