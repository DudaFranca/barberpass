<template>
  <q-page class="container fundo">
    <div class="btn-padrao">
      <q-btn class="login botao" label="Login" to="/cliente/login" />
      </div>
    <div class="q-mt-lg btn-padrao">
      <q-btn class="botao" label="Cadastre-se" to="/cliente/cadastro" />
    </div>
    <div class="q-mt-lg">
      <q-btn flat class="botao-voltar" label="Voltar" to="/" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'MainAccess',
  data () {
    return {
      
    }
  },
}
</script>
