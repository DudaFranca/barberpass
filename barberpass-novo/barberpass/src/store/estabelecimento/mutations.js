import * as types from "./mutation-types";

export default {
  [types.SET_BARBEARIA](state, payload) {
    state.barbearias = payload;
  },
  
  [types.SET_SERVICOS](state, payload) {
    state.servicos = payload;
  },
}


