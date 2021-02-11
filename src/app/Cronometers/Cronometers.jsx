/* eslint-disable more/no-window */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Button } from 'reactstrap';

import { toNumber } from 'lodash';

import { clocks } from '../../api/api';
import Clock from './Clock';

export default function Cronometers() {
  const [lastClock, setLastClock] = useState(
    toNumber(localStorage.getItem('clockOfTheDay')),
  );
  const nextClock = clock();

  function clock() {
    const actual = lastClock + 1;
    if (actual >= clocks.length) {
      localStorage.setItem('clockOfTheDay', 0);
      return clocks[0].url;
    }
    console.log(actual);
    localStorage.setItem('clockOfTheDay', actual);
    return clocks[actual].url;
  }

  return (
    <div className="container-fluid">
      <img
        src="redirecting.gif"
        alt="redirecting"
        style={{ maxWidth: '100%' }}
      />
      <meta httpEquiv="refresh" content={`2; URL='${nextClock}'`} />
    </div>
  );
}
