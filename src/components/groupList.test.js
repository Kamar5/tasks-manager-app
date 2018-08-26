import React from 'react';
import { shallow } from 'enzyme';
import GroupList from './groupList';
import { Panel, Glyphicon } from 'react-bootstrap';

describe('group list', () => {
    const data = [{
        id: 0,
        title: 'Do thing at work',
        tasks: [
          { isDone: false, task: 'schedule meeting for retro' },
          { isDone: false, task: 'deploy completed task to prod' }
        ]
    }]
    it('renders without crashing', () => {
        const wrapper = shallow(<GroupList data = {[{data1: 'data1'}]} />);
        expect(wrapper.length).toBe(1);
    });
    it('should render with panel ', () => {
       
        const wrapper = shallow(<GroupList data = {data} />);
        expect(wrapper.find(Panel).length).toBe(1);

    });
    it('should render with glyphicon', () => {
       
        const wrapper = shallow(<GroupList data = {data} />);
        expect(wrapper.find(Glyphicon).length).toBe(1);

    });

});
