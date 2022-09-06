
import { useSelector, useDispatch } from 'react-redux';
import { onSetActiveEvent } from '../store';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const {events,activeEvent} = useSelector(state=>state.calendar);

  const setActiveEvent =(calendarEvent)=>{    
    console.log(calendarEvent);
     dispatch(onSetActiveEvent(calendarEvent));
  }
  


  return { 
    //Propiedades
    events, activeEvent ,
    //Metodos
    setActiveEvent }


}
