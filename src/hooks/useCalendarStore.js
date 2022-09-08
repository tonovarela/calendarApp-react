
import { useSelector, useDispatch } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {
   const dispatch = useDispatch();
   const { events, activeEvent } = useSelector(state => state.calendar);

   const setActiveEvent = (calendarEvent) => {

      dispatch(onSetActiveEvent(calendarEvent));
   }
   const startDeleteEvent = async () => {
      //TODO ir al backend
      dispatch(onDeleteEvent());

   }
   const startSavingEvent = async (calendarEvent) => {
      //TODO :ir al backend
      //Todo bien
      if (calendarEvent._id) {
         //Actualizado
         dispatch(onUpdateEvent({ ...calendarEvent }));
      } else {
         //Crear
         dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
      }


   }


   return {
      //Propiedades
      events, activeEvent,
      hasEventSelected :!!activeEvent,
      //Metodos
      setActiveEvent,
      startSavingEvent,
      startDeleteEvent,

   }


}
