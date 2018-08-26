import React from 'react';
import { shallow } from 'enzyme';
import { PageHeader } from 'react-bootstrap';

import Home from './home';
import GroupList from './groupList';
import SingleList from './singleList';
import FormControlComponent from './formControl';

describe('home', () => {
    const wrapper = shallow(<Home />)
    it('renders without crashing', () => {
        expect(wrapper.length).toBe(1);
    });

    it('should render Page Header component', () => {
        expect(wrapper.find(PageHeader).length).toBe(1);
    });
    it('should render FormControlComponent component', () => {
        expect(wrapper.find(FormControlComponent).length).toBe(1);
    });
    it('should render GroupList component', () => {
        expect(wrapper.find(GroupList).length).toBe(1);
    });
    it('should render SingleList component', () => {
        expect(wrapper.find(SingleList).length).toBe(1);
    });

});
