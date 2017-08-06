import React from 'react';
import { Modal } from 'react-bootstrap';
import AddEventForm from './AddEventForm';

const AddEventOverlay = (props) => {
  return (
    <Modal show={props.showAddEventOverlay} onHide={props.close}>
      <AddEventForm close={props.close}/>
      {/* <div>
        <Button onClick={props.close}>Cancel</Button>
      </div> */}
    </Modal>
  );
}

export default AddEventOverlay;
