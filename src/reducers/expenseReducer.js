
const dummyData = {
  id: 1,
  title: "Dummy Expense",
  amount: 100,
  date: "2023-01-01",
  category: "Food",
  type: "expense",
};


export const initialState = {
  expenses: [dummyData],
  totalExpenses: 100,
  totalIncome: 0,
};

export const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        totalExpenses: state.totalExpenses + action.payload.amount,
      };
    case "DEL_EXPENSE":
        return{
            ...state,
            expenses : state.expenses.filter((expense)=>expense.id !== action.payload.id),
            totalExpenses : state.totalExpenses - action.payload.amount,
        }
    case "UPDATE_EXPENSE":
        return{
            ...state,
            totalExpenses : state.totalExpenses - state.expenses.find((expense)=>expense.id === action.payload.id).amount + action.payload.amount,
            expenses : state.expenses.map((expense)=>expense.id === action.payload.id ? action.payload : expense)
        }

    default:
      return state;
  }
};
