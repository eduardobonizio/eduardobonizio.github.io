import React from 'react';

import App from '../App';
import { currentUser } from '../store/actions/currentUser.actions';
import * as gameConfig from '../store/actions/gameConfig.actions';
import renderWithRouterAndRedux from './helpers';

describe('Testa o componente <App>', () => {
  it('deve renderizar o componente App', () => {
    const {
      getByText,
      store: { dispatch, subscribe, getState },
    } = renderWithRouterAndRedux(<App />);

    const home = getByText(/Loading.../i);
    expect(home).toBeInTheDocument();

    dispatch(currentUser(true));
    const content = getByText(/Construindo/i);
    expect(content).toBeInTheDocument();
  });
});
