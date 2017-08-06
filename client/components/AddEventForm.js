import React from 'react';
import { FormControl, Button } from 'react-bootstrap';

const AddEventForm = (props) => {
  return (
    <form>
       <p style={{display: props.displayError()}}>
        Error you already have an event scheduled for that time
      </p> 
      <FormControl
        type="text"
        value={props.eventName}
        placeholder="Event Name"
        onChange={props.handleEventNameChange}
        style={{display: "block", width: '400px', margin: '0 auto'}}
      />
      <FormControl
        type="text"
        value={props.startTime}
        placeholder="Start Time"
        onChange={props.handleStartTimeChange}
        style={{display: "inline-block", width: '150px', margin: '0 auto'}}
      />
      <FormControl
        type="text"
        value={props.endTime}
        placeholder="End Time"
        onChange={props.handleEndTimeChange}
        style={{display: "inline-block", width: '150px', margin: '0 auto'}}
      />
      <Button onClick={props.close}>Cancel</Button>
      <Button bsStyle="primary" onClick={props.handleEventSubmit}>Save</Button>
    </form>
  )
}

export default AddEventForm;