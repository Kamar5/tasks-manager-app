import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

export default class FormControlComponent extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
  
      this.state = {
        value: ''
      };
    }
    handleClick(){
        this.props.handleClick(this.state.value)
        this.setState({value: ''})
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    render() {
      return (
        <form style={this.props.formStyle}>
          <FormGroup
            style={this.props.formGroupStyle}
          >
            <FormControl
              type='text'
              value={this.state.value}
              placeholder='Enter task name'
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button bsStyle='primary' onClick={this.handleClick}>{this.props.name}</Button>
        </form>
      );
    }
  }