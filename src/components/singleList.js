import React from 'react';
import { Panel, ListGroup, ListGroupItem, Checkbox } from 'react-bootstrap';

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

export default function SingleList({ singleTaskList, updateCheckBox }) {
  return (
    <Panel
      style={{
        width: '68%',
        float: 'right',
        marginRight: '15px'
      }}
      onClick={() => {}}
    >
      <Panel.Heading>{singleTaskList.title}</Panel.Heading>
      <ListGroup>{tasks(singleTaskList,updateCheckBox)}</ListGroup>
    </Panel>
  );
}
