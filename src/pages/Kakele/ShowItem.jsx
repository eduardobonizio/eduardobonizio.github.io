import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import ButtonForKakele from './Componentes/ButtonForKakele';
import ItemCard from './Componentes/ItemCard';
import { genereateLinkToViewSet } from './Data/kakele';
import { equipments, weapons } from './Data/kakeleData';

import './css/ShowItem.css';

export default function ShowItem() {
  const navigate = useNavigate();
  const currentSet = useSelector(state => state.currentSet);
  const { name } = useParams(); // Unpacking and retrieve id
  const allItens = [...equipments, ...weapons];
  const item =
    allItens.find(e => e.name === name || e.namePtBr === name) || allItens[0];
  const nextIndex = allItens.indexOf(item) + 1;
  const previowsIndex = allItens.indexOf(item) - 1;

  const redirectToShowSetPage = () => {
    const setToArray = Object.values(currentSet).map(i => i);
    const link = genereateLinkToViewSet(setToArray, '');
    if (link) navigate(link);
  };

  const changeItem = itemIndex => {
    const index = itemIndex >= 0 ? itemIndex : allItens.length - 1;
    navigate(`/kakele/item/${allItens[index].name}`);
  };

  return (
    <div className="container d-flex flex-column align-items-center show-item-container">
      {item ? (
        <div className="row">
          <ItemCard item={item} />
        </div>
      ) : (
        <div>Item não encontrado</div>
      )}
      <div className="button-container">
        <ButtonForKakele
          text="Anterior"
          onClick={() => changeItem(previowsIndex)}
        />
        <ButtonForKakele text="Ver set" onClick={redirectToShowSetPage} />
        <ButtonForKakele text="Próximo" onClick={() => changeItem(nextIndex)} />
      </div>
    </div>
  );
}
