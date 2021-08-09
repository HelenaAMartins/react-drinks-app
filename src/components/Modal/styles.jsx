import styled from "styled-components";
import { colors } from '../../styles/variables';



export const Close = styled.span`
background-color: ${colors.cabernet};
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
right: -5px;
top: -10px;
cursor: pointer;
color: ${colors.whiteGray};
border-radius: 50%;
`

export const ModalWrapper = styled.div`
position: fixed;
top: 0;
height: 100%;
width: 100%;
background-color: rgba(0, 0, 0, 0.7);
visibility: hidden;
opacity: 0;
transition: all 0.5s;
z-index: 5;
padding: 20px 0;

&.show{
  visibility: visible;
  opacity: 1;
}
`

export const ModalClose = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
z-index:6;
`

export const ModalBody = styled.div`
position: relative;
width: 80%;
height: 100%;
max-width: 800px;
margin: 0 auto;
z-index: 7;
`

export const ModalContent = styled.div`
overflow: auto;
background-color: #fff;
height: 90%;
padding: 10px;
width: 100%;

@media (min-width: 768px){
  padding: 50px;

}
`
