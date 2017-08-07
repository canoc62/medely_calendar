import React, { Component } from 'react';
import AddEventForm from './../components/AddEventForm';
import { connect } from 'react-redux';
import { addEvent } from './../actions/events';
import { SECONDS_IN_MINUTE, SECONDS_IN_NINE_HOURS} from './../actions/constants';

class AddEventFormContainer extends Component {
  constructor() {
    super();

    this.state = {
      eventName: '',
      startTime: 32400,
      endTime: 32460,
      invalidInput: false
    }

    this.handleEventSubmit = this.handleEventSubmit.bind(this);
    this.handleEventNameChange = this.handleEventNameChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
    this.validateEvent = this.validateEvent.bind(this);
    this.displayError = this.displayError.bind(this);
    this.disabledSave = this.disabledSave.bind(this);
  }

  validateEvent() {
    console.log('time state: ', this.state.startTime, ' ', this.state.endTime);
    console.log('duration: ', (this.state.endTime - this.state.startTime)/60);
    if (this.state.startTime >= this.state.endTime) {
      return false;
    }
    // const eventStartTime = this.state.startTime.toString();
    // const eventEndTime = this.state.endTime.toString();
    const adjustedStartTime = (this.state.startTime - SECONDS_IN_NINE_HOURS)/SECONDS_IN_MINUTE;
    const adjustedEndTime = (this.state.endTime - SECONDS_IN_NINE_HOURS)/SECONDS_IN_MINUTE;

    if (!this.props.events[adjustedStartTime]) {
      console.log('in if');
      for (let event in this.props.events) {
        const currEvent = this.props.events[event];
        const currEventStartTime = currEvent.start;
        console.log('adjustedStartTIme', adjustedStartTime);
        console.log('adjustedEndTime', adjustedEndTime);
        console.log('currEventStartTime', currEventStartTime);
        if (adjustedStartTime < currEventStartTime && 
          adjustedEndTime > currEventStartTime) {
          return false;
        }
      }

      return true;
    } else {
      return false;
    }
  }

  handleEventSubmit(e) {
    if (this.validateEvent()) {
      this.props.addEvent(
        this.state.eventName,
        this.state.startTime,
        this.state.endTime
      );
      this.props.close();
    } 
    else {
      this.setState({ invalidInput: true })
    }
  }

  handleEventNameChange(e) {
    this.setState({eventName: e.target.value});
  }

  handleStartTimeChange(time) {
    console.log('start time: ', time);
    this.setState({startTime: time});
  }

  handleEndTimeChange(time) {
    console.log('end time: ', time);
    this.setState({endTime: time});
  }

  disabledSave() {
    return this.state.eventName === '';
  }

  displayError() {
    if (this.state.invalidInput) {
      return "block";
    }
    return "none";
  }

  render() {
    return (
      <AddEventForm 
        displayError={this.displayError}
        eventName={this.state.eventName}
        handleEventNameChange={this.handleEventNameChange}
        startTime={this.state.startTime}
        handleStartTimeChange={this.handleStartTimeChange}
        endTime={this.state.endTime}
        handleEndTimeChange={this.handleEndTimeChange}
        handleEventSubmit={this.handleEventSubmit}
        close={this.props.close}
        disabledSave={this.disabledSave}
      />
    );
  }
}

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps, { addEvent })(AddEventFormContainer);
