import Swal from "sweetalert2";

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
    const url = `${process.env.REACT_APP_MI_VARIABLE_DE_ENTORNO}/api/auth/registerNatural`;
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
export const postEmpresa = (
  empUsu,
  nitEmp,
  nomCon,
  correo,
  dirEmp,
  ciuEmp,
  telEmp,
  passwd
) => {
  return async (dispatch) => {
    console.log(empUsu, nitEmp, nomCon, correo, dirEmp, ciuEmp, telEmp, passwd);
    const url = `${process.env.REACT_APP_MI_VARIABLE_DE_ENTORNO}/api/auth/registerCompany`;
    try {
      const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          empUsu: empUsu,
          nitEmp: nitEmp,
          nomCon: nomCon,
          correo: correo,
          dirEmp: dirEmp,
          ciuEmp: ciuEmp,
          telEmp: telEmp,
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
