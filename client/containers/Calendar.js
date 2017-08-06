import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import TimeTable from './../components/TimeTable';
import Event from './../components/Event';
import Schedule from './../components/Schedule';
import AddEventOverlay from './../components/AddEventOverlay';

class Calendar extends Component {
  constructor() {
    super();

    this.state = {
      showAddEventOverlay: false
    }

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showAddEventOverlay: false });
  }

  open() {
    this.setState({ showAddEventOverlay: true });
  }

  render() {
    return (
      <div>
        <Button style={{position: "relative", float: "right", margin: "-70px 90px 0 0"}} bsStyle="primary" bsSize="large" onClick={this.open}>New Event</Button>
        <TimeTable />
        <Schedule />
        <AddEventOverlay showAddEventOverlay={this.state.showAddEventOverlay} close={this.close}/>
      </div>
    );
  }
}

// function mapStateToProps(props) {
//   return props;
// }

// function mapDispatchToProps(props) {
//   return props;
// }

export default Calendar;//connect(mapStateToProps, mapDispatchToProps)(Calendar);
