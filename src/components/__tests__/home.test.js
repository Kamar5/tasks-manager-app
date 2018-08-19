import React from 'react';
import { shallow } from 'enzyme';
import Home from '../home';

describe('home', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.length).toBe(1);
    });

});
