import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';


const tempEvent = [{
    title: "Cumple de varela",
    notes: "Se tiene que comprar el pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: '123',
      name: 'Varela'
    }
  }]

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events:[tempEvent],
        activeEvent:null
    },
    reducers: {
        increment: (state /* action */) => {
            state.counter += 1;
        }
    }
});
export const { increment } = calendarSlice.actions;