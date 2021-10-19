import axios from "axios";
import { GET_TODO_LIST } from "./config";

export const getTodoList = (callback) => (dispatch) => {
    return axios({
        url: 'https://jsonplaceholder.typicode.com/todos',
        timeout: 20000,
        method: 'get',
        responseType: 'json'
    }).then(res => {
        console.log(res);
        dispatch({
            type: GET_TODO_LIST,
            payload: res.data,
        });

        callback(true)
    }).catch(err => {
        console.log(err);
    })
}
