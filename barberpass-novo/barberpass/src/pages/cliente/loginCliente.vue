<template>
  <q-page class="container">
    <form @submit.prevent="login" class="q-mt-lg">
      <div class="col-12">
        <q-input
          ref="login"
          v-model="dados.login"
          label="Login"
          outlined
          bg-color="secondary"
        />
      </div>
      <div class="col-12 q-mt-md">
        <q-input
          ref="senha"
          v-model="dados.senha"
          label="Senha"
          outlined
          :type="isPwd ? 'password' : 'text'"
          bg-color="secondary"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            ></q-icon>
          </template>
        </q-input>
      </div>
      <div id="buttons" class="q-mt-lg btn-padrao">
        <q-btn
          type="submit"
          class="botao"
          label="Entrar"
        />
      </div>
    </form>
    <div class="q-mt-lg" style="text-align: center;">
      <q-btn flat class="botao-voltar" label="Voltar" to="/cliente" />
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    name: 'MainAccess',
    data () {
        return {
          dados: {
            id: 10,
            login: "",
            senha: "",
          },
          isPwd: true,
          logado: false
        }
    },
    methods: {
      login() {
          if (this.dados.login == "duda" && this.dados.senha == "123") {
            this.$router.push('/cliente/planos')
          }
        },
    }
}
</script>
