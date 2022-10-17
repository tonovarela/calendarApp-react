
import { useSelector, useDispatch } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store';
import calendarApi from '../api/calendarApi';
import { convertEventsToDateEvents } from '../helpers/convertEventsToDateEvents';
import Swal  from 'sweetalert2';


export const useCalendarStore = () => {
   const dispatch = useDispatch();
   const { events, activeEvent } = useSelector(state => state.calendar);
   const { user } = useSelector(state => state.auth);


   const startLoadingEvents = async () => {
      try {
         const { data } = await calendarApi.get('/events');
         const events = convertEventsToDateEvents(data.eventos);                
         dispatch(onLoadEvents(events));      
      } catch (error) {
       console.log(error);
      }
   }
   const setActiveEvent = (calendarEvent) => {
      dispatch(onSetActiveEvent(calendarEvent));
   }

   const startDeleteEvent = async () => {
      try {
         await calendarApi.delete(`/events/${activeEvent.id}`);
         //TODO ir al backend
         dispatch(onDeleteEvent());  
      } catch (error) {
                Swal.fire('Error al eliminar',error.response.data.msg,'error');
      }       
   }
   const startSavingEvent = async (calendarEvent) => {
      try {
         if (calendarEvent.id) {
            await calendarApi.put(`events/${calendarEvent.id}`,calendarEvent);                  
            dispatch(onUpdateEvent({ ...calendarEvent }));
            return;
         }       
            //Crear
            const { data } = await calendarApi.post("/events", calendarEvent)
            const evento = data.evento
            dispatch(onAddNewEvent({ ...calendarEvent, id: evento.id, user }))
         
      } catch (error) {   
         
         Swal.fire('Error al guardar',error.response.data.msg,'error');
      }
      
      
      


   }


   return {
      //Propiedades
      events, activeEvent,
      hasEventSelected: !!activeEvent,
      //Metodos
      startLoadingEvents,
      setActiveEvent,
      startSavingEvent,
      startDeleteEvent,

   }


}
