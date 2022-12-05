import * as types from "./mutation-types";

export default {
    [types.SET_USUARIOSAGENDADOS](state, payload) {
        state.usuariosAgendados = payload;
    },
}
