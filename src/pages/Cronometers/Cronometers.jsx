import React, { useEffect, useState } from 'react';

import { toNumber } from 'lodash';

import { clocks } from '../../api/DataBKP';

import './Cronometers.css';

export default function Cronometers() {
  const [lastClock] = useState(toNumber(localStorage.getItem('clockOfTheDay')));
  const [nextClock, setNextClock] = useState();

  function clock() {
    const actual = lastClock + 1;
    console.log(actual);
    if (actual >= clocks.length) {
      localStorage.setItem('clockOfTheDay', 0);
      return clocks[0];
    }
    localStorage.setItem('clockOfTheDay', actual);
    return clocks[actual];
  }

  useEffect(() => {
    const newClock = clock();
    setNextClock(newClock);
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center">
      {console.log('entrei')}
      <p className="mt-3">Redirecionando</p>
      {nextClock && (
        <meta httpEquiv="refresh" content={`0; URL='${nextClock.url}'`} />
      )}
    </div>
  );
}
