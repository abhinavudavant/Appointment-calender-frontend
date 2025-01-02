import '../App.css';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

const CalendarDisplay = ({ events, onEventDrop, onEventDelete, onSlotSelect }) => {
    const eventPropGetter = (event) => ({
    style: {
      position: 'relative',
      backgroundColor: '#6696f5',
      borderRadius: '5px',
      padding: '5px',
      border: 'none',
    },
  });
  return (
    <div className="bg-black shadow-lg rounded-lg p-1" >
      <DragAndDropCalendar
        localizer={localizer}
        events={events}
        eventPropGetter={eventPropGetter}
        selectable
        onEventDrop={onEventDrop}
        onSelectSlot={onSlotSelect}
        onSelectEvent={(event) => onEventDelete(event)}
        defaultView="month"
        resizable
        style={{ height: '90vh' }}
        className="p-2 rounded-lg" 
        
      />
    </div>
  );
};

export default CalendarDisplay;