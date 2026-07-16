import { createContext, useReducer } from "react";
import { expenseReducer, initialState } from "../reducers/expenseReducer";

export const ExpenseContext = createContext();

export default function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
}