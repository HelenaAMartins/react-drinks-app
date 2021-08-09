import styled from 'styled-components'
import { colors } from '../../styles/variables';

export const Box = styled.div`
background-color: ${colors.pinkLight};
padding: 20px;
max-width: 600px;
width: 100%;
margin: 80px auto 30px;
display: grid;
border-radius: 5px;
grid-gap: 10px;

@media screen and (min-width:500px){
  grid-template-columns: auto 80px;
  
}
`

export const Button = styled.button`
background-color: ${colors.cabernet};
color: ${colors.white};
padding: 5px 15px;
border-radius: 5px;
cursor: pointer;
transition: all 0.5s;

&:disabled{
  opacity: 0.5;
  cursor: initial;
}
`

export const Input = styled.input`
width: 100%;
padding: 8px;
border-radius: 5px;

`
