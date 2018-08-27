import React from 'react';
import { shallow } from 'enzyme';
import FormControlComponent from './formControl';

describe('from contorl', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<FormControlComponent />);
        expect(wrapper.length).toBe(1);
    });

    it('should handle click function', () => {
        const wrapper = shallow(<FormControlComponent handleClick = {(data)=>{return data}} />);
        wrapper.instance().handleClick();        
        expect(wrapper.state().value).toBe('');
    });
    it('should handle change function', () => {
        const wrapper = shallow(<FormControlComponent />);
        const tempObject = { target: { value: 'test'}};
        wrapper.instance().handleChange(tempObject);        
        expect(wrapper.state().value).toBe('test');
    });
});
