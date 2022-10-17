
import { useState, useEffect } from 'react';


import { Calendar } from 'react-big-calendar';
import { NavBar, CalendarEvent, FabAddNew, FabDelete } from '../';
import { CalendarModal } from '../components/CalendarModal';

import { useCalendarStore, useUiStore } from '../../hooks';
import { localizer, messages } from '../../helpers';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useAuthStore } from '../../hooks/useAuthStore';

export const CalendarPage = () => {

  const { openDateModal } = useUiStore();
  const { user } = useAuthStore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'day');
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();



  const eventStyleGetter = ( event, start, end, isSelected ) => {
    
  const isMyEvent = (user.uid == event.user._id) ||  (user.uid === event.user.uid);        
    const style = {
      backgroundColor: isMyEvent?"#347CF7":"#465660",
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

  useEffect(() => {
    startLoadingEvents();
  }, [])

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
      <FabAddNew></FabAddNew>
      <FabDelete></FabDelete>

    </>
  )
}
