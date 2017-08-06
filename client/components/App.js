import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Event from './Event';
import TimeTable from './TimeTable';
import Calendar from './../containers//Calendar';

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}

const styles = {
  jumboStyle: {
    height: '720px',
    width: '620px',
    boxSizing: 'border-box',
    padding: '0px 10px',
    backgroundColor: 'blue',
    margin: '0 auto',
    positon: 'absolute'
  }
}

/* <div>
        <Button style={{position: "relative", float: "right", margin: "-70px 90px 0 0"}} bsStyle="primary" bsSize="large">New Event</Button>
        <TimeTable />
        <div style={styles.jumboStyle}>
          <Event start={0} height={30}/>
          <Event start={30} height={50}/>
          <Event start={120} height={90}/>
        </div>
      </div> */

export default App;