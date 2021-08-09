import styled from 'styled-components'
import { colors } from '../../styles/variables';


export const Drink = styled.div`
background-color: ${colors.pinkLight};
border-radius: 5px;
overflow: hidden;
cursor: pointer;

&:hover{
  img {
    transform: scale(1.1);
  }
}

p {
  font-size: 20px;
}

`
export const Figure = styled.figure`
height: 300px;
overflow: hidden;

`

const imgSize = '100%';
export const Img = styled.img`
object-fit: cover;
width: ${imgSize};
height: ${imgSize};
transition: all 0.5s;
`

export const Info = styled.div`
padding: 15px;
`