import React, { createContext, useContext, useReducer } from "react";
import { pluser } from "../helper/help";
const InfoCardContext = createContext();
const initialState = {
  selectedItem: [],
  counterItem: 0,
  total: 0,
  checkOut: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
      }
      return { ...state, ...pluser(state.selectedItem), checkOut: false };
    case "REMOVE":
      const newSelectedItem = state.selectedItem.filter((item) => {
        item.id !== action.payload.id;
      });
      return {
        ...state,
        selectedItem: [...newSelectedItem],
        ...pluser(newSelectedItem),
      };
    case "INCREASE":
      const index = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[index].quantity++;
      return { ...state, ...pluser(state.selectedItem) };
    case "DECREASE":
      const indev = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[indev].quantity--;
      return { ...state, ...pluser(state.selectedItem) };

    default:
      break;
  }
};
function CardContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  return (
    <>
      <InfoCardContext.Provider value={{ state, dispatch }}>
        {children}
      </InfoCardContext.Provider>
    </>
  );
}

const useCard = () => {
  const result = useContext(InfoCardContext);
  return result;
};
export default CardContext;
export { useCard };
