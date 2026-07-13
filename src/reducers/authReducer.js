export const initialState = {
  isLoggedIn: false,
  user: null,
  loading: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        loading: false,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: { ...action.payload, ...state.user },
        loading: false,
      };
    default:
      return state;
  }
};