import styled from "styled-components";
import { colors } from "../../styles/variables";

export const DrinkDetails = styled.div`
display: grid;
grid-gap: 15px;

@media screen and (min-width:768px){
  grid-template-columns: 1fr 1fr;

}

`
export const Figure = styled.figure`
width: 100%;

img {
  width: 100%;
}
`

export const DrinkInfo = styled.div`

small{
  color: ${colors.doveGrey}
}

`
export const DrinkIngredients = styled.div`
padding: 40px 0;


`
export const IngredientsList = styled.ul`
margin: 20px 0;
  
`
export const IngredientsItem = styled.li`
background-color: ${colors.cabernet};
color: ${colors.pinkLight};
display: grid;
margin-bottom: 2px;

div{
  padding: 10px 20px;

}


&:nth-child(even){
  background-color: ${colors.pinkLight};
  color: ${colors.cabernet};
}


@media screen and (min-width: 768px){
    grid-template-columns: auto 200px;
  
  div:nth-child(2){
    border-left: 1px solid ${colors.englishRose};
  }
}
`

export const DrinkPreparation = styled.div`
  width: 100%;
  h3{
    margin-bottom: 10px;
  }

`