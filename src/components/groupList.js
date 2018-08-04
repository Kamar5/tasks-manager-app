import React from 'react';
import { Panel } from 'react-bootstrap';

function handleClick(data, updateCurrentSelectedTaskClick) {
  return updateCurrentSelectedTaskClick(data);
}

function task(task, updateCurrentSelectedTaskClick) {
  return task.map(function(value, index) {
    return (
      <Panel onClick={() => handleClick(value, updateCurrentSelectedTaskClick)} key={index}>
        <Panel.Body>{value.title}</Panel.Body>
      </Panel>
    );
  });
}

export default function GroupList({ data, updateCurrentSelectedTaskClick }) {
  return (
    <div
      style={{
        width: '29%',
        float: 'left',
        marginLeft:  '-29%',
        marginTop: '45px'
      }}
    >
      {task(data, updateCurrentSelectedTaskClick)}
    </div>
  );
}
