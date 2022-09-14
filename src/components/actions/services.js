import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../../helpers/fetch";
import { types } from "../../types/types";

export const startLogin = (correo, passwd) => {
  return async (dispatch) => {
    // debugger;
    const resp = await fetchSinToken(
      "/api/auth/login",
      { correo, passwd },
      "POST"
    );
    const body = await resp.json();
    // debugger;
    if (resp.ok) {
      localStorage.setItem("token", body.token);
      // debugger;

      dispatch(
        login({
          uid: body.usuario.id,
          name: body.usuario.correo,
          rol: body.usuario.id_rol,
        })
      );
      window.location.reload();
      // history.push("/home");
    } else {
      Swal.fire("Error", body.errors[0].msg, "error");
    }
  };
};

export const postPersonaNatural = (
  nomNat,
  tipDoc,
  docNat,
  correo,
  telNat,
  ciuNat,
  passwd
) => {
  return async (dispatch) => {
    console.log(nomNat, tipDoc, docNat, correo, telNat, ciuNat, passwd);
    const url = `http://localhost:8000/api/auth/registerNatural`;
    try {
      const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          nomNat: nomNat,
          tipDoc: tipDoc,
          docNat: docNat,
          correo: correo,
          telNat: telNat,
          ciuNat: ciuNat,
          passwd: passwd,
        }),
        headers: {
          "Content-type": "application/json",
          // "x-token": localStorage.getItem("token"),
        },
      });
      const respuesta = await resp.json();

      if (resp.ok) {
        console.log(respuesta);
        Swal.fire({
          icon: "success",
          title: "Envío de validación satisfactorio.",
          showConfirmButton: false,
          timer: 2000,
        });
        return respuesta;
      } else {
        // throw await resp.json();
        console.log(respuesta.msg);
        if (respuesta.msg === undefined) {
          Swal.fire("Error", respuesta.errors[0].msg, "error");
        } else {
          Swal.fire("Error", respuesta.msg, "error");
        }
      }
    } catch (error) {
      console.log(error);
      console.log("object");
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
