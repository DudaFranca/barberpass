<template>
  <q-page class="container">
    <form @submit.prevent="login" class="q-mt-lg">
      <div class="col-12">
        <q-input
          ref="cpf"
          v-model="dados.cpf"
          label="CPF"
          outlined
          :rules="[(val) => (val && val.length > 0) || 'Preencha o seu CPF']"
          lazy-rules
          bg-color="secondary"
          mask="###.###.###-##"
        />
      </div>
      <div class="col-12">
        <q-input
          ref="senha"
          v-model="dados.senha"
          label="Senha"
          outlined
          
          :rules="[(val) => (val && val.length > 0) || 'Digite sua senha']"
          :type="isPwd ? 'password' : 'text'"
          lazy-rules
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
      <div id="buttons" class="q-mt-sm btn-padrao">
        <q-btn
          type="submit"
          class="botao"
          label="Entrar"
          :to="logado ? '/planos' : ''"
        />
      </div>
    </form>
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
            cpf: "",
            senha: "",
          },
          isPwd: true,
          logado: false
        }
    },
    computed: {
      logado() {
        if (this.logado) {
          return '/planos'
        }
      }
    },
    methods: {
      ...mapActions("cliente", ["ActionLoginCliente"]),

        login() {
          // this.ActionLoginCliente(this.login)
          if (this.dados.cpf == "126.726.304-02" && this.dados.senha == "123") {
            this.logado = true;
          }
        },
    }
}
</script>
