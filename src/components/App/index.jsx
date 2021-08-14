import { useState } from "react";
import useAxiosHook from "axios-hook-library";

import Card from "../Card";
import Form from "../Form";
import Modal from "../Modal";

import GlobalStyles from "../../styles/globals";
import { Grid, StartPic, Footer, DrinkError } from "./styles";
import { Main, Section, Container } from "../../styles/shared";
import drinkImage from "../../assets/img/drinkMain.png";
import drinkImageError from "../../assets/img/drinkImageError.png";
import mussumImg from "../../assets/img/drinkImageMussum.png";
import loadImg from "../../assets/img/loading.gif";

const App = () => {
  const [drinkId, setDrinkId] = useState(null);
  const [easterEgg, setEasterEgg] = useState("");
  const { isLoading, rspData, hasError, fetchData } = useAxiosHook();
  const easterEggList = ["cachaça", "pinga", "aguardente", "cana"];
  //Creating function to get API data
  const getDrinks = (value) => {
    setEasterEgg(value.toLowerCase());
    fetchData(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`,
      "GET"
    );
  };

  //Creating function to handle selected drink id
  const getDrinkId = (value) => {
    setDrinkId(value);
  };

  return (
    <>
      <GlobalStyles />
      <Main>
        <Modal drinkId={drinkId} />
        <Form handleData={getDrinks} />
        <Section>
          <Container>
            {rspData.data && rspData.data.drinks != null ? (
              <Grid>
                {rspData.data &&
                  rspData.data.drinks.map((drink) => {
                    return (
                      <Card
                        data={drink}
                        key={drink.idDrink}
                        handleData={getDrinkId}
                      />
                    );
                  })}
              </Grid>
            ) : (
              <StartPic>
                {hasError || (rspData.data && rspData.data.drinks === null) ? (
                  <DrinkError>
                    <img
                      src={
                        easterEggList.includes(easterEgg)
                          ? mussumImg
                          : drinkImageError
                      }
                      alt="Drawing of a broken glass"
                    />
                    <h3>Ops, We are out of this drink.</h3>
                    <p>Please, look for another one.</p>
                  </DrinkError>
                ) : (
                  <img
                    src={isLoading ? loadImg : drinkImage}
                    alt="Drawing of a drink"
                  />
                )}
              </StartPic>
            )}
          </Container>
        </Section>
      </Main>
      <Footer>
        <Container>
          <p>
            Development, drawings and icons by{" "}
            <a
              href="https://github.com/HelenaAMartins"
              rel="noopener noreferrer"
              target="_blank"
            >
              Helena Martins
            </a>
          </p>
        </Container>
      </Footer>
    </>
  );
};

export default App;
