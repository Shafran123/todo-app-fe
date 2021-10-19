import { GET_TODO_LIST } from "../actions/config";


const initialState = {
    todo_list: [],
};

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TODO_LIST:
            return { ...state, todo_list: action.payload };


        default:
            return state;
    }

}
