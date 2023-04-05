import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './styles/InputForm.styles';
import { addTodo } from '../commons/actions';

// 인풋창 컴포넌트
const InputForm = () => {
   const dispatch = useDispatch();

   // 리덕스를 사용한다고 해서 모든 state를 리덕스로 관리할 필요 없음
   const [text, setText] = useState('');

   const handleChange = (e) => {
      const { value } = e.target;
      setText(value);
   };

   const handleClick = () => {
      const todo = {
         title: text,
         isComplete: false,
      };

      text !== '' ? dispatch(addTodo(todo)) : alert('내용을 입력해 주세요!');
      setText('');
   };

   const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         handleClick();
      }
   };

   return (
      <S.Container>
         <S.InputBox
            type="text"
            placeholder="할 일을 입력하세요"
            onChange={handleChange}
            value={text}
            onKeyDown={handleKeyPress}
         />
         <S.Button onClick={handleClick}>추가하기</S.Button>
      </S.Container>
   );
};

export default InputForm;
