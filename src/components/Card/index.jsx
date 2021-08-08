import { Drink, Figure, Img, Info } from './styles'

const Card = ({ data }) => {
  const { strDrinkThumb, strDrink, idDrink, strAlcoholic, strGlass } = data
  return (
    <Drink>
      <Figure>
        <Img src={strDrinkThumb || "https://via.placeholder.com/500x500.png?text=Image+unavailable"} />
      </Figure>
      <Info>

        <small>ID: {idDrink}</small>
        <h3>{strDrink}</h3>
        <p>Type: {strAlcoholic}</p>
        <p>Glass: {strGlass}</p>
      </Info>
    </Drink>
  )
}

export default Card;