import React from "react";
import { PageHeader } from "react-bootstrap";
import GroupList from "./groupList";
import SingleList from "./singleList";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          title: "Do thing at work",
          tasks: [
            { isDone: false, task: "schedule meeting for retro" },
            { isDone: false, task: "deploy completed task to prod" }
          ]
        },
        {
          id: 1,
          title: "Do thing at home",
          tasks: [
            { isDone: false, task: "fix kitchen sink" },
            { isDone: false, task: "copy another key" },
            { isDone: false, task: "buy grocery" }
          ]
        },
        {
          id: 2,
          title: "Do thing at party",
          tasks: []
        }
      ],
      currentSelectedTask: []
    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.setState({ currentSelectedTask: this.state.data[0] });
  }
  handleClick(data) {
    this.setState({ currentSelectedTask: data });
  }
  render() {
    return (
      <React.Fragment>
        <PageHeader
          className="Page-header"
          style={{
            textAlign: "center",
            borderBottom: "solid",
            marginTop: "15px"
          }}
        >
          Task List
        </PageHeader>
        <GroupList data={this.state.data} handleTaskClick={this.handleClick} />
        <SingleList singleTaskList={this.state.currentSelectedTask} />
      </React.Fragment>
    );
  }
}

export default Home;
