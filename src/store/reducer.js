import { v4 } from "uuid";
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actions";

const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                id: v4(),
                ...action.payload
            }]
        case EDIT_TODO:
            console.log(action);
            return state.map((todo) => todo.id === action.payload.id ? action.payload : todo);
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload);

        default:
            return state
    }
}