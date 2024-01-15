import React, { createContext, useContext, useReducer } from "react";

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
      return { ...state, ...state.selectedItem, checkOut: false };

    default:
    //   console.log(error);
  }
};
function CardContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
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
