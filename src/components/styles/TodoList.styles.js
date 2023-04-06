import styled from 'styled-components';

export const Container = styled.div`
   width: 400px;
   padding: 0px 30px;

   display: flex;
   flex-direction: column;

   background: white;

   border-radius: 15px;
   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);

   & > div:first-child {
      border-top: 1px solid #eee;
   }
`;
