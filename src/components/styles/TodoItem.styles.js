import styled from 'styled-components';

export const Container = styled.div`
   margin: 10px 10px;
   padding: 10px 10px;

   display: flex;
   justify-content: flex-start;
   align-items: center;

   border-radius: 4px;
`;

export const TextColumn = styled.div`
   width: 100%;

   justify-content: space-between;
   align-items: center;

   & > div {
      width: calc(100% - 150px);
      display: inline-block;
   }
`;

export const Text = styled.input`
   margin: 0 8px;
`;

export const M = styled.button`
   color: blue;
   border: none;
   background: white;
   width: 50px;
   padding: 0;

   font-size: 1rem;

   cursor: pointer;
`;

export const O = styled.button`
   color: green;
   border: none;
   background: white;
   width: 50px;
   padding: 0;

   font-size: 1rem;

   cursor: pointer;
`;

export const X = styled.button`
   color: red;
   border: none;
   background: white;
   width: 50px;
   padding: 0;

   font-size: 1rem;

   cursor: pointer;
`;
