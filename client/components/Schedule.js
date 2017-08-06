import React from 'react';
import Event from './Event';

const Schedule = ({events}) => {
  console.log('EVENNTTSS: ', events);
  const eventComponents = Object.keys(events).reduce((acc, curr) => {
    const currEvent = events[curr];
    const newEventComponent = (
    <Event 
      eventName={currEvent.eventName}
      start={parseInt(currEvent.start)}
      height={currEvent.duration} 
    />);
    return [...acc, newEventComponent];
  }, []);

  return (
    <div style={styles.jumboStyle}>
      {eventComponents}
    </div>
  );
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

export default Schedule;