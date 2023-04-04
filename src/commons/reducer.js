import { ADD_TODO, DEL_TODO, TOGGLE_TODO, UPDATE_TODO } from './actions';

const initialState = {
   todos: [],
};

export const reducer = (state = initialState, action) => {
   if (action.type === ADD_TODO) {
      return {
         todos: [...state.todos, action.todo],
      };
   } else if (action.type === DEL_TODO) {
      return {
         todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };
   } else if (action.type === TOGGLE_TODO) {
      return {
         todos: [...state.todos],
      };
   } else if (action.type === UPDATE_TODO) {
   } else {
      return state;
   }
};
