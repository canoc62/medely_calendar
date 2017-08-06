import { ADD_EVENT } from './constants';

export function addEvent(eventName, startTime, endTime) {
  return {
    type: ADD_EVENT,
    eventData: {
      eventName,
      start,
      end
    }
  }
}