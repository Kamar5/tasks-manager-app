import React from "react";
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";

function tasks(tasks) {
  return tasks
    ? tasks.map(function(data, index) {
        return <ListGroupItem key={index}>{data.task}</ListGroupItem>;
      })
    : "";
}

export default function SingleList({ singleTaskList }) {
  return (
    <Panel
      style={{
        width: "69%",
        float: "right",
        marginRight: "15px"
      }}
      onClick={() => {}}
    >
      <Panel.Heading>{singleTaskList.title}</Panel.Heading>
      <ListGroup>{tasks(singleTaskList.tasks)}</ListGroup>
    </Panel>
  );
}
