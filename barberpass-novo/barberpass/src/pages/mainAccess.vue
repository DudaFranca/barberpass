<template>
  <q-page class="container fundo">
    <div class="logo logo-grande">
      <img src="../../public/img/logo.svg" alt="">
    </div>
    <div class="btn-padrao">
      <q-btn class="login botao" label="Login" to="/login" />
      </div>
    <div class="q-mt-lg btn-padrao">
      <q-btn class="botao" label="Cadastre-se" to="/cadastro" />
    </div>
    <div v-if="login">
      <LoginType />
      <q-btn flat class="botao-voltar" label="Voltar" @click="voltar" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'MainAccess',
  data () {
    return {
      login: false
    }
  },
  methods: {
    submitLogin () {
      this.login = true
    },
    voltar () {
      this.login = false
    }
  }
}
</script>
