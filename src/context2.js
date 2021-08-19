import React, { createContext, useReducer, useContext } from "react";
import reducer2, { initialState2 } from "./reducer2";

const ToDosContext2 = createContext();

const ToDosProvider2 = ({ children }) => {
  const [state2, dispatch2] = useReducer(reducer2, initialState2);
  return (
    <ToDosContext2.Provider value={{ state2, dispatch2 }}>
      {children}
    </ToDosContext2.Provider>
  );
};

export const useState2 = () => {
  const { state2 } = useContext(ToDosContext2);
  return state2;
};

export const useDispatch2 = () => {
  const { dispatch2 } = useContext(ToDosContext2);
  return dispatch2;
};

export default ToDosProvider2;
