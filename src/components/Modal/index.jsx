import { useEffect, useState } from "react";
import useAxiosHook from "axios-hook-library";

import DrinkDetail from "../DrinkDetail";
import {
  ModalWrapper,
  ModalContent,
  Close,
  ModalBody,
  ModalClose,
} from "./styles";

const Modal = ({ drinkId }) => {
  const [openModal, setOpenModal] = useState(false);
  const { rspData, fetchData } = useAxiosHook();

  useEffect(() => {
    if (drinkId) {
      //Creating function to get API data
      fetchData(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`,
        "GET"
      );
      setOpenModal(true);
    }
    /* eslint-disable-next-line */
  }, [drinkId]);

  return (
    <ModalWrapper className={openModal ? "show" : "hide"}>
      <ModalClose onClick={() => setOpenModal(!openModal)} />
      <ModalBody>
        <Close onClick={() => setOpenModal(!openModal)}>X</Close>
        <ModalContent>
          {rspData.data &&
            rspData.data.drinks.map((drink) => {
              return <DrinkDetail data={drink} key={drink.idDrink} />;
            })}
        </ModalContent>
      </ModalBody>
    </ModalWrapper>
  );
};

export default Modal;
