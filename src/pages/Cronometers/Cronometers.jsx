/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable immutable/no-let */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Progress } from 'reactstrap';

import { toNumber } from 'lodash';

import { clocks } from '../../api/DataBKP';

import './Cronometers.css';

export default function Cronometers() {
  const [lastClock, setLastClock] = useState(
    toNumber(localStorage.getItem('clockOfTheDay')),
  );
  const [time, setTime] = useState(0);

  const nextClock = clock();

  function clock() {
    const actual = lastClock + 1;
    if (actual >= clocks.length) {
      localStorage.setItem('clockOfTheDay', 0);
      return clocks[0];
    }
    localStorage.setItem('clockOfTheDay', actual);
    return clocks[actual];
  }

  let maxTime = 0;
  useEffect(() => {
    const countdown = setInterval(() => {
      if (maxTime <= 2) {
        maxTime += 0.1;
        console.log('entrei');
        return setTime(Number(maxTime * 100));
      }
      return clearInterval(countdown);
    }, 100);
    return () => {
      clearInterval(countdown);
    };
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center">
      <p className="mt-3">Redirecionando</p>
      <div style={{ width: '100%', marginBottom: '50px' }}>
        <Progress style={{ height: '50px' }} value={time} />
      </div>
      <meta httpEquiv="refresh" content={`1.6; URL='${nextClock.url}'`} />
    </div>
  );
}
