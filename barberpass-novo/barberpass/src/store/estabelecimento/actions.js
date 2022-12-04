import {api} from '../../boot/axios';
import { Connection } from "../../http/Connection";
import types from "./mutation-types";

export const ActionCadastroEstabelecimento = ({dispatch, commit}, payload) => {
  return new Promise((resolve, reject) => {
    Connection.post("/save/barber", {...payload})
    .then(response => 
      console.log(response.data),
      resolve()
    )
    .catch(error => {
      reject(error);
      console.log(error);
    });
  })
}

export const ActionBuscaCep = ({dispatch, commit}, payload) => {
  return new Promise((resolve, reject) => {
    api.get(`https://viacep.com.br/ws/${ payload }/json/`).then(
      response => resolve(response.data)
    ).catch(
      error => reject(error)
    )
  });
}

export const ActionGetBarbearia = ({dispatch, commit}, payload) => {
  console.log('action');
  return new Promise((resolve, reject) => {
    Connection.get('get/barber')
    .then(response => {
      console.log(response);
      dispatch("ActionSetBarbearia", response.data)
    }).catch(
      error => reject(error)
    )
  });
}

export const ActionSetBarbearia = ({ commit }, payload) => {
  console.log(123);
  commit(types.SET_BARBEARIA, payload);
};