import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: "Cumple de varela",
    notes: "Se tiene que comprar el pastel",
    start: new Date(addHours(new Date(), 1)),
    end: new Date(addHours(new Date(), 2)),
    bgColor: "#fafafa",
    user: {
        _id: '123',
        name: 'Varela'
    }
}
export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tempEvent],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, {payload}) => {                        
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, {payload})=>{
            state.events.push(payload);
            state.activeEvent = null;
        },
        onDeleteEvent:(state) => {
            state.events = state.events.filter(event => event._id !== state.activeEvent._id);
            state.activeEvent = null
        },
        onUpdateEvent: (state,{payload}) =>{
         state.events= state.events.map(e=>{
            if (e._id==payload._id){
                return payload
            }
            return e;
         })

        }
    }
});
export const { onSetActiveEvent,onAddNewEvent,onUpdateEvent ,onDeleteEvent} = calendarSlice.actions;