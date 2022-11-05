import {api} from '../../boot/axios'

export const ActionCadastroCliente = ({dispatch, commit}, payload) => {
    console.log("ActionCadastroCliente", payload);
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