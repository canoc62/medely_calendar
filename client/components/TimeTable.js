import React from 'react';

const TimeTable = () => {
  return (
    <table style={styles.timeTable}>
      <tbody>
        <tr>
          <td>9:00 AM</td>
        </tr>
        <tr>
          <td>9:30</td>
        </tr>
        <tr>
          <td>10:00 AM</td>
        </tr>
        <tr>
          <td>10:30</td>
        </tr>
        <tr>
          <td>11:00 AM</td>
        </tr>
        <tr>
          <td>11:30</td>
        </tr>
        <tr>
          <td>12:00 PM</td>
        </tr>
        <tr>
          <td>12:30</td>
        </tr>
        <tr>
          <td>1:00 PM</td>
        </tr>
        <tr>
          <td>1:30</td>
        </tr>
        <tr>
          <td>2:00 PM</td>
        </tr>
        <tr>
          <td>2:30</td>
        </tr>
        <tr>
          <td>3:00 PM</td>
        </tr>
        <tr>
          <td>3:30</td>
        </tr>
        <tr>
          <td>4:00 PM</td>
        </tr>
        <tr>
          <td>4:30</td>
        </tr>
        <tr>
          <td>5:00 PM</td>
        </tr>
        <tr>
          <td>5:30</td>
        </tr>
        <tr>
          <td>6:00 PM</td>
        </tr>
        <tr>
          <td>6:30</td>
        </tr>
        <tr>
          <td>7:00 PM</td>
        </tr>
        <tr>
          <td>7:30</td>
        </tr>
        <tr>
          <td>8:00 PM</td>
        </tr>
        <tr>
          <td>8:30</td>
        </tr>
        <tr>
          <td>9:00 PM</td>
        </tr>
      </tbody>
    </table>
  );
}

const styles = {
  timeTable: {
    float: "left"
  }
}

export default TimeTable;