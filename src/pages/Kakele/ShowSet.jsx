import React from 'react';
import { useParams } from 'react-router-dom';

import { urlParamsToObject } from './kakele';

export default function ShowSet() {
  const urlParams = useParams();
  const itens = urlParamsToObject(urlParams);
  console.log(itens);
  return (
    <div className="container d-flex justify-content-center flex-column">
      Mostrar Set
    </div>
  );
}
