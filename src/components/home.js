import React from 'react';
import { PageHeader } from 'react-bootstrap';
import GroupList from './groupList';
import SingleList from './singleList';
import FormControlComponent from './formControl';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          title: 'Do thing at work',
          tasks: [
            { isDone: false, task: 'schedule meeting for retro' },
            { isDone: false, task: 'deploy completed task to prod' }
          ]
        },
        {
          id: 1,
          title: 'Do thing at home',
          tasks: [
            { isDone: false, task: 'fix kitchen sink' },
            { isDone: true, task: 'copy another key' },
            { isDone: false, task: 'buy grocery' }
          ]
        },
        {
          id: 2,
          title: 'Do thing at party',
          tasks: []
        }
      ],
      currentSelectedTask: {}
    };

    this.updateCurrentSelectedTask = this.updateCurrentSelectedTask.bind(this);
    this.updateCheckBox = this.updateCheckBox.bind(this);
    this.createTask = this.createTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  componentDidMount() {
    this.setState({ currentSelectedTask: this.state.data[0] });
  }

  //shows the task seclected in the right side with more details
  updateCurrentSelectedTask(data) {
    this.setState({ currentSelectedTask: data });
  }

  //change the checkbox value
  updateCheckBox(data, index, tasks){
    const items = this.state.data;

    items[tasks.id].tasks[index].isDone = !data.isDone;

    this.setState({
      data: items
    });
  }

  //create to task with emty task
  createTask(data){
    if(data && data.length !== 0){

      let temp = this.state.data;
      let setId = this.state.data.length === 0 ? 0 : this.state.data[this.state.data.length - 1].id + 1;
      let task = {
        id: setId,
        title: data,
        tasks: [ ]
      }
      temp.push(task);
      this.setState({
        data: temp
      })
    }
  }

  //to add task to current opened task
  addTask(data){
    if(data && data.length !== 0){
      let temp = this.state.data
      console.log(this.state)
      temp[this.state.currentSelectedTask.id].tasks.push({isDone: false, task: data});
      this.setState({data: temp})
    }
  }

  removeTask(index){

    let data = [...this.state.data];
    let removeCurrentSelection;

    data.splice(index, 1);
    this.setState({data: data}, () => {
      removeCurrentSelection = this.state.data.filter((item) => item.id === this.state.currentSelectedTask.id);

      if(removeCurrentSelection.length === 0){
        this.setState({currentSelectedTask: {}})      }
    })

   
  }      
  render() {
    return (
      <React.Fragment>
        <PageHeader
          className='Page-header'
          style={{
            textAlign: 'center',
            borderBottom: 'solid',
            marginTop: '15px'
          }}
        >
          Task List
        </PageHeader>
        <FormControlComponent handleClick = {this.createTask} 
                              formStyle = {{width: '29%', marginLeft: '5px', float: 'left'}}
                              formGroupStyle={{ width: '74%', display: 'inline-block', marginRight: '5px'}}
                              name = {'Create'}
                              placeHolder = {'Enter task name'} />       
        <GroupList data={this.state.data} 
                   updateCurrentSelectedTaskClick={this.updateCurrentSelectedTask}
                   removeTask = {this.removeTask} />
        {this.state.currentSelectedTask.id !== undefined ? <SingleList singleTaskList={this.state.currentSelectedTask} updateCheckBox={this.updateCheckBox} addTask = {this.addTask}/>: ''}
      </React.Fragment>
    );
  }
}
