import { useState } from 'react'

import { Section, Container } from '../../styles/shared'
import { Box, Button, Input} from "./styles";

const Form = ({ handleData }) => {
  const [drinkName, setDrinkName] = useState('')
  return (
    <Section>
      <Container>
        <Box>

        <Input placeholder="Enter a drink name" type="text" onChange={(e) => setDrinkName(e.target.value)} />
        <Button disabled={drinkName === ''} onClick={() => handleData(drinkName)}>Search</Button>
        </Box>
      </Container>
    </Section>

  )
}

export default Form;
