import React from 'react';

import { checkSetElement } from '../kakele';

export default function ShowSetStatus(props) {
  const { itensListToShowStatus } = props;

  let itensList = itensListToShowStatus;

  if (!(itensListToShowStatus instanceof Array)) {
    itensList = [...Object.values(itensListToShowStatus).map(item => item)];
  }
  return (
    <div className="status-container">
      <h3>Atributos do set</h3>
      <p>
        Armadura:
        {itensList &&
          itensList.reduce(
            (anterior, proximo) => anterior + (proximo.armor || 0),
            0,
          )}
      </p>
      <p>
        Magia:{' '}
        {itensList &&
          itensList.reduce(
            (anterior, proximo) => anterior + (proximo.magic || 0),
            0,
          )}
      </p>
      <p>
        Ataque:{' '}
        {itensList &&
          itensList.reduce(
            (anterior, proximo) => anterior + (proximo.attack || 0),
            0,
          )}
      </p>
      <p>{itensList && checkSetElement(itensList)}</p>
    </div>
  );
}
