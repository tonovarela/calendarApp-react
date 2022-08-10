import { Calendar } from 'react-big-calendar'


import { addHours} from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { NavBar,CalendarEvent } from '../';
import { localizer,messages } from '../../helpers';


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

  const eventStyleGetter =( {event,start,end,isSelected})=>{
    //console.log({event,start,end,isSelected}); 
    const style = {
      backgroundColor:"#347CF7",
      borderRadius:"0px",
      opacity:0.8,      
      color:"white"
    }
    return {
      style
    }
  }

  return (
    <>
      <NavBar></NavBar>

      <Calendar
        culture='es'   
        eventPropGetter={eventStyleGetter}     
        messages={messages}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 98px)' }}
        components={{
          event:CalendarEvent
        }}
      />
    </>
  )
}
