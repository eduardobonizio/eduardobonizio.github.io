import React from 'react';
import { useParams } from 'react-router-dom';

export default function ShowSet() {
  const urlParams = useParams();
  const itens = `{"${urlParams['*']
    .replaceAll('=', '":"')
    .replaceAll(' ', '","')
    .replaceAll('-', ' ')}"}`;
  const itensObject = JSON.parse(itens);
  console.log(itensObject);

  return (
    <div className="container d-flex justify-content-center flex-column">
      Mostrar Set
    </div>
  );
}
