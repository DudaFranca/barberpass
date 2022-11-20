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

// export const ActionDoLogin = ({ dispatch }, payload) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let { login, senha } = payload;
//       let response = await Connection.post("login", { login, senha });

//       if (!response.data.error) {
//         Connection.defaults.headers.Authorization = `Bearer ${response.data.access_token}`;
//         dispatch("ActionSetUser", response.data.user);
//         dispatch("ActionSetToken", response.data.access_token);
//         dispatch("ActionSetTokenTimeExpire", response.data.expires_in);
//         dispatch("ActionDisableModalNotLogged", false);
//         Sentry.setUser({
//           id: response.data.user.id,
//           email: response.data.user.email
//         });
//       }

//       resolve(response);
//     } catch (err) {
//       reject(err);
//     }
//   });
// };