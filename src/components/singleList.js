import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListGroup, ListGroupItem, Checkbox } from 'react-bootstrap';
import FormControlComponent from './formControl';

export default function SingleList({ singleTaskList, updateCheckBox, addTask }) {

  function tasks() {
    return singleTaskList.tasks
      ? singleTaskList.tasks.map(function(data, index) {
          return <ListGroupItem key={index} className = { data.isDone ? 'doneTask' : '' } ><Checkbox checked = {data.isDone} onChange={() => updateCheckBox(data, index)}><span>{data.task}</span></Checkbox></ListGroupItem>;
        })
      : '';
  }
  
  return (
    <Panel
      style={{ width: '68%', float: 'right', marginRight: '15px'}}
      onClick={() => {}}
    >
      <Panel.Heading style = {{height: '50px'}}><h5 style={{display: 'inline-block'}}>{singleTaskList.title}</h5> 
        <FormControlComponent handleClick = {addTask} 
                              formStyle = {{    display: 'inline', float: 'right', marginRight: '10px'}}
                              formGroupStyle={{ display: 'inline-block', marginRight: '5px', marginBottom: '5px'}}
                              name = {'Add'}
                              placeHolder = {'Enter task'} /> 
      </Panel.Heading>
      {<ListGroup>{tasks(singleTaskList,updateCheckBox)}</ListGroup>}
    </Panel>
  );
}

SingleList.propTypes = {
  singleTaskList: PropTypes.object,
  updateCheckBox: PropTypes.func,
  addTask: PropTypes.func
};
