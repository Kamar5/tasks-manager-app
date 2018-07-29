import React from "react";
import { Panel } from "react-bootstrap";

function handleClick(data, handleTaskClick) {
  return handleTaskClick(data);
}

function task(task, handleTaskClick) {
  return task.map(function(value, index) {
    return (
      <Panel onClick={() => handleClick(value, handleTaskClick)} key={index}>
        <Panel.Body>{value.title}</Panel.Body>
      </Panel>
    );
  });
}

export default function GroupList({ data, handleTaskClick }) {
  return (
    <div
      style={{
        width: "29%",
        float: "left",
        marginLeft: "5px"
      }}
    >
      {task(data, handleTaskClick)}
    </div>
  );
}
