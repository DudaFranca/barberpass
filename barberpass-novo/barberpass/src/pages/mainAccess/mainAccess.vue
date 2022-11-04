<template>
  <q-page class="container fundo">
    <div class="logo logo-grande">
      <img src="../../../public/img/logo.svg" alt="">
    </div>
    <div v-if="login == false">
      <div class="btn-padrao">
        <q-btn class="login botao" label="Login" @click="submitLogin" />
        </div>
      <div class="q-mt-lg btn-padrao">
        <q-btn class="botao" label="Cadastre-se" />
      </div>
    </div>
    <div v-if="login">
      <LoginType />
      <q-btn flat class="botao-voltar" label="Voltar" @click="voltar" />
    </div>
  </q-page>
</template>

<script>
import LoginType from '../../components/loginType/loginType.vue'
export default {
  name: 'MainAccess',
  components: {
    LoginType
  },
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
