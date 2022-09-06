
import { Calendar } from 'react-big-calendar';
import { NavBar, CalendarEvent } from '../';
import { CalendarModal } from '../components/CalendarModal';

import {useCalendarStore, useUiStore } from '../../hooks';
import { localizer, messages } from '../../helpers';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';


export const CalendarPage = () => {

  const { openDateModal } = useUiStore();  
  
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'day');
  const  {events,activeEvent,setActiveEvent} = useCalendarStore();
  
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
    openDateModal();    
  }
  const onSelect = (event) => {    
    setActiveEvent(event);    
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
