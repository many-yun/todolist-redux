import styled from 'styled-components';

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   background: #ffe3db;

   input {
      outline-style: none;
      border: none;
   }
`;

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;
