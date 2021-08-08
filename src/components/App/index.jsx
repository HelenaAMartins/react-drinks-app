import { useState } from 'react'
import useAxiosHook from 'axios-hook-library'

import Card from '../Card'
import { Grid } from './styles'

import GlobalStyles from '../../styles/globals'
import { Main, Section, Container } from '../../styles/shared'

const App = () => {
  const [drinkName, setDrinkName] = useState('')
  const { rspData, fetchData } = useAxiosHook()
  console.log(rspData);
  return (
    <>
      <GlobalStyles />
      <Main>
        <Section>
          <Container>
            <form>
              <input type="text" onChange={(e) => setDrinkName(e.target.value)} />
            </form>
            <button disabled={drinkName === ''} onClick={() => fetchData(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`, 'GET')}>Click</button>
          </Container>
        </Section>
        <Section>
          <Container>
            <Grid>
              {rspData.data && rspData.data.drinks.map((drink) => {
                return <Card data={drink} key={drink.idDrink} />
              })}
            </Grid>
          </Container>
        </Section>
      </Main>
    </>
  );
}

export default App;