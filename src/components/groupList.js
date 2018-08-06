import React from 'react';
import { Panel, Glyphicon } from 'react-bootstrap';

function handleClick(data, updateCurrentSelectedTaskClick) {
  return updateCurrentSelectedTaskClick(data);
}

function removeItem(value, removeTask){
  return removeTask(value);
}

function task(task, updateCurrentSelectedTaskClick, removeTask) {
  return task.map(function(value, index) {
    return (
      <Panel key={index}>
        <Panel.Body onClick={() => handleClick(value, updateCurrentSelectedTaskClick)} style={{width: '95%', display: 'inline-block'}}>{value.title}</Panel.Body>
        <Glyphicon glyph='glyphicon glyphicon-remove' style={{color: 'red', cursor: 'pointer'}} onClick={()=> removeItem(index, removeTask)} />
      </Panel>
    );
  });
}

export default function GroupList({ data, updateCurrentSelectedTaskClick, removeTask }) {
  return (
    <div
      style={{
        width: '29%',
        float: 'left',
        marginLeft:  '-29%',
        marginTop: '45px'
      }}
    >
      {task(data, updateCurrentSelectedTaskClick, removeTask)}
      
    </div>
  );
}
