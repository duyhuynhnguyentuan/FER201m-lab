import {createSlice} from "@reduxjs/toolkit";
import { FilmInfo } from "../shared/FilmInfo";

export const filmSlice = createSlice(
    {
        name:"films",
        initialState: {value: FilmInfo},
        reducers:{
            addFilm: (state,action)=>{
            state.value.push(action.payload);              

            },
            deleteFilm: (state,action) =>{
                state.value =state.value.filter((films) => films.id !== action.payload.id)
            },
            updateFilm: (state,action) => {
                state.value.map((films)=>{if(films.id === action.payload.id){
                    films.title = action.payload.title;
                }});
            }
        }
    });
    export default filmSlice.reducer;
    export const {addFilm, deleteFilm, updateFilm} = filmSlice.actions