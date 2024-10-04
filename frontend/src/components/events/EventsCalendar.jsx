import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  CalendarContainer,
  SectionContainer,
  SectionTitle,
} from "./Events.styles.jsx";

const localizer = momentLocalizer(moment);

const calculateSecondWednesdays = (year) => {
  const secondWednesdays = [];
  for (let month = 0; month < 12; month++) {
    const firstDayOfMonth = new Date(year, month, 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    const secondWednesdayDate = 1 + ((3 - dayOfWeek + 7) % 7) + 7;
    const secondWednesday = new Date(year, month, secondWednesdayDate);
    secondWednesdays.push(secondWednesday);
  }
  return secondWednesdays;
};

const EventsCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const year = new Date().getFullYear();
    const secondWednesdays = calculateSecondWednesdays(year);
    const legionMeetings = secondWednesdays.map((date) => ({
      title: "Legion Meeting",
      start: date,
      end: new Date(date.getTime() + 2 * 60 * 60 * 1000), // 2-hour meeting
    }));

    setEvents(legionMeetings);
  }, []);

  return (
    <SectionContainer>
      <SectionTitle>Event Calendar</SectionTitle>
      <CalendarContainer>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />
      </CalendarContainer>
    </SectionContainer>
  );
};

export default EventsCalendar;
