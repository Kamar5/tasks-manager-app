import React from 'react';
import { Panel, ListGroup, ListGroupItem, Checkbox } from 'react-bootstrap';
import FormControlComponent from './formControl';

function tasks(singleTaskList,updateCheckBox) {
  return singleTaskList.tasks
    ? singleTaskList.tasks.map(function(data, index) {
        return <ListGroupItem key={index} className = { data.isDone ? 'doneTask' : '' } ><Checkbox checked = {data.isDone} onChange={() => onChangeTask(data, index , singleTaskList,updateCheckBox)}><span>{data.task}</span></Checkbox></ListGroupItem>;
      })
    : '';
}

function onChangeTask(data, index, tasks,updateCheckBox){
  return updateCheckBox(data, index, tasks)
}


export default function SingleList({ singleTaskList, updateCheckBox, addTask }) {
  return (
    <Panel
      style={{
        width: '68%',
        float: 'right',
        marginRight: '15px'
      }}
      onClick={() => {}}
    >
      <Panel.Heading>{singleTaskList.title} 
        <FormControlComponent handleClick = {addTask} 
                              formStyle = {{    display: 'inline', marginLeft: '58%'}}
                              formGroupStyle={{ display: 'inline-block', marginRight: '5px', marginBottom: '5px'}}
                              name = {'Add'}
                              placeHolder = {'Enter task'} /> 
      </Panel.Heading>
      <ListGroup>{tasks(singleTaskList,updateCheckBox)}</ListGroup>
    </Panel>
  );
}
