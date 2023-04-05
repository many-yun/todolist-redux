import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';

import * as S from './styles/TodoItem.styles';
import { delTodo, toggleTodo, updateTodo } from '../commons/actions';

// 목록 하나의 컴포넌트
const TodoItem = ({ todo }) => {
   const dispatch = useDispatch();
   const { id, title, isComplete } = todo;

   const [readOnly, setReadOnly] = useState(true);

   const updateInput = useRef();

   const handleClick = () => {
      dispatch(delTodo(id));
   };

   const toggleClick = () => {
      readOnly ? dispatch(toggleTodo(id)) : dispatch(toggleTodo(id)) && setReadOnly(true);
   };

   const updateClick = () => {
      if (!isComplete) {
         readOnly ? setReadOnly(false) : setReadOnly(true);
         updateInput.current.focus();
      }
   };

   return (
      <S.Container>
         <S.TextColumn>
            <div>
               <S.Text
                  readOnly={readOnly}
                  style={isComplete === true ? { textDecoration: 'line-through', color: '#ccc' } : {}}
                  defaultValue={title}
                  ref={updateInput}
               />
            </div>
            <S.M onClick={updateClick} style={isComplete === true ? { color: '#ccc' } : {}}>
               {readOnly ? '수정' : '완료'}
            </S.M>
            <S.O onClick={toggleClick} style={isComplete === true ? { color: '#ccc' } : {}}>
               {'완료'}
            </S.O>
            <S.X onClick={handleClick}>{'삭제'}</S.X>
         </S.TextColumn>
      </S.Container>
   );
};

export default TodoItem;
