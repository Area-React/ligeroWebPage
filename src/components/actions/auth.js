import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../../helpers/fetch";
import { types } from "../../types/types";

export const startLogin = (correo, passwd) => {
  return async (dispatch) => {
    const resp = await fetchSinToken(
      "/api/auth/login",
      { correo: correo, passwd: passwd },
      "POST"
    );
    const body = await resp.json();
    console.log(body);
    console.log("validando fetch");

    if (resp.ok) {
      localStorage.setItem("token", body.token);
      // debugger;
      dispatch({
        type: types.login,
        payload: {
          uid: body.usuario.id,
          name: body.usuario.correo,
          rol: body.usuario.id_rol,
        },
      });
      console.log("Body::", body.usuario.correo);
    } else {
      console.log(body.errors);
      Swal.fire("Error", body.errors[0], "error");
    }
  };
};

export const renewToken = () => {
  return async (dispatch) => {
    // debugger;

    const resp = await fetchConToken("/api/auth/renew");
    const body = await resp.json();
    if (resp.ok) {
      console.log(body);
      localStorage.setItem("token", body.token);
      // debugger;
      dispatch({
        type: types.login,
        payload: {
          uid: body.user.id,
          name: body.user.email,
          rol: body.user.id_rol,
        },
      });
    } else {
    }
  };
};

const login = (user) => ({
  type: types.login,
  payload: user,
});

export const startLogout = () => {
  return async (dispatch) => {
    // debugger;
    localStorage.removeItem("token");
    dispatch(
      login({
        uid: null,
        name: null,
      })
    );
  };
};
