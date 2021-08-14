import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const Grid = styled.div`
display: grid;
grid-gap: 10px;

@media screen and (min-width: 550px){
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (min-width: 768px){
  grid-template-columns: repeat(3, 1fr);
  
}

@media screen and (min-width: 1024px){
  grid-template-columns: repeat(4, 1fr);
}
`

export const StartPic = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
margin: 0 auto;
`

export const Footer = styled.footer`
text-align:center;
font-weight: 400;
font-size: 14px;
color: ${colors.text};

a{
  color: ${colors.cabernet};
  text-decoration: underline;
}

`

export const DrinkError = styled.div`
display: flex;
flex-direction: column;

h3, p{
  text-align: center;
}
`
