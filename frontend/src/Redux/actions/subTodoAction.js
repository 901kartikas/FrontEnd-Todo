import * as constans from '../constant'

export const getCategoryById = (todoCategoryID, onSuccess) => ({
    type: constans.API,
    payload: {
        method : 'GET',
        url : `/api/TodoList/${todoCategoryID}`,
        postProcessSuccess: onSuccess
    }
}) 

export const createSubTodo = (data, onSuccess, onError) => ({
    type: constans.API,
    payload: 'POST',
    url : '/api/TodoList',
    data, 
    success: (subTodo) => (AddSubTodo(subTodo)),
    postProcessError: onError, 
    postProcessSuccess: onSuccess,
})

const AddSubTodo = (subTodo) => ({
    type: constans.CREATE_SUB_TODO,
    payload : subTodo
})