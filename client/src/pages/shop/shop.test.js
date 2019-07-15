import React from 'react';
import { mount } from 'enzyme';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ShopPage } from './shop.component';

export const createMockStore = ({ state, reducers }) => {
  const store = createStore(combineReducers(reducers), state);
  return {
    ...store,
    persistor: {
      persist: () => null
    }
  };
};

describe('ShopPage', () => {
  let wrapper;
  let mockFetchCollectionsStart;
  let store;

  beforeEach(() => {
    const mockReducer = (
      state = {
        isFetching: true
      },
      action
    ) => state;

    const mockState = {
      shop: {
        isFetching: true
      }
    };

    mockFetchCollectionsStart = jest.fn();

    store = createMockStore({
      state: mockState,
      reducers: { shop: mockReducer }
    });

    const mockMatch = {
      path: ''
    };

    const mockProps = {
      match: mockMatch,
      fetchCollectionsStart: mockFetchCollectionsStart
    };

    wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <ShopPage {...mockProps} />
        </Provider>
      </BrowserRouter>
    );
  });

  it('should render ShopPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ShopPage component', () => {
    expect(mockFetchCollectionsStart).toHaveBeenCalled();
  });
});
