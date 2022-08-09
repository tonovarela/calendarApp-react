import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import enUS from 'date-fns/locale/en-US'
import { addHours,format,parse,startOfWeek,getDay } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { NavBar } from '../';



const locales = {
  'en-US': enUS,
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
const events = [{
  title: "Cumple de varela",
  notes: "Se tiene que comprar el pastel",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user:{
    _id:'123',
    name:'Varela'
  }
}]
export const CalendarPage = () => {
  return (
    <>
      <NavBar></NavBar>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 98px)' }}
      />
    </>
  )
}
