import * as constants from '../constant'

export const fetchAllTodo = () => ({
    type : constants.API,
    payload: {
        methode : 'GET',
        url : '/api/TodoCategory',
        success : (response) => (setAllTodo(response))
    }
})

export const CreateTodo = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/api/TodoCategory',
        data, 
        succes: (todo) => (addTodo(todo)),
        postProcessError : onError,
        postProcessSuccess : onSuccess,
    }
})

const addTodo = (todo) => ({
    type : constants.CREATE_TODO,
    payload : todo
})


const setAllTodo = (data) => ({
    type : constants.FETCH_ALL_TODO,
    payload: data
})