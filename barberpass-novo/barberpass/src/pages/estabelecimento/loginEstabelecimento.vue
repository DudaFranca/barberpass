<template>
  <q-page class="container">
    <form @submit.prevent="login" class="q-mt-lg">
      <div class="col-12">
        <q-input
          ref="cnpj"
          v-model="cnpj"
          label="CNPJ"
          outlined
          bg-color="secondary"
          mask="##.###.###/####-##"
        />
      </div>
      <div class="col-12 q-mt-lg">
        <q-input
          ref="senha"
          v-model="senha"
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
  </q-page>
</template>

<script>
export default {
    name: 'MainAccess',
    data () {
        return {
          cnpj: "",
          senha: "",
          isPwd: true,
        }
    },
    methods: {
        login() {
          if (this.cnpj == "29.914.685/0001-63" && this.senha == "123") {
            this.$router.push("/estabelecimento/cadastro/servicos")
          }
        }
    }
}
</script>
