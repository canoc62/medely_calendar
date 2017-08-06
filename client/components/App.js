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

export default App;