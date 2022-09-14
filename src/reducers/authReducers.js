import { types } from "../types/types";

const intialState = {
  id: 0,
  email: "",
  rol: 0,
};

export const authReducers = (state = intialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        id: action.payload.uid,
        email: action.payload.name,
        rol: action.payload.rol,
      };
    case types.logout:
      return {};

    default:
      return state;
  }
};
