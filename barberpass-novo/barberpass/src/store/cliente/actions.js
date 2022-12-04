import { api } from '../../boot/axios';
import { Connection } from "../../http/Connection";
import * as types from "./mutation-types";

export const ActionCadastroCliente = ({dispatch, commit}, payload) => {
    return new Promise((resolve, reject) => {
      Connection.post("/save/user", {...payload})
      .then(response => 
        resolve(response.data)
      )
      .catch(error => {
        reject(error);
        console.log(error);
      });
    })
}

// export const ActionStateCadastroCliente = ({commit}, payload) => {
//   commit(types.SET_STATECADASTROCLIENTE, payload);
// }

export const ActionBuscaCep = ({dispatch, commit}, payload) => {
  return new Promise((resolve, reject) => {
    api.get(`https://viacep.com.br/ws/${ payload }/json/`).then(
      response => resolve(response.data)
    ).catch(
      error => reject(error)
    )
  });
}

export const ActionLoginCliente = ({dispatch, commit}, payload) => {
  return new Promise((resolve, reject) => {
    Connection.post("/login", {...payload})
      .then(response => 
        resolve(response.data)
      )
      .catch(error => {
        reject(error);
        console.log(error);
      });
  });
}