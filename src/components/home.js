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
            { isDone: true, task: "copy another key" },
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

    this.updateCurrentSelectedTask = this.updateCurrentSelectedTask.bind(this);
    this.updateCheckBox = this.updateCheckBox.bind(this);
  }
  componentDidMount() {
    this.setState({ currentSelectedTask: this.state.data[0] });
  }
  updateCurrentSelectedTask(data) {
    this.setState({ currentSelectedTask: data });
  }

  updateCheckBox(data, index, tasks){
    const items = this.state.data;

    items[tasks.id].tasks[index].isDone = !data.isDone;
    
    this.setState({
      data: items
    });
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
        <GroupList data={this.state.data} updateCurrentSelectedTaskClick={this.updateCurrentSelectedTask} />
        <SingleList singleTaskList={this.state.currentSelectedTask} updateCheckBox={this.updateCheckBox} />
      </React.Fragment>
    );
  }
}

export default Home;
