
import { Calendar } from 'react-big-calendar';
import { NavBar, CalendarEvent } from '../';
import { CalendarModal } from '../components/CalendarModal';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useCalendarStore } from '../../hooks/useCalendarStore';

export const CalendarPage = () => {

  const  { events,lastView,onDoubleClick,onSelect,onViewChanged,localizer,messages,eventStyleGetter}=useCalendarStore()
  
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
