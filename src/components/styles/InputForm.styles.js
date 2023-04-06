import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const InputBox = styled.input`
   width: 295px;
   height: 40px;
   margin: 10px 10px 10px 0;

   border-radius: 15px;
   font-size: 1.2rem;

   background: white;
   padding: 5px 25px;
   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
   width: 100px;
   height: 50px;

   font-size: 1.2rem;

   background: #eaa290;

   border: none;
   border-radius: 15px;

   color: white;

   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);

   cursor: pointer;
`;
