import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: "Cumple de varela",
    notes: "Se tiene que comprar el pastel",
    start: addHours(new Date(), 1),
    end: addHours(new Date(), 2),
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
        onSetActiveEvent: (state, { payload }) => {            
            
            state.activeEvent = payload;
        }
    }
});
export const { onSetActiveEvent } = calendarSlice.actions;