export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let id = 1;

export const addTodo = (todo) => {
   return {
      type: ADD_TODO,
      todo: {
         id: id++,
         title: todo.title,
         isComplete: todo.isComplete,
      },
   };
};

export const delTodo = (id) => {
   return {
      type: DEL_TODO,
      id,
   };
};

export const updateTodo = (id, title) => {
   return {
      type: UPDATE_TODO,
      todo: {
         id: id,
         title: title,
      },
   };
};

export const toggleTodo = (id) => {
   return {
      type: TOGGLE_TODO,
      id,
   };
};
