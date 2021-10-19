import { GET_TODO_LIST } from "./config";

export const getTodoList = (todo, callback) => (dispatch) => {
    return {
        type: GET_TODO_LIST,
        payload: todo
    };
}