import axios from "axios";
import { GET_TODO_LIST } from "./config";


const BASE_URL = 'https://todo-app-aefda.du.r.appspot.com'

export const getTodoList = ( callback) => (dispatch) => {
        
    return axios({
        url: `${BASE_URL}/api/v1/get-todo-list`,
        timeout: 20000,
        method: 'get',
        responseType: 'json'
    }).then(res => {
        console.log(res.data.todoArray);
        dispatch({
            type: GET_TODO_LIST,
            payload: res.data.todoArray,
        });

        callback(true)
    }).catch(err => {
        console.log(err);
        callback(false)
    })
  
}



export const addTodo = (body, callback) => (dispatch) => {
    return axios({
        url: `${BASE_URL}/api/v1/add-todo`,
        timeout: 20000,
        method: 'post',
        data:body,
        responseType: 'json'
    }).then(res => {
        console.log(res);
        // dispatch({
        //     type: GET_TODO_LIST,
        //     payload: res.data,
        // });

        callback(true)
    }).catch(err => {
        console.log(err);
        callback(false)
    })
}



export const editTodo = (body, callback) => (dispatch) => {
    return axios({
        url: `${BASE_URL}/api/v1/edit-todo?id=${body.id}`,
        timeout: 20000,
        method: 'put',
        data:body,
        responseType: 'json'
    }).then(res => {
        console.log(res);
        // dispatch({
        //     type: GET_TODO_LIST,
        //     payload: res.data,
        // });

        callback(true)
    }).catch(err => {
        console.log(err);
        callback(false)
    })
}


export const deleteTodo = (body, callback) => (dispatch) => {
    return axios({
        url: `${BASE_URL}/api/v1/delete-todo?id=${body.id}`,
        timeout: 20000,
        method: 'delete',
        responseType: 'json'
    }).then(res => {
        console.log(res);
        callback(true)
    }).catch(err => {
        console.log(err);
        callback(false)
    })
}