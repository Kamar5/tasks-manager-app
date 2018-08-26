import React from 'react';
import { shallow, mount } from 'enzyme';
import FormControlComponent from './formControl';

describe('from contorl', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<FormControlComponent />);
        expect(wrapper.length).toBe(1);
    });

    it('headle click function', () => {
        const wrapper = mount(<FormControlComponent handleClick = {(data)=>{return data}} />);
        expect(wrapper.props().handleClick('google')).toBe('google');
    });
});
