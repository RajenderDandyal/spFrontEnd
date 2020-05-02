
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';



it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const welcome = <p>Hi there!! how r u?</p>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true)
});

it('renders without crashing', () => {
  expect(2).toBe(2)
});
it('renders without crashing2', () => {
  expect(2 + 2).toBe(4);
});
it('renders without crashing3', () => {
  expect(2 + 2).toBe(4);
});
