import { types } from "../types/types";

const intialState = {
  id: 0,
  correo: "",
  id_rol: 0,
};

export const authReducers = (state = intialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        id: action.payload.uid,
        correo: action.payload.name,
        id_rol: action.payload.rol,
      };
    case types.logout:
      return {};

    default:
      return state;
  }
};
