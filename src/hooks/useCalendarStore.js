
import { localizer, messages } from '../helpers';
import { addHours } from 'date-fns';
import { useState } from 'react';
import { useUiStore } from './useUiStore';


export const useCalendarStore = () => {
  const {openDateModal } = useUiStore();
  const events = [{
    title: "Cumple de varela---",
    notes: "Se tiene que comprar el pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: '123',
      name: 'Varela'
    }
  }]
  

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
    openDateModal();
    //onOpenDateModal();
    //console.log({ doubleClick: event });
  }
  const onSelect = (event) => {
    console.log({ select: event });
  }
  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setLastView(event);
  }


  return {events,lastView,onDoubleClick,onSelect,onViewChanged,localizer,messages,eventStyleGetter}


}
