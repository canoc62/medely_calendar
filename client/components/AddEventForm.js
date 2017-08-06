import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import { addEvent } from './../actions/events';

class AddEventForm extends Component {
  constructor() {
    super();

    this.state = {
      eventName: '',
      startTime: '',
      endTime: ''
    }

    this.handleEventSubmit = this.handleEventSubmit.bind(this);
    this.handleEventNameChange = this.handleEventNameChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.validateEvent = this.validateEvent.bind(this);
  }

  validateEvent() {
    if (!this.props.events[this.state.startTime]) {
      const eventEndTime = parseInt(this.state.endTime);

      for (let event in this.props.events) {
        const currEvent = this.props.events[event];

        if (eventEndTime > parseInt(currEvent.start)) {
          return false;
        }
      }

      return true;
    } else {
      return false;
    }
  }

  handleEventSubmit(e) {
    // check if event start and end times overlap with another event

    if (validateEvent()) {
      this.props.addEvent(
        this.state.eventName,
        this.state.startTime,
        this.state.endTime
      );
      // need to actually add event in ui
    } else {
      // do something, dispatch action, change compinent state for fail event addition. display message
    }
  }

  handleEventNameChange(e) {
    this.setState({eventName: e.target.value});
  }

  handleStartTimeChange(e) {
    this.setState({startTime: e.target.value});
  }

  handleEndTimeChange(e) {
    this.setState({endTime: e.target.value});
  }

  render() {
    return (
      <form>
        <FormControl
          type="text"
          value={this.state.eventName}
          placeholder="Event Name"
          onChange={this.handleEventNameChange}
          style={{display: "block", width: '400px', margin: '0 auto'}}
        />
        <FormControl
          type="text"
          value={this.state.startTime}
          placeholder="Start Time"
          onChange={this.handleStartTimeChange}
          style={{display: "inline-block", width: '150px', margin: '0 auto'}}
        />
        <FormControl
          type="text"
          value={this.state.endTime}
          placeholder="End Time"
          onChange={this.handleEndTimeChange}
          style={{display: "inline-block", width: '150px', margin: '0 auto'}}
        />
        <Button onClick={this.props.close}>Cancel</Button>
        <Button bsStyle="primary" onClick={this.handleSubmitEvent}>Save</Button>
      </form>
    );
  }
}

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps, { addEvent })(AddEventForm);
//export default AddEventForm;