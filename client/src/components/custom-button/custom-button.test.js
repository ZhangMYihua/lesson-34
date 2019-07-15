import React from 'react';
import { shallow } from 'enzyme';
import { CustomButton } from './custom-button.component';

it('should render CustomButton component', () => {
  expect(shallow(<CustomButton />)).toMatchSnapshot();
});
