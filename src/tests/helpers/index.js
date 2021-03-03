import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { createStore } from 'redux';

import rootReducer from '../../store/reducers';

const renderWithRouterAndRedux = (
  component,
  {
    initialEntries = ['/'],
    initialState,
    store = createStore(rootReducer, initialState),
  } = {},
) => {
  const history = createMemoryHistory({ initialEntries });
  return {
    ...render(
      <Router history={history}>
        <Provider store={store}>{component}</Provider>
      </Router>,
    ),
    history,
    store,
  };
};

export default renderWithRouterAndRedux;
