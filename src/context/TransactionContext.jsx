import { createContext, useReducer } from "react";
import { transactionReducer, initialState } from "../reducers/transactionReducer";

export const TransactionContext = createContext();

export default function TransactionProvider({ children }) {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
}