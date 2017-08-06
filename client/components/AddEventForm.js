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
      endTime: '',
      invalidInput: false
    }

    this.handleEventSubmit = this.handleEventSubmit.bind(this);
    this.handleEventNameChange = this.handleEventNameChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
    this.validateEvent = this.validateEvent.bind(this);
    this.displayError = this.displayError.bind(this);
  }

  validateEvent() {
    const eventStartTime = parseInt(this.state.startTime);
    const eventEndTime = parseInt(this.state.endTime);

    if (eventStartTime < 0 || eventStartTime >= 720 ||
        eventEndTime <= 0 || eventEndTime > 720 ) {
          return false;
        }
    if (!this.props.events[this.state.startTime]) {

      for (let event in this.props.events) {
        const currEvent = this.props.events[event];
        const currEventStartTime = parseInt(currEvent.start);

        if (eventStartTime < currEventStartTime && eventEndTime > currEventStartTime) {
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
    console.log('clicking!', this.state.endTime);
    if (this.validateEvent()) {
      console.log('in here!');
      this.props.addEvent(
        this.state.eventName,
        this.state.startTime,
        this.state.endTime
      );
      // need to actually add event in ui
      this.props.close();
    } 
    else {
      // do something, dispatch action, change compinent state for fail event addition. display message
      this.setState({ invalidInput: true })
    }
    //this.props.close();
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

  displayError() {
    if (this.state.invalidInput) {
      return "block";
    }
    return "none";
  }

  render() {
    return (
      <form>
        <p style={{display: this.displayError()}}>
          Error you already have an event scheduled for that time
        </p>
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
        <Button bsStyle="primary" onClick={this.handleEventSubmit}>Save</Button>
      </form>
    );
  }
}

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps, { addEvent })(AddEventForm);
//export default AddEventForm;