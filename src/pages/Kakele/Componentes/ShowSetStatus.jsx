import React, { useState, useEffect } from 'react';

import { checkSetElement } from '../kakele';

export default function ShowSetStatus(props) {
  const { itensListToShowStatus } = props;
  const [element, setElement] = useState(false);
  const [itensList, setItensList] = useState(false);

  useEffect(() => {
    const newItensList = [
      ...Object.values(itensListToShowStatus).map(item => item),
    ];
    setItensList(newItensList);

    const elementQuantity = checkSetElement(newItensList);

    setElement(elementQuantity);
  }, [itensListToShowStatus]);

  return (
    <div className="status-container">
      <h3>Atributos do set</h3>
      <p>
        Armadura:{' '}
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
      {itensList && (
        <>
          <p>
            Elemento: <span className={element.element}>{element.element}</span>
          </p>
          <p>{element.text}</p>
        </>
      )}
    </div>
  );
}
