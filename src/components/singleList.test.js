import React from 'react';
import { shallow, mount } from 'enzyme';
import SingleList from './singleList';
import { ListGroupItem } from 'react-bootstrap';
describe('single list', () => {
  let currentTask = {
    id: 0,
    title: 'Do thing at work',
    tasks: [
      { isDone: false, task: 'schedule meeting for retro' },
      { isDone: false, task: 'deploy completed task to prod' }
    ]
  }
  let wrapper;
  it('should return list of tasks', () => {
    wrapper = shallow(<SingleList singleTaskList = {currentTask} />);
    expect(wrapper.find(ListGroupItem).length).toBe(2);
  });

  it('should return emty list', () => {
    wrapper = shallow(<SingleList singleTaskList = {{id: 1, title: 'sds', task: [] }} />);
    expect(wrapper.find(ListGroupItem).length).toBe(0);

  })

});