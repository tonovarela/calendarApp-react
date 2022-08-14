import { addHours } from 'date-fns'
import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import { NavBar, CalendarEvent } from '../';
import { localizer, messages } from '../../helpers';
import { CalendarModal } from '../components/CalendarModal';

import 'react-big-calendar/lib/css/react-big-calendar.css';


const events = [{
  title: "Cumple de varela",
  notes: "Se tiene que comprar el pastel",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: '123',
    name: 'Varela'
  }
}]
export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'day');
  const eventStyleGetter = ({ event, start, end, isSelected }) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white"
    }
    return {
      style
    }
  }
  const onDoubleClick = (event) => {
    console.log({ doubleClick: event });
  }
  const onSelect = (event) => {
    console.log({ select: event });
  }
  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setLastView(event);
  }
  return (
    <>
      <NavBar></NavBar>
      <Calendar
        culture='es'
        defaultView={lastView}
        eventPropGetter={eventStyleGetter}
        messages={messages}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 98px)' }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
        components={{
          event: CalendarEvent
        }}
      />
      <CalendarModal></CalendarModal>
    </>
  )
}
