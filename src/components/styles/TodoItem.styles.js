import styled from 'styled-components';
import { HiPencilSquare } from 'react-icons/hi2';
import { MdDeleteOutline, MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

export const Container = styled.div`
   padding: 25px 0;

   display: flex;
   justify-content: flex-start;
   align-items: center;

   border-radius: 4px;

   border-bottom: 1px solid #eee;
`;

export const TextColumn = styled.div`
   width: 100%;

   justify-content: space-between;
   align-items: center;
   vertical-align: baseline;
   position: relative;
`;

export const TextWrapper = styled.div`
   width: calc(100% - 100px);
   display: inline-block;
`;

export const Text = styled.input`
   width: 100%;
   font-size: 1rem;
   margin: 0 8px;
`;

export const Buttons = styled.div`
   position: absolute;
   right: 0;
   top: 0;
`;

export const PencilSquare = styled(HiPencilSquare)`
   font-size: 1.3rem;
   cursor: pointer;
`;

export const CheckBox = styled(MdOutlineCheckBox)`
   font-size: 1.7rem;
   color: #999;
   margin-bottom: -9px;
   cursor: pointer;
`;

export const UnCheckBox = styled(MdOutlineCheckBoxOutlineBlank)`
   font-size: 1.7rem;
   color: #999;
   margin-bottom: -9px;
   cursor: pointer;
`;

export const X = styled(MdDeleteOutline)`
   font-size: 1.3rem;
   cursor: pointer;
   padding-left: 15px;
   color: red;
`;
