import {api} from '../../boot/axios'

export const ActionCadastroEstabelecimento = ({dispatch, commit}, payload) => {
    console.log("ActionCadastroEstabelecimento", payload);
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