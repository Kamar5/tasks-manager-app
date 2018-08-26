import React from 'react';
import { shallow } from 'enzyme';
import SingleList from './singleList';

describe('single list', () => {
let currentTask = {
    id: 0,
    title: 'Do thing at work',
    tasks: [
      { isDone: false, task: 'schedule meeting for retro' },
      { isDone: false, task: 'deploy completed task to prod' }
    ]
  }
    it('renders without crashing', () => {
        const wrapper = shallow(<SingleList singleTaskList = {currentTask} />);
        expect(wrapper.length).toBe(1);
    });

});