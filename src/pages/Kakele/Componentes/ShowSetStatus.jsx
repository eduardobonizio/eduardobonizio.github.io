import React from 'react';

import { checkSetElement } from '../kakele';

export default function ShowSetStatus(props) {
  const { itensListToShowStatus } = props;
  return (
    <div>
      <h3>Atributos do set</h3>
      <p>
        Armadura:
        {itensListToShowStatus &&
          itensListToShowStatus.reduce(
            (anterior, proximo) => anterior + (proximo.armor || 0),
            0,
          )}
      </p>
      <p>
        Magia:{' '}
        {itensListToShowStatus &&
          itensListToShowStatus.reduce(
            (anterior, proximo) => anterior + (proximo.magic || 0),
            0,
          )}
      </p>
      <p>
        Ataque:{' '}
        {itensListToShowStatus &&
          itensListToShowStatus.reduce(
            (anterior, proximo) => anterior + (proximo.attack || 0),
            0,
          )}
      </p>
      <p>
        Elemento:{' '}
        {itensListToShowStatus && checkSetElement(itensListToShowStatus)}
      </p>
    </div>
  );
}
