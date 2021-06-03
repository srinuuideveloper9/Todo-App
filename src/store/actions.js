export const ADD_TODO = 'Add Todo';
export const DELETE_TODO = 'Delete Todo';
export const EDIT_TODO = 'Edit Todo';

export const addTodo = (payload) => ({type: ADD_TODO, payload});
export const editTodo = (payload) => ({type: EDIT_TODO, payload});
export const deleteTodo = (payload) => ({type: DELETE_TODO, payload});
