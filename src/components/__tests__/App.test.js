import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';


describe('app', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  });
  
});
