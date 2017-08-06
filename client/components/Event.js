import React from 'react';

const Event = (props) => {
  return (
    <div style={
      { height: props.height + 'px',
        top: 100 + props.start + 'px',
        position: 'absolute',
        width: '600px',
        float: 'left',
        backgroundColor: '#fff',
        border: '1px solid #000',
      }
    }>
      <span>{props.eventName}</span>
    </div>
  );
}

export default Event;