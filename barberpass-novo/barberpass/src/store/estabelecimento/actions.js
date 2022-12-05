import {api} from '../../boot/axios';
import { Connection } from "../../http/Connection";
import * as types from "./mutation-types";

export const ActionCadastroEstabelecimento = ({dispatch, commit}, payload) => {
  return new Promise((resolve, reject) => {
    Connection.post("/save/barber", {...payload})
    .then(response => 
      resolve()
    )
    .catch(error => {
      reject(error);
      console.log(error);
    });
  })
}

export const ActionCadastroServicos = ({dispatch, commit}, payload) => {
  return new Promise((resolve, reject) => {
    Connection.post("/save/barber-service", payload)
    .then(response => 
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
  return new Promise((resolve, reject) => {
    Connection.get('get/barber')
    .then(response => {
      dispatch("ActionSetBarbearia", response.data)
    }).catch(
      error => reject(error)
    )
  });
}

export const ActionGetServico = ({dispatch, commit}, payload) => {
  return new Promise((resolve, reject) => {
    Connection.get(`get/barber-service/${payload}`)
    .then(response => {
      dispatch("ActionSetServicos", response.data)
    }).catch(
      error => reject(error)
    )
  });
}

export const ActionSetBarbearia = ({ commit }, payload) => {
  commit(types.SET_BARBEARIA, payload);
};

export const ActionSetServicos = ({ commit }, payload) => {
  commit(types.SET_SERVICOS, payload);
};