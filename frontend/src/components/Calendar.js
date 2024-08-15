import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './styles.css';

const Calendar = ({ availability, setAvailability }) => {
  const handleDateClick = (info) => {
    const clickedDate = info.dateStr;
    let updatedAvailability;

    if (availability.includes(clickedDate)) {
      updatedAvailability = availability.filter(date => date !== clickedDate);
    } else {
      updatedAvailability = [...availability, clickedDate];
    }

    setAvailability(updatedAvailability);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
      events={availability.map(date => ({ title: 'Available', date }))}
    />
  );
};

export default Calendar;
