import React from 'react';

import * as S from './styles/TodoList.styles.js';

import TodoItem from './TodoItem.js';
import { useSelector } from 'react-redux';

// Todo Item을 맵핑한 목록
const TodoList = () => {
   const todos = useSelector((state) => state.todos);
   console.log(todos);

   return (
      <S.Container>
         {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
         ))}
      </S.Container>
   );
};

export default TodoList;
