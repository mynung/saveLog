

const dummyData = [
  {
    id: 1,
    type: "expense",
    title: "돈까스 먹방",
    category: "식비",
    amount: 12000,
    date: "2026-07-21",
  },
  {
    id: 2,
    type: "income",
    title : "알바비",
    category: "월급",
    amount: 3000000,
    date: "2026-07-21",
  },
];


export const initialState = {
  transactions: dummyData,
  totalAmount : 0,
};

export const transactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        totalAmount: state.totalAmount + (action.payload.type === "expense" ? action.payload.amount * -1 : action.payload.amount)
      };
    case "DELETE_TRANSACTION":
        return{
            ...state,
            transactions : state.transactions.filter((transaction)=>transaction.id !== action.payload.id),
            totalAmount : state.totalAmount + (action.payload.type === "expense" ? action.payload.amount * -1 : action.payload.amount)
        }
    case "UPDATE_EXPENSE":
        return{
            ...state,
            totalAmount : state.totalAmount - state.expenses.find((expense)=>expense.id === action.payload.id).amount + action.payload.amount,
            transactions : state.transactions.map((transaction)=>transaction.id === action.payload.id ? action.payload : transaction)
        }

    default:
      return state;
  }
};
