import React from 'react';
import { Panel, Glyphicon } from 'react-bootstrap';

export default function   ({ data, updateCurrentSelectedTaskClick, removeTask }) {

  function task() {
    return data.map(function(value, index) {
      return (
        <Panel key={index}>
          <Panel.Body onClick={() => updateCurrentSelectedTaskClick(value)} style={{width: '95%', display: 'inline-block'}}>{value.title}</Panel.Body>
          <Glyphicon glyph='glyphicon glyphicon-remove' style={{color: 'red', cursor: 'pointer'}} onClick={()=> removeTask(index)} />
        </Panel>
      );
    });
  }
  return (
    <div
      style={{
        width: '29%',
        float: 'left',
        marginLeft:  '-29%',
        marginTop: '45px'
      }}
    >
      {task(removeTask)}
      
    </div>
  );
}
