import React from 'react';
import { useParams } from 'react-router-dom';

import ItemCard from './Componentes/ItemCard';
import { equipments, weapons } from './kakeleData';

export default function ShowItem() {
  const { name } = useParams(); // Unpacking and retrieve id
  const item = [...equipments, ...weapons].find(
    e => e.name === name || e.namePtBr === name,
  );
  return (
    <div className="container d-flex justify-content-center show-item-container">
      <div className="row">
        <ItemCard item={item} />
      </div>
    </div>
  );
}
