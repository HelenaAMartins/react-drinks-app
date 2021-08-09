import { useEffect, useState } from 'react'

import { Figure, DrinkInfo, DrinkDetails, DrinkIngredients, IngredientsList, IngredientsItem, DrinkPreparation } from './styles'


const DrinkDetail = ({ data }) => {
  const [ingredientList, setIngredientList] = useState([])
  const {
    strDrink,
    idDrink,
    strAlcoholic,
    strCategory,
    strDrinkThumb,
    strGlass,
    strInstructions,
  } = data

  const getIngredients = () => {
    const ingredients = []

    for (let i = 1; i < 15; i++) {
      const ingredient = data[`strIngredient${i}`];
      const measure = data[`strMeasure${i}`];

      if (ingredient !== null && ingredient !== "" && measure !== null && measure !== "") {
        ingredients.push({
          ingredient,
          measure
        })
      }
    }

    setIngredientList(ingredients)
  
  }

  useEffect(() => getIngredients(), [data])

  return (
    <>
      <DrinkDetails>
        <Figure> <img alt={strDrink} src={strDrinkThumb} /> </Figure>
        <DrinkInfo>
          <small>ID: {idDrink}</small>
          <h2>{strDrink}</h2>
          <p>Type: {strAlcoholic}</p>
          <p>Category: {strCategory}</p>
          <p>Glass type: {strGlass}</p>
        </DrinkInfo>
      </DrinkDetails>
      <DrinkIngredients>
        <h3>Ingredients</h3>
        <IngredientsList>
          {ingredientList && ingredientList.map((item, i) => {
            return (<IngredientsItem key={`ingredient_${i}`}>
              <div>{item.ingredient}</div>
              <div>{item.measure}</div>
            </IngredientsItem>)
          })}
        </IngredientsList>
      </DrinkIngredients>
      <DrinkPreparation>
        <h3>Way of Preparation</h3>
        <p>{strInstructions}</p>
      </DrinkPreparation>
    </>
  )
}

export default DrinkDetail;