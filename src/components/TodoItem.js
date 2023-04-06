import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { delTodo, toggleTodo, updateTodo } from '../commons/actions';

import * as S from './styles/TodoItem.styles';

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

   const handleKeyPress = (e) => {
      if (e.key === 'Enter' && !readOnly) {
         updateClick();
      }
   };

   return (
      <S.Container>
         <S.TextColumn>
            <S.UnCheckBox
               onClick={toggleClick}
               style={isComplete === true ? { display: 'none' } : { display: 'inline-block' }}
            />
            <S.CheckBox
               onClick={toggleClick}
               style={isComplete === true ? { display: 'inline-block' } : { display: 'none' }}
            />
            <S.TextWrapper>
               <S.Text
                  readOnly={readOnly}
                  style={
                     isComplete === true
                        ? { textDecoration: 'line-through', color: '#ccc' }
                        : !readOnly
                        ? { fontWeight: 'bold' }
                        : {}
                  }
                  defaultValue={title}
                  ref={updateInput}
                  onKeyDown={handleKeyPress}
               />
            </S.TextWrapper>
            <S.Buttons>
               <S.PencilSquare
                  onClick={updateClick}
                  style={
                     isComplete === true
                        ? { color: '#aaa', cursor: 'default' }
                        : readOnly
                        ? { color: '#333' }
                        : { color: '#999' }
                  }
               />
               <S.X onClick={handleClick} />
            </S.Buttons>
         </S.TextColumn>
      </S.Container>
   );
};

export default TodoItem;
