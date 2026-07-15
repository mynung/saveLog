export const initialState = {
  isLoggedIn: false,
  user: null,
  users: [
    {
      email: "alsghd72@gmail.com",
      name: "김민홍",
      password: "1937",
    },
  ],
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
        user: { ...state.user, ...action.payload },
        loading: false,
      };
    case "REGISTER":
      return {
        ...state,
        isLoggedIn: false,
        users: [...state.users, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};
